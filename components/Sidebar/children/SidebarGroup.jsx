import Link from "next/link";
import React from "react";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

const SidebarGroup = ({ title, links }) => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-xs font-medium text-neutral-400">{title}</h1>
      <ul className="flex flex-col ">
        {links.map((link) => (
          <div key={link.id}>
            {link.isContext ? (
              <ContextMenu>
                <ContextMenuTrigger>
                  <Link
                    className="flex items-center hover:bg-neutral-100 p-2 text-neutral-500 hover:text-neutral-600 rounded-md gap-x-2"
                    href={link.to}
                  >
                    <link.icon />
                    <span className="text-xs  font-medium">{link.label}</span>
                  </Link>
                </ContextMenuTrigger>
                <ContextMenuContent>
                  <ContextMenuItem asChild>
                    <button className="text-xs w-full cursor-pointer">
                      Klasör oluştur
                    </button>
                  </ContextMenuItem>
                </ContextMenuContent>
              </ContextMenu>
            ) : (
              <Link
                key={link.id}
                href={link.to}
                className="flex items-center hover:bg-neutral-100 p-2 text-neutral-500 hover:text-neutral-600 rounded-md gap-x-2"
              >
                <link.icon />
                <span className="text-xs  font-medium">{link.label}</span>
              </Link>
            )}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default SidebarGroup;
