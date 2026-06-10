export default function Footer() {
  return (
    <footer className="mt-24 border-t border-zinc-800 bg-zinc-950/50">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-center md:flex-row md:text-left">
        <div>
          <h3 className="font-semibold text-white">
            Marketing AI Hub
          </h3>

          <p className="mt-2 text-sm text-zinc-400">
            Marketing analytics dashboard, SEO content platform
            and AI-powered marketing assistant.
          </p>
        </div>

        <div className="text-sm text-zinc-500">
          <p>Created by Daniil Andruško</p>
          <p>© 2026</p>
        </div>
      </div>
    </footer>
  );
}