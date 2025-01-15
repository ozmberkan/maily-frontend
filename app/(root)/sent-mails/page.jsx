import Mail from "@/components/Inbox/Mail";
import React from "react";
import { BiTransferAlt } from "react-icons/bi";

const SentPage = () => {
  return (
    <div className="p-5 h-full flex flex-col items-start justify-start gap-3">
      <button className="transition duration-300 px-3 py-1 rounded text-sm bg-green-100 text-green-700 border border-green-300 flex items-center gap-x-2 hover:bg-green-500 hover:text-white">
        <BiTransferAlt size={15} />
        Yenile
      </button>
      <div className="bg-neutral-50 rounded w-full h-full p-3 flex flex-col gap-3">
        <Mail />
        <Mail />
        <Mail />
      </div>
    </div>
  );
};

export default SentPage;
