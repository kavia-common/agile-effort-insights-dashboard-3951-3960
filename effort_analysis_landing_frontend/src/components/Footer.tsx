import React from "react";

// PUBLIC_INTERFACE
export default function Footer() {
  /** Landing page footer with minimal branding/info, now responsive. */
  return (
    <footer className="mt-14 sm:mt-20 py-6 sm:py-8 text-center bg-background border-t border-primary/10 text-xs xs:text-sm text-gray-400">
      <span>
        &copy; {new Date().getFullYear()} Effort Analysis | Powered by AI | Crafted with{" "}
        <span className="text-accent">&#10084;</span>
      </span>
    </footer>
  );
}
