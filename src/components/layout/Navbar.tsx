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
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-3"
        >
          <div className="h-3 w-3 rounded-full bg-violet-500 shadow-[0_0_20px_rgb(139,92,246)]" />

          <span className="text-lg font-semibold tracking-tight">
            Marketing AI Hub
          </span>
        </Link>

        <nav>
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
      </div>
    </header>
  );
}