"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/ui/animated-list";

interface Item {
  title: string;
  year: string;
  company: string;
}

const notifications: Item[] = [
  {
    title: "Freelance",
    year: "December 2022 - Present",
    company: "Software House",
  },
  {
    title: "Intern Field of Membership",
    year: "August 2022 - November 2022",
    company: "BPJS Ketenagakerjaan Makassar",
  },
];

const repeatedNotifications = Array.from(
  { length: 10 },
  () => notifications
).flat();

const Achievement: React.FC<Item> = ({ title, year, company }) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[300px] cursor-pointer overflow-hidden rounded-2xl p-4",
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        "bg-primary_400 ",
        "transform-gpu backdrop-blur-md [border:1px_solid_rgba(255,255,255,.1)] "
      )}
    >
      <div className="grid items-start justify-center w-full grid-cols-1 gap-2 overflow-y-auto rounded-lg item text-primary_200">
        <div className="flex flex-col gap-1 rounded-lg bg-primary_400 text-primary_200">
          <div>
            <p>{title}</p>
            <p className="text-sm text-primary_300">{year}</p>
          </div>
          <p className=" text-primary">{company}</p>
        </div>
      </div>
    </figure>
  );
};

export const CareerSub: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div
      className={cn(
        "relative flex h-[250px] w-full flex-col overflow-hidden rounded-lg bg-background ",
        className
      )}
    >
      <AnimatedList delay={2000} className="my-1">
        {repeatedNotifications.map((item, idx) => (
          <Achievement {...item} key={idx} />
        ))}
      </AnimatedList>
    </div>
  );
};

export default CareerSub;
