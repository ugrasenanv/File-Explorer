import React from 'react';

const Filter = ({ setFilter }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Filter by filename"
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  );
};

export default Filter;
