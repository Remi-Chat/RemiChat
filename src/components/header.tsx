"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? "bg-white shadow-md py-3 max-w-[95%] md:max-w-[80%] mx-auto mt-3 rounded-lg"
          : "bg-white/80 py-3"
      }`}
    >
      <div className="flex items-center justify-between max-w-[90%] md:max-w-[80%] mx-auto">
        {/* Logo and Brand Name */}
        <div className="flex items-center gap-4">
          <Image src="/favicon.png" alt="RemiChat" width={40} height={40} />
          <Link
            href="/"
            className="text-xl sm:text-2xl font-bold text-[#3B1E54]"
          >
            RemiChat
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {["Home", "Why us?", "Features", "About Us"].map((item) => (
            <Link
              key={item}
              href="#"
              className={`text-sm font-medium transition-all duration-300 text-gray-600 hover:text-[#3B1E54]`}
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Desktop-only Support Button */}
        <div className="hidden md:block">
          <Link
            href="https://ko-fi.com/remichat"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className={`px-4 py-2 rounded transition-all duration-300 ${
                isScrolled
                  ? "bg-[#3B1E54] hover:bg-[#3B1E54]/90 text-white"
                  : "bg-white text-[#3B1E54] hover:bg-white/90"
              }`}
            >
              Support Us
            </button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X
              size={24}
              className={isScrolled ? "text-[#3B1E54]" : "text-[#3B1E54]"}
            />
          ) : (
            <Menu
              size={24}
              className={isScrolled ? "text-[#3B1E54]" : "text-[#3B1E54]"}
            />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col items-center gap-4 py-4">
            {["Home", "Why us?", "Features", "About Us"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-sm font-medium text-gray-600 hover:text-[#3B1E54]"
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
