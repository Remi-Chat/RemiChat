import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export function Features() {
  return (
    <BentoGrid className="max-w-7xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          background="https://images.unsplash.com/photo-1646766677899-9c1750e28b0f?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className={"text-[rgb(59 30 84)]"}
        />
      ))}
    </BentoGrid>
  );
}

const ImageBox = ({ url }: { url: string }) => (
  <div
    className="flex flex-1 w-full h-full min-h-[12rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"
    style={{
      backgroundImage: `url(${url})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  ></div>
);

const items = [
  {
    title: "1v1 Anonymous Chat",
    description:
      "A space to connect with people across the world on 1-on-1 chat. Filter on basis of culture, interests, and more.",
    header: (
      <ImageBox url="https://images.unsplash.com/photo-1646766677899-9c1750e28b0f?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
    ),
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "General Group Chat",
    description:
      "A area where users can join and chat in groups in an open format.",
    header: (
      <ImageBox url="https://plus.unsplash.com/premium_photo-1664278686070-f3e080d8aeff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8R3JvdXAlMjBjaGF0fGVufDB8fDB8fHww" />
    ),
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Friends n More",
    description:
      "Add people you find cool as friends, stay in touch, dm and more.",
    header: (
      <ImageBox url="https://plus.unsplash.com/premium_photo-1661715804059-cc71a28f2c34?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZnJpZW5kc2hpcHxlbnwwfHwwfHx8MA%3D%3D" />
    ),
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "AI driven moderation",
    description:
      "Complete platform will be AI moderated to ensure safety and security of the content shared.",
    header: (
      <ImageBox url="https://plus.unsplash.com/premium_photo-1683121718643-fb18d2668d53?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
    ),
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Video Chat (upcoming)",
    description:
      "Just like 1v1 chats, you will be able to connect and find people with matching interests to video chat with.",
    header: (
      <ImageBox url="https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
    ),
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Media Channels (upcoming)",
    description:
      "Channels where people can join in with videos on or off, listen to songs together and watch other media content.",
    header: (
      <ImageBox url="https://images.unsplash.com/photo-1471478331149-c72f17e33c73?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
    ),
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
];
