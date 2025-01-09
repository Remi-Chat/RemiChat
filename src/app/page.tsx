"use client";
import { Header } from "@/components/header";
import { StatCard } from "@/components/stat-card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState, useEffect } from "react";
import { AppleCardsCarouselDemo } from "@/components/apple-cards-demo";
import { AuroraBackground } from "@/components/ui/aurora-background";
import WordRotate from "@/components/ui/word-rotate";
import { StatsCounter } from "@/components/stats-counter";
import { Footer } from "@/components/footer";
export default function Home() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [menuHeight, setMenuHeight] = useState(0);

  useEffect(() => {
    const updateMenuHeight = () => {
      const header = document.querySelector("header");
      if (header) {
        setMenuHeight(header.offsetHeight);
      }
    };

    updateMenuHeight();
    window.addEventListener("resize", updateMenuHeight);
    return () => window.removeEventListener("resize", updateMenuHeight);
  }, []);

  return (
    <div className="min-h-screen bg-[#EEEEEE]">
      <Header />

      {/* Hero Section */}
      <AuroraBackground>
        <section
          className="max-w-[90%] md:max-w-[70%] mx-auto"
          style={{
            height: "fit-content",
          }}
        >
          <div className="relative flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="max-w-2xl w-full md:w-2/3 my-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <WordRotate
                  className="text-[#3B1E54] mr-4"
                  words={["Connect", "Interact", "Chat", "Share"]}
                />
                with people in a safe way!
              </h1>
              <p className="text-[#3B1E54]/80 mb-8 text-base md:text-lg leading-relaxed">
                RemiChat is a community driven platform which allows you to
                connect to people around the world. Its, safe, secure and open!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-[#3B1E54] hover:bg-[#3B1E54]/90 w-full sm:w-auto"
                >
                  Join the Waitlist
                </Button>
                <Button
                  size="lg"
                  className="bg-[#9B7EBD] hover:bg-[#9B7EBD]/90 text-white w-full sm:w-auto"
                >
                  Donate
                </Button>
              </div>
              <div className="container mx-auto px-4">
                <StatsCounter signups={12} donations={15} />
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="w-full md:w-2/5 flex justify-center md:justify-end">
              <Image
                src="/hero.png"
                alt="Decorative illustration"
                width={600}
                height={600}
                className="object-contain"
              />
            </div>
          </div>
        </section>
      </AuroraBackground>
      <AppleCardsCarouselDemo />

      {/* Mission Section */}
      <section className="py-12 md:pt-18 md:pb-24  px-4 md:px-6 max-w-[90%] md:max-w-[80%] mx-auto">
        <div className="bg-white rounded-3xl p-6 md:p-12 shadow-lg">
          <div className="max-w-2xl mb-8 md:mb-12">
            <h2 className="text-xl md:text-2xl font-semibold mb-2 text-[#3B1E54]">
              Why RemiChat?
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-[#3B1E54]">
              Our mission is user privacy
            </h3>
            <p className="text-[#3B1E54]/80 leading-relaxed">
              We wish to provide a platform where users can connect with each,
              interact, and build a community without having to worry about
              their privacy or paywalls. We are a community driven platform and
              we believe in the power of open-source
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-8">
            <StatCard value="2B+" label="Message Sent" />
            <StatCard value="500M" label="Active User" />
            <StatCard value="150+" label="Available country" />
            <StatCard value="10x" label="Send & Upload Speed" />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
