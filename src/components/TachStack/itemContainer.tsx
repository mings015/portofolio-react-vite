import { Icon } from "@iconify/react";

const ItemContainer = ({ icon = "", text = "" }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-1 p-2 rounded-lg  bg-primary_400 w-24 [border:1px_solid_rgba(255,255,255,.1)]">
      <Icon icon={icon} style={{ fontSize: "38px" }} />
      <p className="text-primary_200">{text}</p>
    </div>
  );
};

export default ItemContainer;
