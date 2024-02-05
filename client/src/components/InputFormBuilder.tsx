import { Input } from "@nextui-org/react";
import { ReactNode } from "react";

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

interface Props {
   formSchema: FormSchema[];
}

export default function InputFormBuilder({ formSchema }: Readonly<Props>) {
   return (
      <>
         {formSchema.map((formItem, index) => {
            return (
               <Input
                  key={index}
                  radius="md"
                  className="mb-5"
                  labelPlacement="outside"
                  value={formItem.value}
                  label={formItem.label}
                  isInvalid={!formItem.isValid}
                  isRequired={formItem.isRequired}
                  type={formItem.inputType ?? "text"}
                  errorMessage={!formItem.isValid && formItem.errorMessage}
                  onValueChange={formItem.onValueChange}
                  startContent={formItem.startContent}
               ></Input>
            );
         })}
      </>
   );
}
