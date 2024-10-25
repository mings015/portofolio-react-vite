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
    title: "2st Winner of Kalla Future Leaders",
    year: "2024",
    company: "KALLA Group",
  },
  {
    title: "Associate Data Scientist of VSGA",
    year: "2024",
    company: "Digital Talent Scholarship",
  },
  {
    title: "Operator Komputer Madya of VSGA",
    year: "2024",
    company: "Digital Talent Scholarship",
  },
  {
    title: "LKMM-TM2022 WilayahSulawesi Selatan",
    year: "2022",
    company: "Direktorat Jenderal Pendidikan Tinggi",
  },
];

const repeatedNotifications = Array.from(
  { length: 10 },
  () => notifications
).flat();

const Achievement: React.FC<Item> = ({
    title,
    year,
    company
  
}) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        "bg-primary_400 ",
        "transform-gpu backdrop-blur-md [border:1px_solid_rgba(255,255,255,.1)] "
      )}
    >
      <div className="flex flex-col flex-1 gap-1 rounded-lg bg-primary_400 text-primary_200 ">
        <div className="flex justify-between">
          <p>{title}</p>
          <p>{year}</p>
        </div>
        <p className="text-primary">{company}</p>
      </div>
    </figure>
  );
};

export const AnimatedListDemo: React.FC<{ className?: string }> = ({
  className,
}) => {
  return (
    <div
      className={cn(
        "relative flex h-[500px] w-full flex-col overflow-hidden rounded-lg bg-background md:shadow-xl",
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

export default AnimatedListDemo;
