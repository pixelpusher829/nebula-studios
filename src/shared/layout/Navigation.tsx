import { Menu, X } from "lucide-react";
import type React from "react";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { site } from "@/config/site";
import type { NavItem } from "@/shared/types/types";
import { Logo } from "./Logo";

export const navItems: NavItem[] = [
	{ label: "Games", href: "/games" },
	{ label: "Studio", href: "/studio" },
	{ label: "News", href: "/news" },
	{ label: "Careers", href: "/careers" },
	{ label: "Press", href: "/press" },
	{ label: "Contact", href: "/contact" },
];

export const Navigation: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const { pathname } = useLocation();

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 50);
		handleScroll();
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// Close the mobile menu whenever the route changes.
	// biome-ignore lint/correctness/useExhaustiveDependencies: pathname is the trigger
	useEffect(() => setIsOpen(false), [pathname]);

	useEffect(() => {
		if (!isOpen) return;
		const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsOpen(false);
		document.addEventListener("keydown", onKey);
		return () => document.removeEventListener("keydown", onKey);
	}, [isOpen]);

	// Pages with a full-bleed hero image get a transparent bar until the user scrolls.
	const hasHero = pathname === "/" || /^\/(games|news)\/[^/]+/.test(pathname);
	const solid = scrolled || isOpen || !hasHero;
	const navBackground = solid
		? "bg-studio-black/95 border-b border-white/10 py-4 backdrop-blur-md"
		: "bg-transparent border-b border-transparent py-6";

	return (
		<header
			className={`fixed top-0 z-50 w-full transition-all duration-500 ${navBackground}`}
		>
			<nav aria-label="Main" className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="flex items-center justify-between">
					<Link
						to="/"
						className="flex shrink-0 items-center gap-3"
						aria-label={`${site.name} home`}
					>
						<Logo />
						<span className="font-display text-3xl font-bold tracking-widest text-white uppercase">
							{site.shortName}
						</span>
					</Link>

					{/* Desktop Nav */}
					<ul className="hidden items-center space-x-8 xl:flex">
						{navItems.map((item) => (
							<li key={item.href}>
								<NavLink
									to={item.href}
									className={({ isActive }) =>
										`group relative font-sans text-sm font-medium tracking-widest uppercase transition-colors ${isActive ? "text-white" : "text-studio-light hover:text-white"}`
									}
								>
									{({ isActive }) => (
										<>
											{item.label}
											<span
												className={`bg-studio-accent absolute -bottom-2 left-0 h-0.5 transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
											/>
										</>
									)}
								</NavLink>
							</li>
						))}
					</ul>

					<Link
						to="/careers"
						className="text-studio-black font-display hover:bg-studio-accent hidden rounded bg-white px-6 py-2 text-sm font-bold tracking-wide uppercase transition-all duration-300 hover:-translate-y-0.5 hover:text-white xl:block"
					>
						Join Us
					</Link>

					{/* Mobile Menu Button */}
					<button
						type="button"
						onClick={() => setIsOpen(!isOpen)}
						className="p-2 text-white xl:hidden"
						aria-expanded={isOpen}
						aria-controls="mobile-menu"
						aria-label={isOpen ? "Close menu" : "Open menu"}
					>
						{isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
					</button>
				</div>
			</nav>

			{/* Mobile Menu */}
			{isOpen && (
				<div
					id="mobile-menu"
					className="bg-studio-dark absolute top-full max-h-[calc(100dvh-5rem)] w-full overflow-y-auto border-b border-white/10 shadow-2xl xl:hidden"
				>
					<ul className="space-y-1 px-4 pt-4 pb-6">
						{navItems.map((item) => (
							<li key={item.href}>
								<NavLink
									to={item.href}
									className={({ isActive }) =>
										`font-display hover:bg-studio-card block rounded-md px-3 py-4 text-base font-medium tracking-widest uppercase ${isActive ? "text-studio-accent" : "text-white"}`
									}
								>
									{item.label}
								</NavLink>
							</li>
						))}
						<li className="pt-2">
							<Link
								to="/careers"
								className="bg-studio-accent font-display block rounded px-3 py-4 text-center font-bold tracking-wider text-white uppercase"
							>
								Join Us
							</Link>
						</li>
					</ul>
				</div>
			)}
		</header>
	);
};
