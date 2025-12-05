import React, { useState, useEffect } from "react";
import { Menu, X, Globe, User } from "lucide-react";
import { NavItem } from "@/types/types";
import { useNavigation } from "@/App";
import { Logo } from "./Logo";

const navItems: NavItem[] = [
	{ label: "GAMES", href: "/games" },
	{ label: "STUDIO", href: "/studio" },
	{ label: "NEWS", href: "/news" },
	{ label: "CAREERS", href: "/careers" },
	{ label: "PRESS", href: "/press" },
	{ label: "CONTACT", href: "/contact" },
];

export const Navigation: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const { currentPath, navigate } = useNavigation();

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 50);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// Check if we are on the home page for transparency logic, otherwise always solid
	const isHome = currentPath === "/";
	const navBackground =
		isHome && !scrolled
			? "bg-transparent border-transparent py-6"
			: "bg-studio-black/95 border-b border-white/10 py-4 backdrop-blur-md";

	const handleNavClick = (href: string) => {
		navigate(href);
		setIsOpen(false);
	};

	return (
		<nav
			className={`fixed top-0 w-full z-50 transition-all duration-500 ${navBackground}`}
		>
			<div className="max-w-7xl mx-auto px-6 lg:px-8">
				<div className="flex items-center justify-between">
					{/* Logo */}
					<a
						onClick={() => handleNavClick("/")}
						className="flex-shrink-0 flex items-center gap-3 cursor-pointer"
					>
						<Logo />
						<span className="font-display font-bold text-4xl tracking-widest text-white uppercase">
							NEBULA
						</span>
					</a>

					{/* Desktop Nav */}
					<div className="hidden md:flex items-center space-x-8 lg:space-x-12">
						{navItems.map((item) => {
							const isActive = currentPath === item.href;
							return (
								<a
									key={item.label}
									onClick={() => handleNavClick(item.href)}
									className={`cursor-pointer text-sm font-sans font-medium transition-colors tracking-widest uppercase relative group ${isActive ? "text-white" : "text-studio-light hover:text-white"}`}
								>
									{item.label}
									<span
										className={`absolute -bottom-2 left-0 h-0.5 bg-studio-accent transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
									></span>
								</a>
							);
						})}
					</div>

					{/* Right Area */}
					<div className="hidden md:flex items-center gap-6">
						<button className="flex items-center gap-2 text-sm font-medium text-studio-light hover:text-white transition-colors">
							<User className="w-4 h-4" /> LOGIN
						</button>
						<button
							onClick={() => handleNavClick("/careers")}
							className="bg-white text-studio-black px-6 py-2 rounded font-bold font-display text-sm uppercase tracking-wide hover:bg-studio-accent hover:text-white transition-all duration-300 transform hover:-translate-y-0.5"
						>
							Join Us
						</button>
					</div>

					{/* Mobile Menu Button */}
					<div className="flex md:hidden">
						<button
							onClick={() => setIsOpen(!isOpen)}
							className="text-white p-2"
						>
							{isOpen ? (
								<X className="h-6 w-6" />
							) : (
								<Menu className="h-6 w-6" />
							)}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Menu */}
			{isOpen && (
				<div className="md:hidden bg-studio-dark absolute top-full w-full border-b border-white/10 shadow-2xl">
					<div className="px-4 pt-4 pb-6 space-y-2">
						{navItems.map((item) => (
							<a
								key={item.label}
								onClick={() => handleNavClick(item.href)}
								className="block px-3 py-4 text-base font-display font-medium text-white hover:bg-studio-card rounded-md cursor-pointer"
							>
								{item.label}
							</a>
						))}
					</div>
				</div>
			)}
		</nav>
	);
};
