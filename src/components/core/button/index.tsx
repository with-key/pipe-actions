import React, { ComponentPropsWithoutRef, ElementRef, Ref } from "react";
import { Slot } from "@radix-ui/react-slot";

type ImplType = ComponentPropsWithoutRef<"button"> & {
  asChild?: boolean;
};

type RefType = ElementRef<"button">;

const ButtonImpl = React.forwardRef<RefType, ImplType>(
  ({ children, asChild, ...restProps }, ref) => {
    const Compo = asChild ? Slot : "button";

    return (
      <Compo ref={ref} {...restProps}>
        {children}
      </Compo>
    );
  }
);

ButtonImpl.displayName = "BaseButtonImple";
export default ButtonImpl;
