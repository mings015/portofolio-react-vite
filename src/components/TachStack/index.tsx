import TitleCustom from "../TitleCustom";
import Marquee from "../ui/marquee";
import ItemContainer from "./itemContainer";

const tach = [
  {
    icon: "devicon:html5",
    text: "Html",
  },
  {
    icon: "devicon:css3",
    text: "Css",
  },
  {
    icon: "logos:javascript",
    text: "JS",
  },
  {
    icon: "devicon:typescript",
    text: "TS",
  },
  {
    icon: "devicon:php",
    text: "PHP",
  },
  {
    icon: "devicon:nodejs-wordmark",
    text: "Node.js",
  },
  {
    icon: "devicon:react",
    text: "React",
  },
];

const tech2 = [
  {
    icon: "devicon:nextjs",
    text: "Nextjs",
  },
  {
    icon: "devicon:bootstrap",
    text: "Bootstrap",
  },
  {
    icon: "devicon:tailwindcss",
    text: "Tailwind",
  },
  {
    icon: "devicon:flutter",
    text: "Flutter",
  },
  {
    icon: "devicon:dart",
    text: "Dart",
  },
  {
    icon: "devicon:firebase",
    text: "Firebase",
  },
  {
    icon: "devicon:figma",
    text: "Figma",
  },
];

const TackStack = () => {
  return (
    <div className=" flex flex-col gap-1 p-2 rounded-lg bg-primary_500 border-primary_400 border-[1px] ">
      <TitleCustom
        title="My Expertise"
        subtitle="Tech Stacks"
        icon="solar:rocket-bold"
      />

      <div className="flex flex-wrap items-center justify-center gap-3 mx-2">
        <Marquee className="py-2" pauseOnHover>
          {tach.map((skill) => (
            <ItemContainer
              key={skill.text}
              text={skill.text}
              icon={skill.icon}
            />
          ))}
        </Marquee>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-3 mx-2">
        <Marquee reverse className="py-2" pauseOnHover>
          {tech2.map((skill) => (
            <ItemContainer
              key={skill.text}
              text={skill.text}
              icon={skill.icon}
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default TackStack;
{
  /* html, css, js, ts, php, nodejs, react js, next js, bootstrap, tailwind, flutter, dart , firebase, figma */
}
