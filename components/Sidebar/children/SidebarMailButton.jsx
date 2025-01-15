"use client";
import NewMailModal from "@/components/Modals/NewMailModal";
import { useState } from "react";
import { BiPlus } from "react-icons/bi";

const SidebarMailButton = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {showModal && <NewMailModal setShowModal={setShowModal} />}
      <button
        onClick={() => setShowModal(true)}
        className="w-full p-3 text-neutral-700 flex border rounded-xl justify-between text-sm items-center gap-x-3 font-semibold bg-neutral-50 shadow-sm hover:bg-neutral-100 transition-colors duration-300"
      >
        Yeni posta <BiPlus size={17} />
      </button>
    </>
  );
};

export default SidebarMailButton;
