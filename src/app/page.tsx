"use client";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { AppleCardsCarouselDemo } from "@/components/apple-cards-demo";
import { AuroraBackground } from "@/components/ui/aurora-background";
import WordRotate from "@/components/ui/word-rotate";
import { StatsCounter } from "@/components/stats-counter";
import { Footer } from "@/components/footer";
import { Features } from "@/components/features";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#EEEEEE]">
      <Header />

      <AuroraBackground>
        <section
          className="max-w-[95%] sm:max-w-[90%] md:max-w-[70%] mx-auto"
          style={{
            height: "fit-content",
          }}
        >
          <div className="relative flex flex-col-reverse items-center md:flex-row md:items-start gap-6 md:gap-8 mt-[16rem] mb-[2rem] md:mt-[4rem]">
            {/* Left Content */}
            <div className="max-w-2xl w-full md:w-2/3 my-auto text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 md:mb-6">
                <WordRotate
                  className="text-[#3B1E54] mr-2 md:mr-4"
                  words={["Connect", "Interact", "Chat", "Share"]}
                />
                with people in a safe way!
              </h1>
              <p className="text-[#3B1E54]/80 mb-8 text-sm sm:text-base md:text-lg leading-relaxed">
                RemiChat is a community-driven platform that allows you to
                connect to people around the world. It&apos;s safe, secure, and
                open!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button
                  size="lg"
                  className="bg-[#3B1E54] hover:bg-[#3B1E54]/90 w-full sm:w-auto"
                >
                  Join the Waitlist
                </Button>
                <Link
                  href="https://ko-fi.com/remichat"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="bg-[#9B7EBD] hover:bg-[#9B7EBD]/90 text-white w-full sm:w-auto"
                  >
                    Donate
                  </Button>
                </Link>
              </div>
              <div className="mx-auto px-4 mt-6">
                <StatsCounter signups={12} donations={15} />
              </div>
            </div>

            {/* Right Image */}
            <div className="w-full md:w-2/5 flex justify-center md:justify-end">
              <Image
                src="/hero.png"
                alt="Decorative illustration"
                width={600}
                height={600}
                className="object-contain"
                priority
              />
            </div>
          </div>
        </section>
      </AuroraBackground>

      {/* Carousel Section */}
      <section className="py-12 mt-[2rem] md:mt-[0rem]">
        <AppleCardsCarouselDemo />
      </section>

      {/* Features Section */}
      <section className="py-12 md:pt-18 md:pb-24 px-4 md:px-6 max-w-[95%] sm:max-w-[90%] md:max-w-[80%] mx-auto">
        <div className="bg-white rounded-3xl p-6 md:p-12 shadow-lg">
          <div className="max-w-2xl mb-8 md:mb-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-[#3B1E54]">
              Features of RemiChat
            </h3>
            <p className="text-[#3B1E54]/80 text-sm sm:text-base leading-relaxed">
              We aim to provide a platform where users can connect with each
              other, interact, and build a community without worrying about
              their privacy or paywalls. We are a community-driven platform and
              believe in the power of open-source.
            </p>
          </div>
          <Features />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
