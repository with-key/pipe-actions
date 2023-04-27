import React, { ComponentPropsWithoutRef, ElementRef, Ref } from "react";
import { Slot } from "@radix-ui/react-slot";

type ImplType = ComponentPropsWithoutRef<"button"> & {
  asChild?: boolean;
};

type RefType = ElementRef<"button">;

const ButtonCore = React.forwardRef<RefType, ImplType>(
  ({ children, asChild, ...restProps }, ref) => {
    return (
      <button ref={ref} {...restProps}>
        {children}
      </button>
    );
  }
);

ButtonCore.displayName = "BaseButtonImple";
export default ButtonCore;
