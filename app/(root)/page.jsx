"use client";
import DashboardGrid from "@/components/Dashboard/DashboardGrid";
import ProfileButton from "@/components/ProfileButton/ProfileButton";

export default function Home() {
  return (
    <div className="w-full h-full  flex flex-col gap-5">
      <div className="w-full flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-neutral-800">
          Hoş geldin, Berkan Özmen
        </h1>
      </div>
      <DashboardGrid />
    </div>
  );
}
