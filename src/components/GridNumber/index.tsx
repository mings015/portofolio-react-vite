import { Icon } from "@iconify/react";
import GridComponets from "./gridComponets";

const GridNumber = () => {
  return (
    <div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:order-first h-1/3">
      <GridComponets sum={5} icon="solar:flag-bold" title="Project" />
      <GridComponets sum={5} icon="fa-solid:smile-beam" title="Happy Clients" />
      <GridComponets
        sum={2}
        icon="solar:star-fall-bold"
        title="Year Expertise"
      />

      <div className="flex flex-col items-center gap-2 p-2 rounded-lg justify-evenly bg-primary_500 md:hidden border-primary_400 border-[1px]">
        <a
          href="https://drive.google.com/file/d/1bezfRv7vmAETZmPGMQSIlbLHtEuDDCWR/view?usp=sharing"
          target="_blank"
        >
          <div className="flex items-center justify-center flex-1 gap-2 px-4 py-3">
            <span className="text-primary_200">Resume</span>

            <Icon icon="ic:round-file-download" className="color-icon" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default GridNumber;
