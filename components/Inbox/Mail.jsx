import { AiOutlineClockCircle, AiOutlineEye } from "react-icons/ai";
import React from "react";
import Link from "next/link";

const Mail = () => {
  return (
    <div className="w-full px-3 py-2 bg-white border rounded shadow-sm flex items-center gap-x-3">
      <Link
        href={"/inbox/detail/12312312"}
        className="p-0.5 bg-blue-100 text-blue-500 rounded hover:bg-blue-500 hover:text-white transition-colors duration-300"
      >
        <AiOutlineEye />
      </Link>
      <h1 className="text-xs text-neutral-500 pr-2 border-r">@ozmberkan</h1>
      <h1 className="text-xs text-neutral-600 pr-2 border-r font-medium">
        Plan hk.
      </h1>
      <p className="text-xs">deneme deneme</p>
      <span className="ml-auto text-xs font-medium text-neutral-500 flex items-center gap-x-1">
        <AiOutlineClockCircle />
        13.10.2025
      </span>
    </div>
  );
};

export default Mail;
