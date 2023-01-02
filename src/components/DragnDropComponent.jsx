import { Box, Center, Heading, Link } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPEG", "PNG", "GIF", "PDF"];

const DragnDropComponent = () => {
  const [file, setFile] = useState({});
  const handleChange = (newfile) => {
    let files = newfile;
    console.log(files);
    setFile(files);
  };
  return (
    <Box textAlign={"center"} >
      <FileUploader
        multiple={true}
        handleChange={handleChange}
        name="file"
        types={fileTypes}
      >
        <Center
          border="1px dashed black"
          borderRadius={"50px"}
          h="400px"
          w={"400px"}
          m="auto"
        >
          <Link textDecoration={"underline"} mx="5px">
            Upload file{" "}
          </Link>
          or Drag and Drop here
        </Center>
      </FileUploader>
      {file.length !== undefined ? (
        <div>No of flies:{file.length}</div>
      ) : (
        "no files uploaded yet"
      )}
    </Box>
  );
};

export default DragnDropComponent;
