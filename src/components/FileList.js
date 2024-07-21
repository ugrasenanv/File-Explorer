import React from 'react';
import File from './File';
import Folder from './Folder';

const FileList = ({ files }) => {
  return (
    <ul>
      {files.map((file, index) => 
        file.type === 'folder' ? <Folder key={index} folder={file} /> : <File key={index} file={file} />
      )}
    </ul>
  );
};

export default FileList;
