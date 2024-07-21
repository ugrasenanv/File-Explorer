import React from 'react';

const File = ({ file }) => {
  return (
    <li>
      <span>{file.name} ({file.type}) - {file.added}</span>
    </li>
  );
};

export default File;
