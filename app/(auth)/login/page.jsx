"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const LoginPage = () => {
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const loginHandle = async (data) => {
    try {
      await axios.post("http://localhost:5001/api/auth/login", data, {
        withCredentials: true,
      });
      toast.success("Başarıyla giriş yapıldı. Yönlendiriliyorsun.");
      setTimeout(() => {
        router.push("/");
      }, 2000);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="w-full flex items-start justify-start gap-5  h-screen p-5">
      <div className="w-1/2 h-full rounded bg-loginHero bg-no-repeat bg-cover bg-center p-5 drop-shadow-lg"></div>
      <div className=" w-1/2 h-full flex flex-col justify-start items-start p-24">
        <div className="mb-2 pb-2 border-b text-2xl font-bold tracking-tighter bg-clip-text bg-gradient-to-l text-transparent from-sky-500 via-blue-500 to-red-500">
          Maily
        </div>
        <form
          className="flex flex-col gap-3"
          onSubmit={handleSubmit(loginHandle)}
        >
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-2xl text-neutral-700">Giriş Yap</h1>
            <p className="text-xs font-medium text-neutral-500">
              Hoş geldin, Bilgilerini doldurarak sisteme erişebilirsin.{" "}
            </p>
          </div>
          <input
            className="px-4 py-2 rounded border outline-none text-sm"
            placeholder="Kullanıcı adı"
            type="text"
            {...register("username")}
          />
          <input
            className="px-4 py-2 rounded border outline-none text-sm"
            placeholder="Parola"
            type="password"
            {...register("password")}
          />
          <div className="w-full flex justify-between items-center">
            <Link
              href={"/register"}
              className="text-xs text-neutral-600 hover:underline font-medium"
            >
              Hesabın yok mu?
            </Link>
          </div>
          <button
            type="submit"
            className="bg-[#FC4652] text-sm text-white rounded py-2"
          >
            Oturum aç
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
