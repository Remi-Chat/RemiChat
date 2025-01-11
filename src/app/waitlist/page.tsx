"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function WaitlistPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmitted(true);
    setIsSubmitting(false);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#D4BEE4] to-[#EEEEEE]">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <Image
              src="/favicon.png"
              alt="RemiChat"
              width={80}
              height={80}
              className="object-contain"
            />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-[#3B1E54] sm:text-5xl mb-4">
            Join RemiChat Waitlist
          </h1>
          <p className="text-lg text-[#3B1E54]/80">
            Be among the first to experience a new way of connecting with people
            around the world. Safe, secure, and open!
          </p>
        </div>

        <Card className="max-w-md mx-auto border-[#9B7EBD]">
          <CardHeader>
            <CardTitle className="text-[#3B1E54]">
              Sign Up for Early Access
            </CardTitle>
            <CardDescription className="text-[#3B1E54]/70">
              Fill out the form below to secure your spot on our waitlist.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {!submitted ? (
              <form onSubmit={onSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-[#3B1E54]">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    required
                    placeholder="Enter your name"
                    className="border-[#9B7EBD] focus:border-[#3B1E54] focus:ring-[#3B1E54]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-[#3B1E54]">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="Enter your email"
                    className="border-[#9B7EBD] focus:border-[#3B1E54] focus:ring-[#3B1E54]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="reason" className="text-[#3B1E54]">
                    Why do you want to join?
                  </Label>
                  <Textarea
                    id="reason"
                    name="reason"
                    placeholder="Tell us why you're interested in RemiChat"
                    className="min-h-[100px] border-[#9B7EBD] focus:border-[#3B1E54] focus:ring-[#3B1E54]"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[#3B1E54] hover:bg-[#3B1E54]/90 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Join Waitlist"}
                </Button>
              </form>
            ) : (
              <div className="text-center py-6 space-y-4">
                <div className="text-2xl font-semibold text-[#3B1E54]">
                  🎉 You&apos;re on the list!
                </div>
                <p className="text-[#3B1E54]/80">
                  Thank you for joining our waitlist. We&apos;ll notify you when
                  RemiChat is ready!
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
