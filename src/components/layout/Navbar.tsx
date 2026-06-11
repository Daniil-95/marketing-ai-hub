"use client";

import { useState } from "react";
import Link from "next/link";

const navigation = [
  {
    title: "Dashboard",
    href: "/dashboard",
  },
  {
    title: "Článek",
    href: "/article",
  },
  {
    title: "AI Assistant",
    href: "/ai-assistant",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          title="Marketing AI Hub"
          className="flex items-center gap-3"
        >
          <div className="h-3 w-3 rounded-full bg-violet-500 shadow-[0_0_20px_rgb(139,92,246)]" />

          <span className="text-base font-semibold tracking-tight sm:text-lg">
            Marketing AI Hub
          </span>
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden md:block"
        >
          <ul className="flex items-center gap-2">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-lg px-4 py-2 text-sm text-zinc-300 transition-all duration-200 hover:bg-zinc-900 hover:text-white"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-300 md:block">
          AI Powered
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 transition hover:bg-zinc-900 md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {isOpen ? (
              <path d="M6 6L18 18M18 6L6 18" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {isOpen && (
        <nav
          aria-label="Mobile navigation"
          className="border-t border-zinc-800 md:hidden"
        >
          <ul className="flex flex-col p-4">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-lg px-4 py-3 text-zinc-300 transition hover:bg-zinc-900 hover:text-white"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}