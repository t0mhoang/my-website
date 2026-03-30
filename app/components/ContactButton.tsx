"use client";

export default function ContactButton() {
  return (
    <section
      id="contact"
      className="flex w-full flex-col items-center justify-center gap-6 bg-zinc-50 px-6 py-24"
    >
      <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
        Get in Touch
      </h2>
      <p className="max-w-md text-center text-zinc-600">
        Have a question or want to work together? Send me an email.
      </p>
      <a
        href="mailto:hello@example.com"
        className="inline-block rounded-full border-2 border-zinc-900 px-8 py-3 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-900 hover:text-white"
      >
        hello@example.com
      </a>
    </section>
  );
}
