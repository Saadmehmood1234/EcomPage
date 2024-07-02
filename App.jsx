import React, { useState, useEffect } from 'react';
import './App.css';
import ProductList from './components/ProductList';
import Filters from './components/Filters';
import Sorting from './components/Sorting';
import styled from 'styled-components';
import NavBar from './components/NavBar';
const App = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({});
  const [sortCriteria, setSortCriteria] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setProducts(data))
      .catch(error => console.error('There was a problem with the fetch operation:', error));
  }, []);

  useEffect(() => {
    let updatedProducts = [...products];
    
    if (filters.category) {
      updatedProducts = updatedProducts.filter(product => product.category === filters.category);
    }
    if (filters.priceRange) {
      updatedProducts = updatedProducts.filter(product => product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1]);
    }
    if (sortCriteria) {
      updatedProducts.sort((a, b) => {
        if (sortCriteria === 'priceAsc') {
          return a.price - b.price;
        } else if (sortCriteria === 'priceDesc') {
          return b.price - a.price;
        } else if (sortCriteria === 'nameAsc') {
          return a.name.localeCompare(b.name);
        } else if (sortCriteria === 'nameDesc') {
          return b.name.localeCompare(a.name);
        }
        return 0;
      });
    }
    setFilteredProducts(updatedProducts);

  }, [products, filters, sortCriteria]);

  return (
    <MainComponents>
      <NavBar/>
      <Filters setFilters={setFilters} filters={filters} />
      <Sorting setSortCriteria={setSortCriteria} sortCriteria={sortCriteria} />
      <ProductList products={filteredProducts} />
  
    </MainComponents>
  );
};

export default App;

const MainComponents = styled.div`
  background-image: url(./back.jpg);
  background-size:cover;
  /* height: 100vh; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* width: 100%; */
`;
