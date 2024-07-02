import React, { useState } from 'react';
import styled from 'styled-components'
import { FaFilter } from "react-icons/fa";
const Filters = ({ setFilters }) => {
  const [category, setCategory] = useState('');
  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);
    setFilters((prev) => ({ ...prev, category: selectedCategory }));
  };
  return (
   <FiltersContainer>
      <select value={category} onChange={handleCategoryChange}>
        <option value="">All Categories</option>
        <option value="electronics">Electronics</option>
        <option value="clothing">Clothing</option>
        <option value="books">Books</option>
      </select>
      </FiltersContainer>
  );
};
export default Filters;
const FiltersContainer=styled.div`
select{
  width: 300px;
  height: 40px;
  border: 1px solid;
  border-radius: 5px;
  font-size: 16px;
  font-weight:500;
  padding-left:20px;
  margin-bottom:20px;
}
`;