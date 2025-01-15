import { firstLinks, personalLinks } from "@/constants/data";
import SidebarGroup from "./SidebarGroup";
import SidebarSeperator from "./SidebarSeperator";

const SidebarContent = () => {
  return (
    <div className="flex-1 py-5">
      <SidebarGroup title={"Temel"} links={firstLinks} />
      <SidebarSeperator />
      <SidebarGroup title={"Kişisel"} links={personalLinks} />
    </div>
  );
};

export default SidebarContent;
