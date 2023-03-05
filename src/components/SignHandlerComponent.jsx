import { Input } from '@chakra-ui/react';
import React from 'react';

const SignHandlerComponent = ({sign,setSign}) => {

    async function convertToTransparentPNG(blob) {
        const img = new Image();
        img.src = URL.createObjectURL(blob);
      
        await new Promise(resolve => img.onload = resolve);
      
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
      
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);
      
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const { data } = imageData;
        const [r, g, b] = [255, 255, 255]; // the background color to remove
        for (let i = 0; i < data.length; i += 4) {
          if (data[i] === r && data[i + 1] === g && data[i + 2] === b) {
            data[i + 3] = 0; // set alpha to 0 (transparent)
          }
        }
        
        ctx.putImageData(imageData, 0, 0);
      
        const transparentPNG = await new Promise(resolve => {
          canvas.toBlob(blob => {
            resolve(blob);
          }, 'image/png');
        });
      
        return URL.createObjectURL(transparentPNG);
      }
      
    let handleSign=async(e)=>{
        let file=e.target.files[0]
        const transparentPngBlob = await convertToTransparentPNG(file);
        setSign(transparentPngBlob);
        
    }

    return (
        <Input type="file" accept={['.jpg','.png']} onChange={handleSign}/>

    );
};

export default SignHandlerComponent;