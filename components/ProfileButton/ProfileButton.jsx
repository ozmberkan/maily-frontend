import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Link from "next/link";
import { BiExit, BiUser } from "react-icons/bi";

const ProfileButton = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="p-2 border rounded text-neutral-500 hover:text-black bg-white flex justify-center items-center cursor-pointer shadow-sm hover:bg-neutral-50 transition-colors duration-300">
          <BiUser size={13} />
          <span className="text-xs font-medium ml-2 pl-2 border-l">
            @ozmberkan
          </span>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-3">
        <DropdownMenuLabel className="text-xs bg-clip-text bg-gradient-to-l text-transparent from-sky-500  to-red-500">
          @ozmberkan
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
          <button className="w-full cursor-pointer text-xs text-neutral-600">
            <BiExit />
            Çıkış yap
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileButton;
