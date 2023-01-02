import React from "react";
import DragnDropComponent from "../components/DragnDropComponent";
import { Center, Container } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <Container>
      <Center h="100vh" w={"600px"}>
        <DragnDropComponent />
      </Center>
    </Container>
  );
};

export default HomePage;
