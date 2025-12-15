import type React from "react";
import { Link } from "react-router-dom";
import { Twitter, Youtube, Linkedin, Mail } from "lucide-react";
import { Logo } from "./Logo";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-studio-black border-t border-white/5 pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="col-span-1 lg:col-span-1">
            <div className="mb-6 flex items-center gap-3">
              <Logo />
              <span className="font-display text-3xl font-bold tracking-widest text-white uppercase">
                NEBULA
              </span>
            </div>
            <p className="text-studio-light mb-6 text-sm leading-relaxed">
              Pushing the boundaries of interactive entertainment since 2010. We
              create worlds you'll never want to leave.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="hover:bg-studio-accent flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white transition-colors"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="hover:bg-studio-accent flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="hover:bg-studio-accent flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white transition-colors"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display mb-6 text-lg font-bold tracking-wider text-white uppercase">
              Games
            </h4>
            <ul className="text-studio-light space-y-3 font-sans text-sm">
              <li>
                <Link
                  to="/games"
                  className="hover:text-studio-accent transition-colors"
                >
                  Echoes of Eternity
                </Link>
              </li>
              <li>
                <Link
                  to="/games"
                  className="hover:text-studio-accent transition-colors"
                >
                  Cyber Strike
                </Link>
              </li>
              <li>
                <Link
                  to="/games"
                  className="hover:text-studio-accent transition-colors"
                >
                  Starlight Drift
                </Link>
              </li>
              <li>
                <Link
                  to="/games"
                  className="hover:text-studio-accent transition-colors"
                >
                  Void Walker
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display mb-6 text-lg font-bold tracking-wider text-white uppercase">
              Company
            </h4>
            <ul className="text-studio-light space-y-3 font-sans text-sm">
              <li>
                <Link
                  to="/studio"
                  className="hover:text-studio-accent transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="hover:text-studio-accent transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/news"
                  className="hover:text-studio-accent transition-colors"
                >
                  News & Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/press"
                  className="hover:text-studio-accent transition-colors"
                >
                  Press Kit
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display mb-6 text-lg font-bold tracking-wider text-white uppercase">
              Newsletter
            </h4>
            <p className="text-studio-light mb-4 text-sm">
              Subscribe for beta access and studio news.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Email Address"
                className="focus:border-studio-accent w-full rounded-l border border-white/10 bg-white/5 px-4 py-2 text-sm text-white focus:outline-none"
              />
              <button className="bg-studio-accent rounded-r px-4 py-2 text-white transition-colors hover:bg-orange-600">
                <Mail className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="text-studio-light flex flex-col items-center justify-between border-t border-white/10 pt-8 font-sans text-xs md:flex-row">
          <p>&copy; 2024 NEBULA STUDIOS INC. ALL RIGHTS RESERVED.</p>
          <div className="mt-4 flex space-x-6 md:mt-0">
            <a href="#" className="transition-colors hover:text-white">
              PRIVACY POLICY
            </a>
            <a href="#" className="transition-colors hover:text-white">
              TERMS OF SERVICE
            </a>
            <a href="#" className="transition-colors hover:text-white">
              COOKIE SETTINGS
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
