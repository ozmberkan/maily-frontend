import React from "react";
import DashboardBox from "./DashboardBox";
import { FileIcon, Mail } from "lucide-react";

const DashboardGrid = () => {
  return (
    <div className="w-full grid grid-cols-3 gap-5">
      <DashboardBox title={"Gelen Postalar"} icon={Mail} content={"24+"} />
      <DashboardBox
        title={"Gönderilen Postalar"}
        icon={Mail}
        content={"100+"}
      />
    </div>
  );
};

export default DashboardGrid;
