import { PropsWithChildren } from "react";
import { styled } from "@/styles/stitches.config";
import { Slot } from "@radix-ui/react-slot";

const StyledTextImpl = ({
  asChild,
  children,
  ...rest
}: PropsWithChildren<{ asChild?: boolean }>) => {
  const Compo = asChild ? Slot : "div";
  return <Compo {...rest}>{children}</Compo>;
};

const Primary = styled(StyledTextImpl, {
  variants: {
    shape: {
      large: {
        fontSize: 20,
      },
      medium: {
        fontSize: 16,
      },
      small: {
        fontSize: 12,
      },
    },
  },
});

const TextVariants = Object.assign({}, { Primary });
export default TextVariants;
