import TitleCustom from "../TitleCustom";
import EducationSub from "./educationSub";

const Education = () => {
  return (
    <div className="flex flex-col items-center p-3 rounded-lg gap-3 bg-primary_500 md:w-3/5 border-primary_400 border-[1px]">
      <TitleCustom
        title="Education History"
        subtitle="Education"
        icon="lsicon:education-filled"
      />
      <EducationSub />
    </div>
  );
};

export default Education;
