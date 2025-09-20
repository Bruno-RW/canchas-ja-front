"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

import useSession from "@/hooks/useSession";

import SigninForm from "@/components/forms/SigninForm";

const SigninPage = () => {
  const t = useTranslations("SigninPage");
  const { user } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (user.isLogin) router.replace("/");
  }, [user.isLogin]);

  return (
    <section className="absolute flex flex-col items-center justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 py-6 px-5 border rounded-md border-gray-300 dark:border-neutral-700 dark:bg-neutral-800 dark:shadow-none">
      <h1 className="mb-5">{t("Title")}</h1>
      <SigninForm />
    </section>
  );
};

export default SigninPage;