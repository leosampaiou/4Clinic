import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tabs } from "@/components/ui/tabs";
import { auth } from "@/lib/auth";

import LoginForm from "./components/login-form";
import SingUpForm from "./components/sing-up-form";

const AutenticationPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session?.user) {
    redirect("/dashboard");
  }

  return (
    <div className="flex h-screen w-screen items-center justify-center">
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
