import { X } from "lucide-react";
import type React from "react";
import { useEffect, useRef } from "react";

interface VideoDialogProps {
	/** YouTube video ID. The dialog is open whenever this is set. */
	videoId: string | null;
	title: string;
	onClose: () => void;
}

/**
 * Accessible YouTube player in a native <dialog>: Escape closes it, focus is trapped,
 * and the page behind is inert. Uses youtube-nocookie.com for privacy.
 */
export const VideoDialog: React.FC<VideoDialogProps> = ({
	videoId,
	title,
	onClose,
}) => {
	const ref = useRef<HTMLDialogElement>(null);

	useEffect(() => {
		const dialog = ref.current;
		if (!dialog) return;
		if (videoId && !dialog.open) dialog.showModal();
		if (!videoId && dialog.open) dialog.close();
	}, [videoId]);

	return (
		// biome-ignore lint/a11y/useKeyWithClickEvents: backdrop click is a mouse convenience; Escape closes natively
		<dialog
			ref={ref}
			onClose={onClose}
			onClick={(e) => e.target === ref.current && onClose()}
			aria-label={title}
			className="m-auto w-[min(64rem,calc(100vw-2rem))] overflow-visible bg-transparent p-0 backdrop:bg-black/85 backdrop:backdrop-blur-sm"
		>
			{videoId && (
				<div className="relative">
					<button
						type="button"
						onClick={onClose}
						className="absolute -top-12 right-0 rounded-full bg-white p-2 text-black transition-transform hover:scale-110"
						aria-label="Close video"
					>
						<X className="h-5 w-5" />
					</button>
					<div className="aspect-video overflow-hidden rounded-lg bg-black shadow-2xl">
						<iframe
							className="h-full w-full"
							src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
							title={title}
							allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
							allowFullScreen
						/>
					</div>
				</div>
			)}
		</dialog>
	);
};
