import ContentHi from "@/components/ContentHi";
import TitleCustom from "@/components/TitleCustom";

import { BentoDemo } from "@/components/ContentProject";
import AnimatedListDemo from "@/components/Achievement";

import Profile from "@/components/Profile";
import GridNumber from "@/components/GridNumber";
import TackStack from "@/components/TachStack";
import Career from "@/components/Career";
import WorkProcess from "@/components/WorkProcess";
import SocialMedia from "@/components/SocialMedia";
import Education from "@/components/Education";

const HomePage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-primary_600">
      <div className="container flex justify-center mx-5">
        <div className="container h-auto max-w-96 sm:max-w-96 md:max-w-[900px] lg:max-w-[900px] xl:max-w-full gap-2">
          <div className="grid grid-cols-2 mb-2 rounded-lg bg-primary_500 md:hidden">
            {/* <CustomButton text="About" />
            <CustomButton
              text="Works"
              icon="material-symbols-light:bookmark-add"
            /> */}
          </div>

          <div className="container mx-auto">
            <div className="grid xl:grid-cols-2 xl:gap-2 xl:flex">
              <div className="container grid justify-center grid-cols-1 gap-2 md:grid-cols-2 xl:w-3/5">
                <div className="flex flex-col gap-2">
                  <ContentHi />
                  <div className="p-3 rounded-lg bg-primary_500 border-primary_400 border-[1px]">
                    <TitleCustom
                      title="Projects"
                      subtitle="Works Gallery"
                      icon="basil:bag-solid"
                    />
                    <BentoDemo />
                  </div>
                  <div className="flex flex-col items-center justify-start gap-2 p-3 rounded-lg max-h-60 bg-primary_500 border-primary_400 border-[1px]">
                    <TitleCustom
                      title="Achievement"
                      subtitle="Awards and Achievements"
                      icon="mdi:achievement-variant"
                    />
                    <AnimatedListDemo />
                  </div>
                </div>
                <div className="flex flex-col order-first gap-2 md:order-none">
                  <Profile />
                  <GridNumber />
                  <TackStack />
                </div>
              </div>
              <div className="flex flex-col gap-2 my-2 md:flex- xl:my-0 xl:w-2/5">
                <div className="flex flex-col gap-2 md:flex-row md:flex xl:h-1/2">
                  <WorkProcess />
                  <Career />
                </div>
                <div className="flex flex-col gap-2 md:flex md:flex-row xl:h-1/2">
                  <Education />
                  <SocialMedia />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
