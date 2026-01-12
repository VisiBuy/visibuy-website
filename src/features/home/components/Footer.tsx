import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* LEFT: Brand + socials */}
          <div className="flex flex-col justify-between">
            {/* Brand logo */}
            <div>
              <Image
                src="/white-logo.png"
                alt="Visibuy"
                width={140}
                height={40}
                className="mb-6"
              />

              {/* Social icons */}
              <div className="flex items-center gap-4 text-gray-400">
                <a href="#" className="hover:text-white transition">
                  <FaInstagram size={18} />
                </a>
                <a href="#" className="hover:text-white transition">
                  <FaTwitter size={18} />
                </a>
                <a href="#" className="hover:text-white transition">
                  <FaFacebookF size={18} />
                </a>
              </div>
            </div>

            {/* Copyright */}
            <p className="text-xs text-gray-500 mt-10">
              © 2024–2025 Visibuy. All rights reserved
            </p>
          </div>

          {/* RIGHT: Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10">
            {/* Product */}
            <div>
              <h4 className="text-sm font-semibold mb-4">Product</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-sm font-semibold mb-4">Resources</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-sm font-semibold mb-4">Company</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
