import { Icon } from "@iconify/react";
import NumberTicker from "../ui/number-ticker";

const GridComponets = ({ sum = 0, icon = "", title = "" }) => {
  return (
    <div className="flex flex-col items-center gap-1 p-2 rounded-lg justify-evenly bg-primary_500  border-primary_400 border-[1px]">
      <div className="flex items-center">
        <span className="text-5xl font-bold text-primary_300">
          <NumberTicker value={sum} />
        </span>
        <Icon
          icon="foundation:plus"
          className="color-icon"
          style={{ fontSize: "24px" }}
        />
      </div>
      <div className="flex items-center justify-center w-full gap-1 rounded-full bg-primary_400 [border:1px_solid_rgba(255,255,255,.1)]">
        <Icon icon={icon} className="color-icon" />
        <span className="my-2 text-sm text-primary_200">{title}</span>
      </div>
    </div>
  );
};

export default GridComponets;
