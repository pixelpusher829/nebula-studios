import type React from "react";
import logo from "@/assets/images/nebula-logo.svg";

/** Decorative mark; pair it with visible text or an aria-label on the parent link. */
export const Logo: React.FC = () => {
	return <img src={logo} alt="" width={52} height={37} className="w-13" />;
};
