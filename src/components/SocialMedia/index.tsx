import TitleCustom from "../TitleCustom";
import CustomButton from "../CustomButton";

const socialMedia = [
  {
    logo: "pajamas:twitter",
    name: "Muh Muhaimin Nur",
    link: "https://twitter.com/Muh_MuhaiminNur",
  },
  {
    logo: "mdi:instagram",
    name: "@muhmuhaiminur",
    link: "https://www.instagram.com/mingsssxz/",
  },

  {
    logo: "mdi:linkedin",
    name: "Muh Muhaimin Nur",
    link: "https://.linkedin.com/in/muhmuhaiminnur",
  },
  {
    logo: "mdi:github",
    name: "Muh Muhaimin Nur",
    link: "https://github.com/mings015",
  },
];

const SocialMedia = () => {
  return (
    <div className="flex flex-col items-center justify-start gap-2 py-3 rounded-lg px-7 md:px-4 bg-primary_500 md:w-2/5 border-primary_400 border-[1px]">
      <TitleCustom
        title="Social Media"
        subtitle="Online Presence"
        icon="mingcute:user-follow-2-fill"
      />
      <div className="flex flex-col items-center justify-center flex-1">
        <div className="grid items-start justify-center w-full grid-cols-1 gap-4 item text-primary_200">
          {socialMedia.map((item) => (
            <CustomButton
              key={item.link}
              href={item.link}
              target="_blank"
              icon={item.logo}
              text={item.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
