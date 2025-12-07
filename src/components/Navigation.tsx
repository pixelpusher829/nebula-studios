import type React from "react";
import { useState, useEffect } from "react";
import { Menu, X, User } from "lucide-react";
import type { NavItem } from "@/types/types";
import { useNavigation } from "@/App";
import { Logo } from "./Logo";
import { Link } from "react-router-dom";

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
  const { currentPath } = useNavigation();

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

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${navBackground}`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="flex flex-shrink-0 items-center gap-3"
          >
            <Logo />
            <span className="font-display text-3xl font-bold tracking-widest text-white uppercase">
              NEBULA
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center space-x-8 xl:flex">
            {navItems.map((item) => {
              const isActive = currentPath === item.href;
              return (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`group relative font-sans text-sm font-medium tracking-widest uppercase transition-colors ${isActive ? "text-white" : "text-studio-light hover:text-white"}`}
                >
                  {item.label}
                  <span
                    className={`bg-studio-accent absolute -bottom-2 left-0 h-0.5 transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                  ></span>
                </Link>
              );
            })}
          </div>

          {/* Right Area */}
          <div className="hidden items-center gap-6 xl:flex">
            <button className="text-studio-light flex items-center gap-2 text-sm font-medium transition-colors hover:text-white">
              <User className="h-4 w-4" /> LOGIN
            </button>
            <Link
              to="/careers"
              className="text-studio-black font-display hover:bg-studio-accent transform rounded bg-white px-6 py-2 text-sm font-bold tracking-wide uppercase transition-all duration-300 hover:-translate-y-0.5 hover:text-white"
            >
              Join Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex xl:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-white"
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
        <div className="bg-studio-dark absolute top-full w-full border-b border-white/10 shadow-2xl xl:hidden">
          <div className="space-y-2 px-4 pt-4 pb-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className="font-display hover:bg-studio-card block rounded-md px-3 py-4 text-base font-medium text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
