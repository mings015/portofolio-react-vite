import { BentoCard } from "@/components/ui/bento-grid";
import Marquee from "../ui/marquee";

const features = [
  {
    name: "Coming Soon.",
    description: "Coming Soon.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    name: "Coming Soon..",
    description: "Coming Soon..",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    name: "Coming Soon...",
    description: "Coming Soon...",
    href: "/",
    cta: "Learn more",
    background: (
      <img
        className="absolute opacity-30"
        src="https://milestone.co.id/uploads/src.jpg"
      />
    ),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];

export function BentoDemo() {
  return (
    <Marquee className="py-2" pauseOnHover>
      <div className="flex gap-6">
        {features.map((feature) => (
          <BentoCard
            key={feature.name}
            {...feature}
            className="min-w-[300px] min-h-[200px]"
          />
        ))}
        {features.map((feature) => (
          <BentoCard
            key={`${feature.name}-dup`}
            {...feature}
            className="min-w-[300px] min-h-[20px]"
          />
        ))}
      </div>
    </Marquee>
  );
}
