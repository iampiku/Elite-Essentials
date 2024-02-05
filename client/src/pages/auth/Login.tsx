import { Card, CardBody, Link, Button, Checkbox } from "@nextui-org/react";

import { HiMail, HiLockClosed } from "react-icons/hi";

import { useState, useMemo, ReactNode } from "react";

import AuthLayout from "@/layouts/AuthLayout";
import InputFormBuilder from "@/components/InputFormBuilder";

interface FormSchema {
   value: string;
   label: string;
   isValid: boolean;
   isRequired: boolean;
   errorMessage: string;
   startContent: ReactNode;
   type: "text" | "textArea";
   onValueChange: (value: string) => void;
   inputType: "email" | "password" | "number";
}

export default function Login() {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [rememberDevice, setRememberDevice] = useState(false);

   const isValidEmail = useMemo(() => {
      if (email.length === 0) return true;
      return email.includes("@");
   }, [email]);

   const isValidPassword = useMemo(() => {
      if (password.length === 0) return true;
      return password.length > 8;
   }, [password]);

   function handleLogin() {
      console.log({ email, password, rememberDevice });
   }

   const formSchema: FormSchema[] = useMemo(
      () => [
         {
            value: email,
            label: "Email",
            isValid: isValidEmail,
            isRequired: true,
            errorMessage: "Please enter a valid email id",
            type: "text",
            onValueChange: setEmail,
            inputType: "email",
            startContent: (
               <HiMail
                  size={20}
                  className="text-2xl text-default-400 pointer-events-none flex-shrink-0"
               />
            ),
         },
         {
            value: password,
            label: "Password",
            isValid: isValidPassword,
            isRequired: true,
            errorMessage: "Password is too weak",
            type: "text",
            onValueChange: setPassword,
            inputType: "password",
            startContent: (
               <HiLockClosed
                  size={20}
                  className="text-2xl text-default-400 pointer-events-none flex-shrink-0"
               />
            ),
         },
      ],
      [email, password, isValidEmail, isValidPassword]
   );

   return (
      <AuthLayout infographicUrl="/Login.svg">
         <Card
            radius="none"
            shadow="none"
            className="md:col-span-5 mx-auto my-auto min-w-[500px]"
         >
            <CardBody className="flex flex-col">
               <div className="flex flex-col mb-5 text-center">
                  <p className="text-2xl pb-1 font-semibold ">
                     Welcome to Elite Essentials
                  </p>
                  <p className="text-small text-default-800 ">
                     One stop shop for all your needs.
                  </p>
               </div>
               <InputFormBuilder formSchema={formSchema} />
               <div className="flex justify-between mb-5">
                  <Checkbox
                     isSelected={rememberDevice}
                     onValueChange={setRememberDevice}
                  >
                     Remember me
                  </Checkbox>
                  <Link
                     className="cursor-pointer"
                     href="http://localhost:5173/forget-password"
                  >
                     Forget Password?
                  </Link>
               </div>
               <Button
                  className="bg-[#066a73] text-white w-full mb-5"
                  onClick={handleLogin}
                  isDisabled={!isValidEmail || !isValidPassword}
               >
                  LOGIN
               </Button>
               <div className="flex justify-center gap-1">
                  <p>New on Elite Essentials?</p>
                  <Link showAnchorIcon href="http://localhost:5173/signup">
                     Create an account
                  </Link>
               </div>
            </CardBody>
         </Card>
      </AuthLayout>
   );
}
