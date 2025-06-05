import { headers } from "next/headers";
import Image from "next/image";
import { redirect } from "next/navigation";

import { TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tabs } from "@/components/ui/tabs";
import { auth } from "@/lib/auth";

import LoginForm from "./_components/login-form";
import SingUpForm from "./_components/sing-up-form";

const AutenticationPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session?.user) {
    redirect("/dashboard");
  }

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="absolute top-0 left-0 p-4">
        <Image src="/logo.svg" alt="logo" width={250} height={100} />
      </div>

      <Tabs defaultValue="login" className="w-[400px]">
        <TabsList className="w-[400px]">
          <TabsTrigger className="cursor-pointer" value="login">
            Login
          </TabsTrigger>
          <TabsTrigger className="cursor-pointer" value="register">
            Criar conta
          </TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <LoginForm />
        </TabsContent>
        <TabsContent value="register">
          <SingUpForm />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AutenticationPage;
