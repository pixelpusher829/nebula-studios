import { Component, type ErrorInfo, type ReactNode } from "react";

interface Props {
	children: ReactNode;
}

interface State {
	hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
	state: State = { hasError: false };

	static getDerivedStateFromError(): State {
		return { hasError: true };
	}

	componentDidCatch(error: Error, info: ErrorInfo) {
		console.error("Unhandled UI error:", error, info.componentStack);
	}

	render() {
		if (!this.state.hasError) return this.props.children;

		return (
			<div className="flex min-h-[70vh] flex-col items-center justify-center px-6 pt-32 text-center">
				<h1 className="font-display text-4xl font-bold text-white uppercase">
					Something went wrong
				</h1>
				<p className="text-studio-light mt-4 max-w-md">
					An unexpected error occurred. Reloading the page usually fixes it.
				</p>
				<button
					type="button"
					onClick={() => window.location.reload()}
					className="text-studio-black font-display hover:bg-studio-accent mt-8 rounded bg-white px-6 py-3 text-sm font-bold tracking-wide uppercase transition-colors hover:text-white"
				>
					Reload Page
				</button>
			</div>
		);
	}
}
