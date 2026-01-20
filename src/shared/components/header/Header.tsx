"use client";

import Link from "next/link";
import { Button } from "@/shared/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/shared/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";

const navItems = [
  { label: "Home", href: "/" },
  { label: "How It Works", href: "#how-it-works", isAnchor: true },
  { label: "Pricing", href: "#pricing", isAnchor: true },
  { label: "About Us", href: "#about", isAnchor: true },
];

export function Header() {
  return (
    <header className=" sticky top-0 z-100 border-b border-neutral-200 bg-neutral-200">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-4 py-4 md:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="font-heading text-xl font-bold text-brand-primary"
        >
          <Image
            src="/images/shared/Visibuy-logo-blue.png"
            alt="VisiBuy"
            width={100}
            height={100}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-neutral-700 hover:text-brand-primary transition"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <Button
            variant="secondary"
            className="border-neutral-300 text-neutral-700"
          >
            Log in
          </Button>
          <Button>Get Started</Button>
        </div>

        {/* Mobile Nav */}
        <Sheet>
          <SheetTrigger className="lg:hidden h-9 w-9 bg-white rounded-full flex items-center justify-center">
            <Menu className="h-6 w-6 text-neutral-800  " />
          </SheetTrigger>
          <SheetContent side="right" className="pt-10">
            <div className="flex flex-col gap-6">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-base font-medium text-neutral-800"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <Button variant="secondary">Log in</Button>
                <Button>Get Started</Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
