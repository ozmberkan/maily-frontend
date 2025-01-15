import Logo from "../Logo/Logo";
import SidebarContent from "./children/SidebarContent";
import SidebarMailButton from "./children/SidebarMailButton";
import SidebarSeperator from "./children/SidebarSeperator";

const Sidebar = () => {
  return (
    <div className="border-r flex flex-col min-w-64 max-w-64 p-3 gap-3">
      <Logo />
      <SidebarMailButton />
      <SidebarContent />
      <SidebarSeperator />
    </div>
  );
};

export default Sidebar;
