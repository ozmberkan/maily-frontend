"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getUserById } from "@/redux/slices/userSlice";
import { store } from "@/redux/store";
import axios from "axios";
import Link from "next/link";
import { useEffect } from "react";

import { BiExit, BiUser } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";

const ProfileButton = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((store) => store.user);

  useEffect(() => {
    dispatch(getUserById());
  }, [dispatch]);

  const exitHandle = async () => {
    try {
      await axios.post(
        "http://localhost:5001/api/auth/signout",
        {},
        { withCredentials: true }
      );
      toast.warning("Çıkış yapılıyor..");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      toast.error("hata");
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="p-2 border rounded text-neutral-500 hover:text-black bg-white flex justify-start items-center cursor-pointer shadow-sm hover:bg-neutral-50 transition-colors duration-300">
          <BiUser size={13} />
          <span className="text-xs font-medium ml-2 pl-2 border-l">
            {" "}
            @{user?.username}
          </span>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-24 w-full">
        <DropdownMenuLabel className="text-xs bg-clip-text bg-gradient-to-l text-transparent from-sky-500  to-red-500">
          @{user?.username}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link
            href={"/profile"}
            className="text-xs cursor-pointer w-full text-neutral-600"
          >
            <BiUser />
            Profilim
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <button
            onClick={exitHandle}
            className="w-full cursor-pointer text-xs text-neutral-600"
          >
            <BiExit />
            Çıkış yap
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileButton;
