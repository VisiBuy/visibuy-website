"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full border-b border-neutral-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8 lg:px-12">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/trust/VisiBuy - Logo.png"
            alt="VisiBuy logo"
            width={162}
            height={28}
            priority
          />
        </Link>

        {/* Desktop Navigation (ONLY lg+) */}
        <nav className="hidden items-center gap-6 lg:flex">
          <Link href="/" className="text-sm font-medium text-neutral-700 hover:text-neutral-900">
            Home
          </Link>
          <Link href="/how-its-works" className="text-sm font-medium text-neutral-700 hover:text-neutral-900">
            How it Works
          </Link>
          <Link href="#" className="text-sm font-medium text-neutral-700 hover:text-neutral-900">
            Pricing
          </Link>
          <Link href="/about" className="text-sm font-medium text-neutral-700 hover:text-neutral-900">
            About Us
          </Link>
        </nav>

        {/* Desktop Actions (ONLY lg+) */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="https://app.visibuy.com.ng"
            className="rounded-md border border-neutral-300 px-4 py-1.5 text-sm font-medium text-neutral-700 hover:bg-neutral-50"
          >
            Log in
          </Link>

          <Link
            href="https://app.visibuy.com.ng/signup"
            className="rounded-md bg-blue-600 px-4 py-1.5 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Get Started
          </Link>
        </div>

        {/* Hamburger (Phone + Tablet) */}
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center lg:hidden"
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile / Tablet Menu */}
      {open && (
        <div className="border-t border-neutral-200 bg-white lg:hidden">
          <nav className="flex flex-col gap-4 px-5 py-4">
            <Link href="/" onClick={() => setOpen(false)}>
              Home
            </Link>
            <Link href="/how-its-works" onClick={() => setOpen(false)}>
              How it Works
            </Link>
            <Link href="#" onClick={() => setOpen(false)}>
              Pricing
            </Link>
            <Link href="/about" onClick={() => setOpen(false)}>
              About Us
            </Link>

            <div className="mt-4 flex flex-col gap-3">
              <Link
                href="https://app.visibuy.com.ng"
                className="rounded-md border border-neutral-300 px-4 py-2 text-center text-sm font-medium"
              >
                Log in
              </Link>

              <Link
                href="https://app.visibuy.com.ng/signup"
                className="rounded-md bg-blue-600 px-4 py-2 text-center text-sm font-semibold text-white"
              >
                Get Started
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
