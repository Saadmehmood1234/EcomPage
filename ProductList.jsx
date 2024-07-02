import React from 'react';
import ProductCard from './ProductCard';
import styled from 'styled-components';

const ProductList = ({ products }) => {
  return (
    <ProductListContainer>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ProductListContainer>
  );
};

export default ProductList;

const ProductListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  
`;
