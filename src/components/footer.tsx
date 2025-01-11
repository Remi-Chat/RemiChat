import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Twitter, Github, Mail } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-white">
      {/* CTA Section */}
      <div className="py-24 px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-[#3B1E54] mb-4">
            Ready connect and make friends?
          </h2>
          <p className="text-xl md:text-2xl text-[#3B1E54]/80 mb-8">
            Support our project by joining our waitlist and contributing to the
            donations.
          </p>
          <Link
            href="https://ko-fi.com/remichat"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="bg-[#3B1E54] hover:bg-[#3B1E54]/90">
              Contribute
            </Button>
          </Link>
        </div>
      </div>

      {/* Navigation */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div className="flex items-center gap-4">
              <Image
                src="/favicon.png"
                alt="RemiChat"
                width={40}
                height={40}
                className="object-contain"
              />
              <Link href="/" className="text-2xl font-bold text-[#3B1E54]">
                RemiChat
              </Link>
            </div>

            {/* Navigation Links */}
            <nav className="flex items-center gap-8">
              <Link
                href="#"
                className="text-sm text-gray-600 hover:text-[#3B1E54]"
              >
                About
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-600 hover:text-[#3B1E54]"
              >
                Features
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-600 hover:text-[#3B1E54]"
              >
                Works
              </Link>
              <Link
                href="mailto:remichat.live@gmail.com
"
                className="text-sm text-gray-600 hover:text-[#3B1E54]"
              >
                Support
              </Link>
            </nav>

            {/* Social Links */}
            <div className="flex items-center gap-6">
              <Link href="#" className="text-gray-400 hover:text-[#3B1E54]">
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="mailto:remichat.live@gmail.com"
                className="text-gray-400 hover:text-[#3B1E54]"
              >
                <Mail className="w-5 h-5" />
                <span className="sr-only">Mail</span>
              </Link>

              <Link
                href="https://github.com/remi-Chat"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#3B1E54]"
              >
                <Github className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              © Copyright {new Date().getFullYear()}, All Rights Reserved
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="#"
                className="text-sm text-gray-500 hover:text-[#3B1E54]"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-500 hover:text-[#3B1E54]"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
