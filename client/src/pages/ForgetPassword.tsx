import { Card, CardBody, Link, Button, Image, Input } from "@nextui-org/react";

import { useState } from "react";

function ForgetPassword() {
   const [newPassword, setNewPassword] = useState("");
   const [passwordCheck, setPasswordCheck] = useState("");
   const [currentPassword, setCurrentPassword] = useState("");

   function handleLogin() {
      console.log({ newPassword, passwordCheck, currentPassword });
   }

   return (
      <div className="grid lg:grid-cols-12 md:grid-cols-1 min-h-screen">
         <Card
            radius="none"
            shadow="none"
            className="md:col-span-7 mx-auto my-auto"
         >
            <Image
               loading="eager"
               radius="sm"
               width={500}
               alt="login_logo"
               src="/Forgot_Password.svg"
            />
         </Card>
         <Card
            radius="none"
            shadow="none"
            className=" md:col-span-5 my-auto max-w-[600px]"
         >
            <CardBody className="flex flex-col">
               <div className="flex flex-col mb-5">
                  <p className="text-2xl pb-1 font-semibold ">
                     Welcome to Elite Essentials
                  </p>
                  <p className="text-small text-default-800 ">
                     One stop shop for all your needs.
                  </p>
               </div>
               <Input
                  size="sm"
                  type="password"
                  label="Current Password*"
                  className="mb-5"
                  value={currentPassword}
                  onValueChange={setCurrentPassword}
               ></Input>
               <Input
                  size="sm"
                  type="password"
                  label="New Password*"
                  className="mb-5"
                  value={passwordCheck}
                  onValueChange={setPasswordCheck}
               ></Input>
               <Input
                  size="sm"
                  type="password"
                  label="Confirm Password*"
                  className="mb-5"
                  value={newPassword}
                  onValueChange={setNewPassword}
               ></Input>
               <Button
                  className="bg-[#066a73] text-white w-full mb-5"
                  onClick={handleLogin}
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
      </div>
   );
}

export default ForgetPassword;
