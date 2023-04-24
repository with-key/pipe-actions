import { styled } from "@/styles/stitches.config";
import { useRouter } from "next/router";
import React from "react";

const Home = () => {
  const router = useRouter();

  return (
    <Container>
      <Category onClick={() => router.push("/button")}>button {">"} </Category>
      <Category onClick={() => router.push("/input")}>input {">"}</Category>
    </Container>
  );
};

export default Home;

const Container = styled("div", {
  padding: 30,
});

const Category = styled("div", {
  cursor: "pointer",
  rmy: 20,
  fontSize: 20,
  textDecoration: "underline",
});
