import React, { useState } from 'react';
import { PDFDocument, degrees, } from 'pdf-lib';

const PdfModifierComponent = ({file,sign}) => {
  const [pdfUrl, setPdfUrl] = useState(null);

  const handleClick = async () => {
    // Create a new PDF document
    let pdfBlob = new Blob([file], { type: 'application/pdf' });
    let pdfUrl = URL.createObjectURL(pdfBlob);
setPdfUrl(pdfUrl);
  const existingPdfBytes = await fetch(pdfUrl).then(res => res.arrayBuffer())

  const pdfDoc = await PDFDocument.load(existingPdfBytes)

  const pages = pdfDoc.getPages()
  const firstPage = pages[0]
  const {  height } = firstPage.getSize()
 

const signImageBytes = await fetch(sign).then((res) => res.arrayBuffer())

const signImage = await pdfDoc.embedPng(signImageBytes)
const signDims = signImage.scale(0.25)

firstPage.drawImage(signImage, {
  x: 25,
  y: (height/2)-150,
  width: signDims.width,
  height: signDims.height,
  rotate: degrees(0),
  opacity: 1,
})

  const pdfBytes = await pdfDoc.save()

    // Create a blob from the PDF buffer
     pdfBlob = new Blob([pdfBytes], { type: 'application/pdf' });

    // Create a URL for the PDF blob
     pdfUrl = URL.createObjectURL(pdfBlob);

    // Set the PDF URL in the component state
    setPdfUrl(pdfUrl);
  };

  return (
    <div style={{border:'1px solid blue', width:'100%'}}>
      <button onClick={handleClick}>Generate PDF</button>
      {pdfUrl && (
        <embed
          title="PDF Viewer"
          src={pdfUrl}
          width="100%"
          height="100%"
        />
      )}
    </div>
  );
};

export default PdfModifierComponent;
