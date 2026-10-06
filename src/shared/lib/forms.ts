import type React from "react";
import { useState } from "react";
import { site } from "@/config/site";

export type FormStatus = "idle" | "submitting" | "success" | "error";

/**
 * Posts a form to the configured forms endpoint (see `site.formsEndpoint`).
 * Without an endpoint the site runs in demo mode: submissions are logged and succeed so the UI can be exercised.
 */
export async function submitForm(
	formName: string,
	data: FormData,
): Promise<void> {
	data.set("_form", formName);
	if (!data.has("_subject")) {
		data.set("_subject", `[${site.name}] ${formName}`);
	}

	if (!site.formsEndpoint) {
		console.info(
			`[forms] "${formName}" submitted (demo mode, no VITE_FORMS_ENDPOINT set):`,
			Object.fromEntries(data),
		);
		await new Promise((r) => setTimeout(r, 600));
		return;
	}

	const res = await fetch(site.formsEndpoint, {
		method: "POST",
		body: data,
		headers: { Accept: "application/json" },
	});
	if (!res.ok) {
		throw new Error(`Form submission failed with status ${res.status}`);
	}
}

/** Wires a <form> to `submitForm` and tracks its status. */
export function useFormSubmit(formName: string) {
	const [status, setStatus] = useState<FormStatus>("idle");

	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const form = e.currentTarget;
		const data = new FormData(form);

		// Honeypot: real users never fill this hidden field.
		if (data.get("_gotcha")) {
			setStatus("success");
			return;
		}

		setStatus("submitting");
		try {
			await submitForm(formName, data);
			form.reset();
			setStatus("success");
		} catch (error) {
			console.error(error);
			setStatus("error");
		}
	};

	return { status, setStatus, onSubmit };
}
