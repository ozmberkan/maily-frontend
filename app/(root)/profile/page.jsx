"use client";
import { getUserById } from "@/redux/slices/userSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const ProfilePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserById());
  }, [dispatch]);

  const { user } = useSelector((store) => store.user);

  return <div>{user?.fullName}</div>;
};

export default ProfilePage;
