"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import useSession from "@/hooks/useSession";

import { userMock } from "@/lib/mock/user"; //! MOCKUP DATA

const HomePage = () => {
  const { user, login } = useSession();
  const router = useRouter();

  useEffect(() => {
    // if (!user.isLogin) router.replace("/login");
    if (!user.isLogin) login(userMock);

  }, [user.isLogin]);

  return (
    <>
      Uva
    </>
  );
};

export default HomePage;
