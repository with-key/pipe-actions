import { PropsWithChildren, createContext, useContext } from "react";
import { FormState, useFormSetter, useFormState } from "./form";

type FieldContextType = string;

type Props = {
  name: keyof FormState;
};

const FieldContext = createContext<FieldContextType | null>(null);

const FieldProvider = ({ children, name }: PropsWithChildren<Props>) => {
  const formState = useFormState();
  const value = formState[name];

  return (
    <FieldContext.Provider value={value}>{children}</FieldContext.Provider>
  );
};

export const useField = () => {
  const context = useContext(FieldContext);
  console.log(context);
  const formSetter = useFormSetter();
  if (context == null) {
    throw new Error("useField must be used within a FieldProvider");
  }

  return [context, formSetter] as const;
};

export default FieldProvider;
