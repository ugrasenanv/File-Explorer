import React, { useState } from 'react';
import FileList from './components/FileList';
import Filter from './components/Filter';
import Sort from './components/Sort';
import data from './data.json';

const App = () => {
  const [files, setFiles] = useState(data);
  const [filter, setFilter] = useState('');
  const [sortKey, setSortKey] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');

  const filteredFiles = files.filter(file => file.name.toLowerCase().includes(filter.toLowerCase()));

  const sortedFiles = [...filteredFiles].sort((a, b) => {
    if (a[sortKey] < b[sortKey]) return sortOrder === 'asc' ? -1 : 1;
    if (a[sortKey] > b[sortKey]) return sortOrder === 'asc' ? 1 : -1;
    return 0;
  });

  return (
    <div>
      <h1>Document Access</h1>
      <Filter setFilter={setFilter} />
      <Sort setSortKey={setSortKey} setSortOrder={setSortOrder} />
      <FileList files={sortedFiles} />
    </div>
  );
};

export default App;

// import React from "react";
// import "./style.css";

// export default function App() {
//   return (
//     <div>
//       <h1>Hello StackBlitz!</h1>
//       <p>Start editing to see some magic happen :)</p>
//     </div>
//   );
// }
