import Link from "next/link";
import React from "react";

const SidebarGroup = ({ title, links }) => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-xs font-medium text-neutral-400">{title}</h1>
      <ul className="flex flex-col ">
        {links.map((link) => (
          <Link
            key={link.id}
            href={link.to}
            className="flex items-center hover:bg-neutral-100 p-2 text-neutral-500 hover:text-neutral-600 rounded-md gap-x-2"
          >
            <link.icon />
            <span className="text-xs  font-medium">{link.label}</span>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default SidebarGroup;
