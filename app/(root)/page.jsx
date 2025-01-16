"use client";
import DashboardGrid from "@/components/Dashboard/DashboardGrid";
import { getUserById } from "@/redux/slices/userSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();

  const { user, status } = useSelector((store) => store.user);

  useEffect(() => {
    dispatch(getUserById());
  }, [dispatch]);

  return (
    <div className="w-full h-full flex flex-col gap-5">
      <div className="w-full flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-neutral-800">
          Hoş geldin, {status === "idle" ? "Misafir" : user?.fullName}!
        </h1>
      </div>
      <DashboardGrid />
    </div>
  );
}
