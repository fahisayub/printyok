import DocViewer, { DocViewerRenderers } from '@cyntler/react-doc-viewer';
import React, { useState } from 'react';

const DocViewerComponent = ({files}) => {

  return (
    <>
     
      <DocViewer
        documents={files.map((file) => ({
          uri: window.URL.createObjectURL(file),
          fileName: file.name,
        }))}
        pluginRenderers={DocViewerRenderers}
      />
    </>
  );
};

export default DocViewerComponent;