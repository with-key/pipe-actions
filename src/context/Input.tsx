import React, { ComponentPropsWithoutRef } from "react";
import { useField } from "./field";

export const Id = (props: ComponentPropsWithoutRef<"input">) => {
  const [value, setter] = useField();
  return (
    <input
      value={value}
      onChange={(e) => {
        const { value } = e.target;
        setter("id", value);
      }}
      {...props}
    />
  );
};

export const Title = (props: ComponentPropsWithoutRef<"input">) => {
  const [value, setter] = useField();
  return (
    <input
      value={value}
      onChange={(e) => {
        const { value } = e.target;
        setter("title", value);
      }}
      {...props}
    />
  );
};
