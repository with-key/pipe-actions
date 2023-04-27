import ButtonCore from "@/components/button";
import BuottnVariants from "@/components/button/styles";

import Text from "@/components/text";
import TextVariants from "@/components/text/styles";

import React from "react";

const Home = () => {
  return (
    <>
      <TextVariants.Primary asChild shape="large">
        <Text.Price>3000</Text.Price>
      </TextVariants.Primary>

      <TextVariants.Primary asChild shape="large">
        <Text.Plain>안녕</Text.Plain>
      </TextVariants.Primary>

      <BuottnVariants.Primary asChild shape="middle">
        <ButtonCore
          onClick={() => {
            console.log("hello button");
          }}
        >
          버튼
        </ButtonCore>
      </BuottnVariants.Primary>
    </>
  );
};

export default Home;
