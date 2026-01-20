import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-12 lg:gap-x-6 lg:gap-y-12">
          <div className="lg:col-span-5 flex flex-col">
            {/* Logo */}
            <div className="text-2xl font-black tracking-tight text-white sm:text-3xl">
              VISIBUY
            </div>

            {/* Social Icons */}
            <div className="mt-4 flex items-center gap-3 sm:mt-5">
              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded bg-[#E4405F] text-white transition-opacity hover:opacity-80"
                aria-label="Instagram"
              >
                <FaInstagram className="h-4 w-4" />
              </a>

              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded bg-[#1DA1F2] text-white transition-opacity hover:opacity-80"
                aria-label="Twitter"
              >
                <FaTwitter className="h-4 w-4" />
              </a>

              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded bg-[#1877F2] text-white transition-opacity hover:opacity-80"
                aria-label="Facebook"
              >
                <FaFacebook className="h-4 w-4" />
              </a>
            </div>

            {/* Addresses */}
            <div className="mt-6 space-y-2 text-xs leading-relaxed sm:text-sm">
              <p>1A, Ezeorah Street, Ijegun Imore, New Satellite Town, Lagos</p>
              <p>
                Christ Holy Church Rd, Elelenwo, Port Harcourt, Rivers State
              </p>
            </div>

            <div className="hidden lg:mt-6 lg:block text-left text-xs sm:text-sm">
              <p>© 2024-2025 VisiBuy. All rights reserved.</p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-4 lg:gap-4">
              {/* Product */}
              <div>
                <h3 className="text-sm font-semibold text-white sm:text-base">
                  Product
                </h3>
                <ul className="mt-3 space-y-2 text-xs sm:mt-4 sm:text-sm">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Pricing
                    </a>
                  </li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h3 className="text-sm font-semibold text-white sm:text-base">
                  Company
                </h3>
                <ul className="mt-3 space-y-2 text-xs sm:mt-4 sm:text-sm">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h3 className="text-sm font-semibold text-white sm:text-base">
                  Resources
                </h3>
                <ul className="mt-3 space-y-2 text-xs sm:mt-4 sm:text-sm">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 text-center text-xs sm:text-sm md:hidden">
              <p>© 2024-2025 VisiBuy. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
