import { action, createStore, persist } from 'easy-peasy';

const productModel = persist(
  {
    products: [],
    addProduct: action((state, product) => {
      state.products.push(product);
    }),
  },
  {
    storage: 'localStorage', // ou 'sessionStorage'
  }
);

export default productModel;
