import {
   Card,
   // CardHeader,
   CardBody,
   // CardFooter,
   // Divider,
   Link,
   Button,
   Image,
   Input,
   Checkbox,
} from "@nextui-org/react";

import { useState } from "react";

export default function Login() {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [rememberDevice, setRememberDevice] = useState(false);

   function handleLogin() {
      console.log({ email, password, rememberDevice });
   }

   return (
      <div className="grid md:grid-cols-12 sm:grid-cols-1 min-h-screen">
         <Card
            radius="none"
            shadow="none"
            className="md:col-span-8 mx-auto my-auto"
         >
            <Image radius="sm" width={700} alt="login_logo" src="/Login.svg" />
         </Card>
         <Card
            radius="none"
            shadow="none"
            className="md:col-span-4 my-auto max-w-[600px]"
         >
            <CardBody className="flex flex-col">
               <div className="flex flex-col mb-5">
                  <p className="text-xl pb-1 font-semibold">
                     Welcome to Elite Essentials
                  </p>
                  <p className="text-small text-default-800 ">
                     One stop shop for all your needs.
                  </p>
               </div>
               <Input
                  size="sm"
                  type="email"
                  label="Email*"
                  className="mb-5"
                  value={email}
                  onValueChange={setEmail}
               ></Input>
               <Input
                  size="sm"
                  type="password"
                  label="Password*"
                  className="mb-5"
                  value={password}
                  onValueChange={setPassword}
               ></Input>
               <div className="flex justify-between mb-5">
                  <Checkbox
                     isSelected={rememberDevice}
                     onValueChange={setRememberDevice}
                  >
                     Remember me
                  </Checkbox>
                  <Link>Forget Password?</Link>
               </div>
               <Button
                  className="bg-[#066a73] text-white w-full mb-5"
                  onClick={handleLogin}
               >
                  LOGIN
               </Button>
               <div className="flex justify-center gap-1">
                  <p>New on Elite Essentials?</p>
                  <Link showAnchorIcon>Create an account</Link>
               </div>
            </CardBody>
         </Card>
      </div>
   );
}
