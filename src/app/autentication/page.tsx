"use client";

import { Button } from "@/components/ui/button";
import { CardFooter } from "@/components/ui/card";
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Card } from "@/components/ui/card";
import { TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tabs } from "@/components/ui/tabs";

import SingUpForm from "./components/sing-up-form";

const AutenticationPage = () => {
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
          <Card>
            <SingUpForm />
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>Faça login para continuar</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button>Login</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="register"></TabsContent>
      </Tabs>
    </div>
  );
};

export default AutenticationPage;
