import { Icon } from "@iconify/react";


const ProfileSub = ( {icon="", text=""} ) => {
    return (
        <span>
          <div className="flex items-center px-2 py-1 rounded-full bg-opacity-40 bg-primary_500 ">
            <Icon icon={icon} className="color-icon" />
            <span className="ml-2">{text}</span>
          </div>
        </span>
    );
}

export default ProfileSub;
