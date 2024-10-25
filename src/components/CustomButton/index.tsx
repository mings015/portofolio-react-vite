import { Icon } from "@iconify/react";
import { useState } from "react";

const CustomButton = ({ text = "", icon = "", href = "#", target = "" }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      className="flex items-center justify-center flex-1 gap-1 px-4 py-3 rounded-lg bg-primary_400 [border:1px_solid_rgba(255,255,255,.1)]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      href={href}
      target={target}
    >
      <div className="flex items-center justify-center flex-1 rounded-lg bg-primary_400">
        <Icon icon={icon} className="color-icon" />
        <span className="ml-2 text-sm">{text}</span>
        {isHovered && (
          <Icon
            icon="rivet-icons:arrow-up-right"
            className="ml-2 transition-opacity duration-300 ease-in-out opacity-100 color-icon"
          />
        )}
      </div>
    </a>
  );
};

export default CustomButton;
