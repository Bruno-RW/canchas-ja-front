"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import axios from "axios";

import { LOGIN_API_URL } from "@/lib/routes/backend";

import useSession from "@/hooks/useSession";

import LoginForm from "@/components/forms/LoginForm";

const LoginPage = () => {
  const t = useTranslations("Page.Login.LoginPage");
  const { user, login } = useSession();
  const router = useRouter();

  const handleLogin = async (email: string, password: string) => {
    try {
      const response = await axios.post(LOGIN_API_URL, { email, password });

      if (response.data.user) {
        login(response.data.user);
        router.replace("/");
      }

      console.error(response.data.error);

    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  useEffect(() => {
    if (user.isLogin) router.replace("/");
  }, [user.isLogin]);

  return (
    <section className="absolute flex flex-col items-center justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 py-6 px-5 border rounded-md border-gray-300 dark:border-neutral-700 dark:bg-neutral-800 dark:shadow-none">
      <h1 className="text-5xl font-bold mb-5">{t("Title")}</h1>
      <LoginForm onSubmit={handleLogin} />
    </section>
  );
};

export default LoginPage;