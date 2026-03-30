import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="flex min-h-[80vh] w-full items-center justify-center bg-white px-6">
      <div className="flex flex-col items-center gap-6 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl md:text-6xl">
          Welcome to Pre-WrapLab2
        </h1>
        <p className="max-w-xl text-lg text-zinc-600 sm:text-xl">
          I build things for the web.
        </p>
        <Link
          href="#contact"
          className="mt-2 inline-block rounded-full bg-zinc-900 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-zinc-700"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
}
