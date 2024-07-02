import React from 'react';
import styled from 'styled-components';

const ProductCard = ({ product }) => {
  return (
    <ProductCardComponents>
    
      <h3>{product.name}</h3>
      <img
                            src={`http://localhost:5000/images/image${product.id}.png`}
                            alt={product.name}
                            style={{ maxWidth: '200px' }}
                        />
      {/* <p>{product.category}</p> */}
      <p>${product.price}</p>
    </ProductCardComponents>
  );
};

export default ProductCard;

const ProductCardComponents = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  width: 300px;
  height: 300px;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  margin: 10px;

  img {
    width: 170px;
    height: 170px;
    object-fit:contain;
    border-radius: 50%; 
    margin-bottom: 10px;
  }


  h3{
    font-size: 32px;
    font-weight: 700;
    color: #fff;
  }
  p{
    font-size: 24px;
    font-weight: 500;
    color: #fff;
    margin: 5px 0;
  }
`;
