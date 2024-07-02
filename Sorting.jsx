import React from 'react'
import styled from 'styled-components';
import { FaSort } from "react-icons/fa";
const Sorting = ({setSortCriteria}) => {
    const handlSortChange=(e)=>{
     setSortCriteria(e.target.value);
    }
  return (
    <SortingContainer>
    <select onChange={handlSortChange}>
    <option value="">Sort By</option>
    <option value="priceAsc"> Low to high</option>
    <option value="priceDesc">High to Low</option>
    <option value="nameAsc"> A to Z</option>
    <option value="nameDesc">Z to A</option>
</select>
{/* <FaSort className='fasort'/> */}
</SortingContainer>
  )
}
export default Sorting;
const SortingContainer=styled.div`
select{
  width: 300px;
  height: 40px;
  border: 1px solid;
  border-radius: 5px;
  font-size: 16px;
  font-weight:500;
  padding-left:20px;
 margin-bottom: 20px;
 margin-top:20px;
 cursor: pointer;
 outline: none;
}
/* .fasort{

  font-size: 20px;
} */
`;