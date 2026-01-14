import Link from "next/link";
import Image from "next/image";

const navItem = ["Home", "Home", "Home", "Home", "Home"];

export default function Navbar() {
  return (
    <header className="w-full py-6 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Visibuy logo"
            width={120}
            height={32}
            priority
          />
        </Link>

        {/* Center pill nav */}
        <nav className="hidden md:flex bg-blue-200 rounded-full p-1">
          {navItem.map((item, index) => (
            <Link
              key={index}
              href="#"
              className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                index === 0
                  ? "bg-white text-black shadow"
                  : "text-white hover:bg-white/60 hover:text-blue-400"
              }`}
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Right spacer */}
        <div className="w-20" />
      </div>
    </header>
  );
}
