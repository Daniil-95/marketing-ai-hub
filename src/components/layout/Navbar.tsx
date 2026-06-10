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
    <header className="border-b">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-xl font-bold"
        >
          Marketing AI Hub
        </Link>

        <nav>
          <ul className="flex gap-6">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="hover:text-blue-600"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}