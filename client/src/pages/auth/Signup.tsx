import { Card, CardBody, Link, Button, Input } from "@nextui-org/react";

import { useState } from "react";

import AuthLayout from "@/layouts/AuthLayout";

function Signup() {
   const [userName, setUserName] = useState("");
   const [email, setEmail] = useState("");
   const [phone, setPhone] = useState("");
   const [password, setPassword] = useState("");

   function handleLogin() {
      console.log({ userName, email, phone, password });
   }

   return (
      <AuthLayout infographicUrl="/Sign_up.svg">
         <Card
            radius="none"
            shadow="none"
            className="md:col-span-5 mx-auto my-auto min-w-[500px]"
         >
            <CardBody className="flex flex-col">
               <div className="flex flex-col mb-5 text-center">
                  <p className="text-2xl pb-1 font-semibold">
                     Welcome to Elite Essentials
                  </p>
                  <p className="text-small text-default-800 ">
                     One stop shop for all your needs.
                  </p>
               </div>
               <Input
                  size="sm"
                  isRequired
                  type="text"
                  label="Username"
                  className="mb-5"
                  value={userName}
                  onValueChange={setUserName}
               ></Input>
               <Input
                  size="sm"
                  isRequired
                  type="email"
                  label="Email"
                  className="mb-5"
                  value={email}
                  onValueChange={setEmail}
               ></Input>
               <Input
                  size="sm"
                  type="number"
                  isRequired
                  label="Phone Number"
                  className="mb-5"
                  value={phone}
                  onValueChange={setPhone}
               ></Input>
               <Input
                  size="sm"
                  type="password"
                  isRequired
                  radius="sm"
                  label="Password"
                  className="mb-5"
                  value={password}
                  onValueChange={setPassword}
               ></Input>
               <Button
                  className="bg-[#066a73] text-white w-full mb-5"
                  onClick={handleLogin}
               >
                  REGISTER
               </Button>
               <div className="flex justify-center gap-1">
                  <p>Already have an account?</p>
                  <Link
                     showAnchorIcon
                     className="cursor-pointer"
                     href="http://localhost:5173/login"
                  >
                     Login
                  </Link>
               </div>
            </CardBody>
         </Card>
      </AuthLayout>
   );
}

export default Signup;