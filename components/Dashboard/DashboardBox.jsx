import React from "react";

const DashboardBox = ({ icon: Icon, title, content }) => {
  return (
    <div className="p-3 border rounded-xl max-h-[150px] min-h-[150px] shadow-sm flex flex-col gap-3 relative overflow-hidden">
      <h1 className="text-xl font-semibold flex items-center gap-x-2">
        {title}
      </h1>
      <span className="absolute -top-3 -right-16 rotate-12 opacity-5">
        {Icon && <Icon size={200} />}
      </span>
      <p className="text-neutral-500 font-medium">{content}</p>
    </div>
  );
};

export default DashboardBox;
