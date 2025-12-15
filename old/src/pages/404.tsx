import type React from "react";
import { Link } from "react-router-dom";

export const NotFound: React.FC = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center pt-20 text-center">
      <h1 className="font-display text-studio-accent text-8xl font-bold">
        404
      </h1>
      <p className="mt-4 text-2xl font-semibold text-white">Page Not Found</p>
      <p className="text-studio-light mt-2">
        The page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="text-studio-black font-display hover:bg-studio-accent mt-8 rounded bg-white px-6 py-3 text-sm font-bold tracking-wide uppercase transition-all duration-300 hover:text-white"
      >
        Return Home
      </Link>
    </div>
  );
};
