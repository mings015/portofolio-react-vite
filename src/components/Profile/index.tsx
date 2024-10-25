import foto from "../../assets/foto.jpeg";
import ProfileSub from "../ProfileSub";
import TypingAnimation from "../ui/typing-animation";

import CustomButton from "../CustomButton";

const Profile = () => {
  return (
    <div className="flex flex-col h-full gap-4 p-4 rounded-lg justify-evenly bg-primary_500 border-primary_400 border-[1px]">
      <div className="flex justify-between gap-4">
        <div className="flex items-center gap-4">
          <img
            className="w-[100px] h-[100px] object-cover object-top rounded-lg"
            src={foto}
            alt="profile"
          />
          <div className="flex flex-col justify-between gap-1">
            <div className="flex items-center gap-2 px-4 py-1 rounded-full bg-primary_400 [border:1px_solid_rgba(255,255,255,.1)]">
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex w-full h-full bg-green-400 rounded-full opacity-75 animate-ping"></span>
                <span className="relative inline-flex w-2 h-2 bg-green-500 rounded-full"></span>
              </span>
              <div className="text-sm text-primary_200">Available To Work</div>
            </div>
            <div className="text-[22px] text-primary_100">
              Muh. Muhaimin Nur
            </div>
            <div className="flex gap-1">
              <div className="text-primary_200">Im</div>
              <TypingAnimation
                className="text-base font-normal text-primary"
                text="Front End Developer"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-2 px-2 py-3 text-sm rounded-lg bg-primary_400 [border:1px_solid_rgba(255,255,255,.1)] text-primary_200">
        <ProfileSub icon="carbon:location-filled" text="Makassar" />
        <ProfileSub icon="mdi:earth" text="Indonesia & English" />
        <ProfileSub icon="material-symbols:military-tech" text="Front End" />
        <ProfileSub
          icon="mdi:education-outline"
          text="University Dipa Makassar"
        />
        <ProfileSub icon="ph:soccer-ball" text="Football" />
        <ProfileSub icon="fa6-solid:face-smile-wink" text="Soft Boy" />
        <ProfileSub icon="ion:book" text="Reading Book" />
        <ProfileSub icon="mingcute:music-fill" text="Indie Music" />
      </div>
      <div className="flex items-center justify-center gap-3 text-primary_200">
        <CustomButton
          href="https://api.whatsapp.com/send/?phone=%2B6281342400303&text&type=phone_number&app_absent=0"
          target="_blank"
          icon="mingcute:whatsapp-fill"
          text="Whatsapp Me"
        />
        <CustomButton
          href="mailto:muhmuhaimin15@gmail.com"
          target="_blank"
          icon="material-symbols:mark-email-unread"
          text="Email Me"
        />
      </div>
    </div>
  );
};

export default Profile;
