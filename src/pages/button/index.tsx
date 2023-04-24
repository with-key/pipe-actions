import React from "react";

import ButtonImpl from "@/components/core/button";
import * as InjectableButton from "@/components/template/button";

const Button = () => {
  return (
    <>
      {/* core button components */}
      <ButtonImpl
        asChild // Merge using slot
        onClick={() => {
          console.log("onClick");
        }}
      >
        {/* template button components */}
        <InjectableButton.Primary shape="small01">
          버튼
        </InjectableButton.Primary>
      </ButtonImpl>
      <br />
      <ButtonImpl
        asChild // merge with Slot
        onClick={() => {
          console.log("onClick");
        }}
      >
        {/* template button components */}
        <InjectableButton.Reject shape="middle">버튼</InjectableButton.Reject>
      </ButtonImpl>
    </>
  );
};

export default Button;
