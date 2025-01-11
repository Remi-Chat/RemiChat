"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import {
  IconArrowLeft,
  //   IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

const Logo = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-[#3B1E54] py-1 relative z-20"
    >
      <Image src="/favicon.png" width={30} height={30} alt="Logo" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-xl text-[#3B1E54] dark:text-[#EEEEEE] whitespace-pre"
        style={{
          fontSize: "1.1rem",
        }}
      >
        RemiChat
      </motion.span>
    </Link>
  );
};

const LogoIcon = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-[#3B1E54] py-1 relative z-20"
    >
      <Image src="/favicon.png" width={30} height={30} alt="Logo" />
    </Link>
  );
};

function SidebarDemo({ children }: { children: React.ReactNode }) {
  const links = [
    {
      label: "Profile",
      href: "#",
      icon: (
        <IconUserBolt className="text-[#3B1E54] dark:text-[#D4BEE4] h-5 w-5 flex-shrink-0" />
      ),
    },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div
      className={cn(
        "rounded-md flex flex-col md:flex-row bg-[#EEEEEE] dark:bg-[#3B1E54] w-full flex-1 max-w-full mx-auto border border-[#D4BEE4] dark:border-[#9B7EBD] overflow-hidden",
        "h-screen"
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>

          <div>
            <SidebarLink
              link={{
                label: "Manu Arora",
                href: "#",
                icon: (
                  <Image
                    src="https://assets.aceternity.com/manu.png"
                    className="h-7 w-7 flex-shrink-0 rounded-full"
                    width={50}
                    height={50}
                    alt="Avatar"
                  />
                ),
              }}
            />
            <SidebarLink
              link={{
                label: "Settings",
                href: "#",
                icon: (
                  <IconSettings className="text-[#3B1E54] dark:text-[#D4BEE4] h-5 w-5 flex-shrink-0" />
                ),
              }}
            />
            <SidebarLink
              link={{
                label: "Logout",
                href: "#",
                icon: (
                  <IconArrowLeft className="text-[#3B1E54] dark:text-[#D4BEE4] h-5 w-5 flex-shrink-0" />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      <main className="flex-1 overflow-y-auto h-full">{children}</main>
    </div>
  );
}

export default SidebarDemo;
