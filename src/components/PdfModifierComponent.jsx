import React, { useState } from 'react';
import { PDFDocument, StandardFonts, degrees, rgb } from 'pdf-lib';

const PdfModifierComponent = ({file}) => {
  const [pdfUrl, setPdfUrl] = useState(null);

  const handleClick = async () => {
    // Create a new PDF document
    let pdfBlob = new Blob([file], { type: 'application/pdf' });
    let pdfUrl = URL.createObjectURL(pdfBlob);
setPdfUrl(pdfUrl);
  const existingPdfBytes = await fetch(pdfUrl).then(res => res.arrayBuffer())

  const pdfDoc = await PDFDocument.load(existingPdfBytes)
  const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica)

  const pages = pdfDoc.getPages()
  const firstPage = pages[0]
  const {  height } = firstPage.getSize()
  firstPage.drawText('Muhammed Fahiz', {
    x: 5,
    y: (height / 2)-100 ,
    size: 20,
    font: helveticaFont,
    color: rgb(0.95, 0.1, 0.1),
    rotate: degrees(0),
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
    <div style={{border:'1px solid blue', width:'500px'}}>
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
