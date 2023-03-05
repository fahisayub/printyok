import React, { useState } from "react";
import DragnDropComponent from "../components/DragnDropComponent";
import { Box, Center, Container, Input } from "@chakra-ui/react";
import PdfModifierComponent from "../components/PdfModifierComponent";
import SignHandlerComponent from "../components/SignHandlerComponent";

const HomePage = () => {
    const [files, setFiles] = useState([]);
    const [sign,setSign]=useState({});
  return (
    <Container maxW='full' h='auto' display='flex'>
      <Box>
<SignHandlerComponent sign={sign} setSign={setSign} />
      <Center h="100vh" w={"600px"}>
        <DragnDropComponent setFiles={setFiles} files={files}  />
      </Center>
      </Box>
      <PdfModifierComponent file={files[0]} sign={sign}/>
    </Container>
  );
};

export default HomePage;
