import { Icon } from "@iconify/react";
import Marquee from "@/components/ui/marquee";

const ContentHi = () => {
  return (
    <div className="flex flex-col items-center justify-start gap-4 p-3 rounded-lg bg-primary_500 h-1/3 border-primary_400 border-[1px]">
      <div className="flex flex-col items-center justify-center flex-1 gap-2 text-center text-primary_200">
        <p className="text-2xl">
          <span className="flex justify-center">
            <Icon icon="noto:waving-hand" />
          </span>
          Say hi from <span className="text-primary">Muhaimin</span>, Web
          Developer From Indonesia
        </p>
        <Marquee className="mx-3">
          <p className=" text-primary_300">
            I design and code beautifully simple things and I love what I do.
            Just simple like that!
          </p>
        </Marquee>
      </div>
    </div>
  );
};

export default ContentHi;
