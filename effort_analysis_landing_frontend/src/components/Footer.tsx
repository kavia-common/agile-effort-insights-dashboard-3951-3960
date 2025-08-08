import React from "react";

// PUBLIC_INTERFACE
export default function Footer() {
  /** Landing page footer with minimal branding/info. */
  return (
    <footer className="mt-20 py-8 text-center bg-background border-t border-primary/10 text-xs text-gray-400">
      <span>
        &copy; {new Date().getFullYear()} Effort Analysis | Powered by AI | Crafted with <span className="text-accent">&#10084;</span>
      </span>
    </footer>
  );
}
