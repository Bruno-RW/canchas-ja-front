"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

import axios from "axios";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import useSession from "@/hooks/useSession";
import useToastStyle from "@/hooks/useToastStyle";
import { cn, getInitials } from "@/lib/utils/utils";
import { LOGIN_API_URL } from "@/lib/routes/backend";
import { loginFormData } from "@/lib/types/forms";
import { getLoginFormSchema } from "@/lib/schemas/auth";

import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Button from "@/components/ui/custom/Button";

const LoginForm = () => {
  const toastText = useTranslations("Global.Toast");
  const formText = useTranslations("Page.Login.LoginForm");
  const schemaText = useTranslations("Page.Login.LoginFormSchema");
  
  const { login } = useSession();
  const router = useRouter();
  const { toastStyle } = useToastStyle();
  const [ isLoading, setIsLoading ] = useState(false);

  const submitLabel  = (isLoading ? formText("LoggingIn") : formText("Login"));

  const loginFormSchema = getLoginFormSchema(schemaText);
  const form = useForm<loginFormData>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const onSubmit = async (data: loginFormData) => {
    let toastMessage = "";
    let isError = false;

    try {
      setIsLoading(true);

      const loginPost = await axios.post(
        LOGIN_API_URL,
        { email: data.email, password: data.password },
        { timeout: 5000 } // 5 seconds timeout
      );

      if (!loginPost) {
        toastMessage= toastText("SendError");
        isError = true;
        return;
      }

      if (loginPost.status !== 200) {
        toastMessage = `${toastText("RequestError")}: ${loginPost.statusText}`;
        isError = true;
        return;
      }

      const loginData = loginPost.data;

      login({
        name: loginData.name,
        email: loginData.email,
        type: loginData.type,
        initials: getInitials(loginData.name),
        isLogin: true,
      });
      
      router.replace("/");

    } catch (error) {
      toastMessage = `${toastText("InternalError")}: ${error}`;
      isError = true;
      
    } finally {
      setIsLoading(false);
      if (isError) toast.error(toastMessage, toastStyle);
    }
  };

  return (
    <Form {...form}>
      <form className="flex flex-col w-full gap-y-5 py-3" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-y-3">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    className="self-center"
                    type="email"
                    autoComplete="email"
                    placeholder={formText("Email")}
                    autoFocus
                    required
                  />
                </FormControl>

                <FormMessage content={form.formState.errors.email?.message} />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    className="self-center"
                    type="password"
                    placeholder={formText("Password")}
                    autoComplete="current-password"
                    required
                  />
                </FormControl>

                <FormMessage content={form.formState.errors.password?.message} />
              </FormItem>
            )}
          />
        </div>

        <Button className={cn(isLoading && "bg-blue-600/70 dark:bg-blue-500/40")}
          type="submit"
          variant="blue"
          isLoading={isLoading}
        >
          {submitLabel}
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;