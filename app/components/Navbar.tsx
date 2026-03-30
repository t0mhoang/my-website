import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-zinc-900 hover:text-zinc-600"
        >
          My Website
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="text-zinc-700 hover:text-zinc-900">
            Home
          </Link>
          <Link href="/about" className="text-zinc-700 hover:text-zinc-900">
            About
          </Link>
          <Link href="#contact" className="text-zinc-700 hover:text-zinc-900">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
