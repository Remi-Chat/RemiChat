"use client";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full pt-20 pb-18">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Why RemiChat.
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const OpenSourceDescription = () => {
  // why we are making this open source
  return (
    <div className="flex flex-col gap-4">
      <p className="text-neutral-700 dark:text-neutral-300 bg-[#F5F5F7] dark:bg-neutral-800 p-5 md:p-7 rounded-3xl">
        Since we completely rely on the community for the development of
        RemiChat, we have decided to make it open-source. This will allow the
        community to contribute to the development of the app and make it better
        for everyone.
      </p>
      <p className="text-neutral-700 dark:text-neutral-300 bg-[#F5F5F7] dark:bg-neutral-800 p-5 md:p-7 rounded-3xl">
        We believe that the community can help us make RemiChat the best chat
        app out there. We are excited to see what the community can do with
        RemiChat and how it can help us improve the app.
      </p>
      <p className="text-neutral-700 dark:text-neutral-300 bg-[#F5F5F7] dark:bg-neutral-800 p-5 md:p-7 rounded-3xl">
        Hence we have decided to make RemiChat completely open-source. We hope
        that the community will help us make RemiChat the best chat app out
        there. You can find the source code and contribute to the project on our
        GitHub repository:{" "}
        <a
          href="https://github.com/Remi-Chat"
          className="text-blue-500 underline"
        >
          Github
        </a>
        .
      </p>
    </div>
  );
};
const CommunityDrivenDescription = () => {
  // why we wish to make it community driven
  return (
    <div className="flex flex-col gap-4">
      <p className="text-neutral-700 dark:text-neutral-300 bg-[#F5F5F7] dark:bg-neutral-800 p-5 md:p-7 rounded-3xl">
        We have been across, directly and indirectly, many platforms which
        operate on a purely profit-driven model. We have seen how the community
        is often left out of the development process and how the users are often
        left with no say in the development of the app.
      </p>
      <p className="text-neutral-700 dark:text-neutral-300 bg-[#F5F5F7] dark:bg-neutral-800 p-5 md:p-7 rounded-3xl">
        We wish to change that with RemiChat. We want the community to be a part
        of the platform they use, their inputs actually being reflected as
        changes on the platform. We want the community to be the driving force
        behind the development of RemiChat.
      </p>
    </div>
  );
};

const DonationsDescription = () => {
  // project development and hosting of such a platform is expensive and hence we rely on donations and community support
  return (
    <div className="flex flex-col gap-4">
      <p className="text-neutral-700 dark:text-neutral-300 bg-[#F5F5F7] dark:bg-neutral-800 p-5 md:p-7 rounded-3xl">
        RemiChat is completely free to use and will always be. We do not believe
        in charging the community for using the platform. We believe that
        everyone should have access to a good chat app and that is why we have
        decided to make RemiChat free.
      </p>
      <p className="text-neutral-700 dark:text-neutral-300 bg-[#F5F5F7] dark:bg-neutral-800 p-5 md:p-7 rounded-3xl">
        However, the development and hosting of such a platform is expensive. We
        rely on donations from the community to keep RemiChat running. We are
        grateful for the support we have received from the community so far and
        we hope that the community will continue to support us in the future.
      </p>
      <p className="text-neutral-700 dark:text-neutral-300 bg-[#F5F5F7] dark:bg-neutral-800 p-5 md:p-7 rounded-3xl">
        If you would like to support us, you can make a donation here:{" "}
        <a
          href="https://ko-fi.com/remichat"
          className="text-blue-500 underline"
        >
          Donate
        </a>
        .
      </p>
    </div>
  );
};

const PrivacyFocusedDescription = () => {
  // why we are privacy focused
  return (
    <div className="flex flex-col gap-4">
      <p className="text-neutral-700 dark:text-neutral-300 bg-[#F5F5F7] dark:bg-neutral-800 p-5 md:p-7 rounded-3xl">
        We believe that privacy is a fundamental right and that everyone should
        have control over their own data. We have seen how many chat apps
        collect and sell user data without their consent and we do not want to
        be a part of that.
      </p>
      <p className="text-neutral-700 dark:text-neutral-300 bg-[#F5F5F7] dark:bg-neutral-800 p-5 md:p-7 rounded-3xl">
        That is why we have made privacy our top priority. We do not collect any
        user data without their consent and we do not sell user data to third
        parties. We believe that the user should have complete control over
        their data and that is why we have designed RemiChat with privacy in
        mind.
      </p>
      <p className="text-neutral-700 dark:text-neutral-300 bg-[#F5F5F7] dark:bg-neutral-800 p-5 md:p-7 rounded-3xl">
        We are committed to protecting the privacy of our users and we will
        continue to do so in the future. If you have any questions or concerns
        about privacy, please feel free to contact us at{" "}
        <a
          href="mailto:remichat.live@gmail.com"
          className="text-blue-500 underline"
        >
          RemiChat
        </a>
        .
      </p>
    </div>
  );
};
const data = [
  {
    category: "Open-Source",
    title: "Completely open-source.",
    src: "https://images.unsplash.com/photo-1731908126566-18d3adff23b8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <OpenSourceDescription />,
  },
  {
    category: "Community Driven.",
    title: "Driven by contributions from the community.",
    src: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <CommunityDrivenDescription />,
  },
  {
    category: "Privacy Focused",
    title: "Privacy is the priority.",
    src: "https://images.unsplash.com/photo-1613987750911-f768497fb94b?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <PrivacyFocusedDescription />,
  },

  {
    category: "Free, No asterisks.",
    title: "Upheld by the donations from the community.",
    src: "https://plus.unsplash.com/premium_photo-1683134261048-dfb427f8becf?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DonationsDescription />,
  },
];
