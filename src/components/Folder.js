import React, { useState } from 'react';
import File from './File';

const Folder = ({ folder }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      <div onClick={() => setIsOpen(!isOpen)}>
        <strong>{folder.name}</strong>
      </div>
      {isOpen && (
        <ul>
          {folder.files.map((file, index) => <File key={index} file={file} />)}
        </ul>
      )}
    </li>
  );
};

export default Folder;
