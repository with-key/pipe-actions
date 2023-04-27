import React, { ElementRef, PropsWithChildren } from "react";

type Ref = ElementRef<"div">;

const Price = React.forwardRef<Ref, PropsWithChildren>(
  ({ children, ...rest }, ref) => {
    if (typeof children === "string") {
      if (isNaN(Number(children))) {
        throw Error("children must be only number shape");
      }

      return (
        <div ref={ref} {...rest}>
          {Number(children).toLocaleString("kr")}
        </div>
      );
    }

    if (typeof children === "number") {
      return (
        <div ref={ref} {...rest}>
          {children.toLocaleString("kr")}
        </div>
      );
    }

    throw Error("children must be string or number");
  }
);
Price.displayName = "Price";

const Plain = React.forwardRef<Ref, PropsWithChildren>(
  ({ children, ...rest }, ref) => {
    return (
      <div ref={ref} {...rest}>
        {children}
      </div>
    );
  }
);
Plain.displayName = "Plain";

const Text = Object.assign({}, { Price, Plain });
export default Text;
