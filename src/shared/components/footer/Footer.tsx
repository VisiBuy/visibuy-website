import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-12 lg:gap-x-6 lg:gap-y-12">
          
          {/* LEFT */}
          <div className="lg:col-span-5 flex flex-col">
            {/* Logo */}
            <div className="h-8 w-auto sm:h-9">
              <Image
                src="/VisiBuy - White.png"
                alt="Visibuy logo"
                width={140}
                height={32}
                className="h-full w-auto"
              />
            </div>

            {/* Socials */}
            <div className="mt-4 flex items-center gap-3 sm:mt-5">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-8 w-8 items-center justify-center rounded bg-[#E4405F] text-white hover:opacity-80"
              >
                <FaInstagram className="h-4 w-4" />
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="flex h-8 w-8 items-center justify-center rounded bg-[#1DA1F2] text-white hover:opacity-80"
              >
                <FaTwitter className="h-4 w-4" />
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61563139237527"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-8 w-8 items-center justify-center rounded bg-[#1877F2] text-white hover:opacity-80"
              >
                <FaFacebook className="h-4 w-4" />
              </a>
            </div>

            {/* Address */}
            <div className="mt-6 text-xs sm:text-sm">
              <p>Christ Holy Church Rd, Elelenwo, Port Harcourt, Rivers State</p>
            </div>

            <div className="hidden lg:block mt-6 text-xs sm:text-sm">
              © 2024–2026 VisiBuy. All rights reserved.
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              
              {/* PRODUCT */}
              <div>
                <h3 className="text-sm font-semibold text-white sm:text-base">
                  Product
                </h3>
                <ul className="mt-3 space-y-2 text-xs sm:text-sm">
                  <li>
                    <Link href="/faq" className="hover:text-white">
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white">
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link href="/trust-safety" className="hover:text-white">
                      Trust & Safety
                    </Link>
                  </li>
                </ul>
              </div>

              {/* COMPANY */}
              <div>
                <h3 className="text-sm font-semibold text-white sm:text-base">
                  Company
                </h3>
                <ul className="mt-3 space-y-2 text-xs sm:text-sm">
                  <li>
                    <Link href="/about" className="hover:text-white">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="hover:text-white">
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy" className="hover:text-white">
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Mobile copyright */}
            <div className="mt-8 text-center text-xs sm:text-sm md:hidden">
              © 2024–2026 VisiBuy. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
