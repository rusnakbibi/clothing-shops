import { createContext, useState, useEffect } from 'react';

import { onAuthStateChangedListener } from '../utils';

import PRODUCTS_DATA from '../shop-data.json';

export const ProductsContext = createContext({
  products: [],
  setProducts: () => [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const value = { products, setProducts };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        setProducts(PRODUCTS_DATA);
      }
    });

    return unsubscribe;
  }, []);

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
