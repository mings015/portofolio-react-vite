import { Icon } from "@iconify/react";

const TitleCustom = ( {title="", subtitle="", icon="basil:bag-solid" } ) => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center gap-2">
        <Icon icon={icon} className="color-icon" />
        <span className="text-sm text-primary_300">{title}</span>
      </div>
      <div>
        <span className="text-primary_100">{subtitle}</span>
      </div>
    </div>
  );
};

export default TitleCustom;
