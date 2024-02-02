import { useNavigate } from "react-router-dom";

import { Card, CardBody, Button, Image } from "@nextui-org/react";

export default function PageNotFound() {
   const navigate = useNavigate();

   function onHomeClick() {
      navigate("/");
   }

   return (
      <div className="flex justify-center items-center min-h-screen bg-gray-200">
         <Card
            className="min-w-[900px] bg-gray-200"
            radius="none"
            shadow="none"
         >
            <CardBody className="flex items-center">
               <Image
                  radius="sm"
                  loading="eager"
                  width={400}
                  alt="404_img"
                  src="/Page_Not_Found.svg"
               ></Image>
               <span className="text-2xl font-bold mb-5">
                  Sorry, Page not found!
               </span>
               <Button
                  radius="full"
                  onClick={onHomeClick}
                  className="bg-[#066a73] text-white font-semibold text-base"
               >
                  Go to Homepage
               </Button>
            </CardBody>
         </Card>
      </div>
   );
}
