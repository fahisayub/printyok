import { Box, Center, Link } from "@chakra-ui/react";
import React from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["PDF"];

const DragnDropComponent = ({setFiles,files}) => {
  const handleChange = (newfile) => {

    let files = Array.from(newfile);
    console.log(files);
    setFiles(files);
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
          w="400px"
          m="auto"
        >
          <Link textDecoration={"underline"} mx="5px">
            Upload file{" "}
          </Link>
          or Drag and Drop here
        </Center>
      </FileUploader>
      {files.length !== undefined ? (
        <div>Selected flies:{files?.map((file,i)=>{
            return<p key={i}>{file.name}</p>
        })}</div>
      ) : (
        "no files uploaded yet"
      )}
    </Box>
  );
};

export default DragnDropComponent;
