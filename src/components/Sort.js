import React from 'react';

const Sort = ({ setSortKey, setSortOrder }) => {
  return (
    <div>
      <select onChange={(e) => setSortKey(e.target.value)}>
        <option value="name">Name</option>
        <option value="size">Size</option>
        <option value="added">Date</option>
      </select>
      <select onChange={(e) => setSortOrder(e.target.value)}>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>
  );
};

export default Sort;
