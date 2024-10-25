import TitleCustom from "../TitleCustom";
import CareerSub from "./careerSub";

const Career = () => {
  return (
    <div className="flex flex-col gap-3 p-3 rounded-lg bg-primary_500 md:w-3/5 border-primary_400 border-[1px]">
      <TitleCustom
        title="Experience"
        subtitle="Career Experience"
        icon="material-symbols-light:comedy-mask"
      />
      <CareerSub />
    </div>
  );
};

export default Career;
