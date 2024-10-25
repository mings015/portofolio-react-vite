import { Icon } from "@iconify/react";
import TitleCustom from "../TitleCustom";
const work = [
  {
    icon: "mage:goals-fill",
    text: "Define Your Site Goals",
  },
  {
    icon: "dashicons:feedback",
    text: "Ideas into a Wireframe",
  },
  {
    icon: "mdi:canvas",
    text: "Blank Canvas into Website",
  },
  {
    icon: "material-symbols:feedback",
    text: "Get Feedback",
  },
  {
    icon: "grommet-icons:workshop",
    text: "Make Sure It Works as Expected",
  },
  {
    icon: "carbon:ibm-launchpad-s4",
    text: "Launch the Website",
  },
];

const WorkProcess = () => {
  return (
    <div className="flex flex-col items-center justify-start gap-3 p-3 rounded-lg bg-primary_500 md:w-2/5 border-primary_400 border-[1px]">
      <TitleCustom
        title="Work Process"
        subtitle="Workflow Highlights"
        icon="solar:star-fall-bold"
      />
      <div className="grid items-start justify-center w-full grid-cols-1 gap-2 p-2 overflow-y-auto item text-primary_200">
        {work.map((work) => (
          <div
            key={work.icon}
            className="flex items-center justify-start flex-1 gap-2 px-4 py-2 rounded-lg bg-primary_400  [border:1px_solid_rgba(255,255,255,.1)]"
          >
            <Icon
              icon={work.icon}
              className="color-icon"
              style={{ fontSize: "18px" }}
            />
            <span className="text-sm">{work.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkProcess;
