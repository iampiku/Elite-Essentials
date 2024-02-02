interface Props {
   infographicUrl: string;
   children: ReactNode;
}

import { Image, Card } from "@nextui-org/react";
import { ReactNode } from "react";

/**
 * Renders the AuthLayout component with an infographic and children.
 *
 * @param {Readonly<Props>} props - The props object containing infographicUrl and children.
 * @return {JSX.Element} The rendered AuthLayout component.
 */
function AuthLayout({
   infographicUrl,
   children,
}: Readonly<Props>): JSX.Element {
   return (
      <div className="grid lg:grid-cols-12 md:grid-cols-1 min-h-screen ">
         <div className="h-full flex justify-center my-auto md:col-span-7">
            <Card
               isBlurred
               radius="none"
               shadow="none"
               className="mx-auto my-auto "
            >
               <Image
                  isBlurred
                  loading="eager"
                  radius="sm"
                  width={500}
                  alt="login_logo"
                  src={infographicUrl}
               />
            </Card>
         </div>
         {children}
      </div>
   );
}

export default AuthLayout;
