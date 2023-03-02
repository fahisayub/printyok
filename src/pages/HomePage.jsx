import React, { useState } from "react";
import DragnDropComponent from "../components/DragnDropComponent";
import { Center, Container } from "@chakra-ui/react";
import PdfModifierComponent from "../components/PdfModifierComponent";

const HomePage = () => {
    const [files, setFiles] = useState([]);

  return (
    <Container maxW='full' h='auto' display='flex'>
      <Center h="100vh" w={"600px"}>
        <DragnDropComponent setFiles={setFiles} files={files} />
      </Center>
      <PdfModifierComponent file={files[0]}/>
    </Container>
  );
};

export default HomePage;
