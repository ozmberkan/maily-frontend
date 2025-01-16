"use client";
import React from "react";
import { IoClose } from "react-icons/io5";
import { motion } from "motion/react";
import { useForm } from "react-hook-form";

const NewMailModal = ({ setShowModal }) => {
  const { register, handleSubmit } = useForm();

  return (
    <div
      id="new-mail-modal"
      tabIndex="-1"
      aria-hidden="true"
      className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50"
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        transition={{ duration: 0.2 }}
        className="relative w-full max-w-lg bg-white rounded-[20px] shadow-lg dark:bg-gray-800"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-sm font-medium text-gray-800 dark:text-gray-100">
            Yeni Posta
          </h3>
          <button
            type="button"
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            onClick={() => setShowModal(false)}
          >
            <IoClose />
          </button>
        </div>

        {/* Content */}
        <div className="px-6 py-5 space-y-4">
          <p className="text-xs text-gray-600 dark:text-gray-300">
            Burada yeni bir maily oluşturabilirsiniz. Alıcı, başlığı ve
            içeriğinizi ekleyin
          </p>
          <form className="flex flex-col gap-3">
            <input
              className="px-3 py-2 shadow-sm rounded border outline-none text-sm"
              placeholder="Alıcı"
            />
            <input
              className="px-3 py-2 shadow-sm rounded border outline-none text-sm"
              placeholder="Başlık"
            />
            <textarea
              className="px-3 py-2 shadow-sm rounded border outline-none text-sm max-h-44 min-h-44"
              placeholder="İçerik"
            />
            <div className="flex items-center justify-end py-4 space-x-3 border-t border-gray-200 dark:border-gray-700">
              <button
                type="button"
                className="px-3 py-1 text-sm font-medium bg-yellow-100 text-yellow-700 border border-yellow-300 rounded"
                onClick={() => console.log("Message sent")}
              >
                Taslak olarak kaydet
              </button>

              <button
                type="button"
                className="px-3 py-1 text-sm font-medium bg-green-100 text-green-700 border border-green-300 rounded"
                onClick={() => console.log("Message sent")}
              >
                Gönder
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default NewMailModal;
