"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
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
          ? "bg-white shadow-md py-4 max-w-[80%] mx-auto mt-3 rounded-lg"
          : "bg-white/80 py-6"
      }`}
    >
      <div className="flex items-center justify-between max-w-[60%] mx-auto">
        <div className="flex items-center gap-4">
          <Image src="/favicon.png" alt="RemiChat" width={40} height={40} />
          <Link href="/" className="text-2xl font-bold text-[#3B1E54]">
            RemiChat
          </Link>
        </div>
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
        <div className="flex items-center gap-4">
          <Button
            className={`transition-all duration-300 ${
              isScrolled
                ? "bg-[#3B1E54] hover:bg-[#3B1E54]/90"
                : "bg-white text-[#3B1E54] hover:bg-white/90"
            }`}
            onClick={() => window.open("https://ko-fi.com/remichat", "_blank")}
          >
            Support Us
          </Button>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X
                size={24}
                className={isScrolled ? "text-[#3B1E54]" : "text-white"}
              />
            ) : (
              <Menu
                size={24}
                className={isScrolled ? "text-[#3B1E54]" : "text-white"}
              />
            )}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col items-center gap-4 py-4 bg-white">
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
