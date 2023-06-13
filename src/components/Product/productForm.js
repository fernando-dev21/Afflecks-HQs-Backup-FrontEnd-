import React, { useState } from 'react';
import './ProductForm.css';

const ProductForm = () => {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verifica se todos os campos estão preenchidos antes de cadastrar o produto
    if (name && price && description) {
      const newProduct = { name, price, description };
      setProducts([...products, newProduct]);
      clearForm();
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  const clearForm = () => {
    setName('');
    setPrice('');
    setDescription('');
  };

  const handleToggleDetails = (index) => {
    setProducts((prevProducts) =>
      prevProducts.map((product, i) =>
        i === index ? { ...product, showDetails: !product.showDetails } : product
      )
    );
  };

  return (
    <div className="product-form">
      <h2>Cadastro de Produto</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Preço:</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Descrição:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button className="cadButton" type="submit">
          Cadastrar Produto
        </button>
      </form>

      {products.length > 0 && (
        <div className="product-list">
          <h3>Produtos Cadastrados</h3>
          {products.map((product, index) => (
            <div key={index} className="product-item">
              <h4>Produto {index + 1}</h4>
              <button onClick={() => handleToggleDetails(index)}>
                {product.showDetails ? 'Ocultar Detalhes' : 'Visualizar Detalhes'}
              </button>
              {product.showDetails && (
                <div className="product-details">
                  <p>Nome: {product.name}</p>
                  <p>Preço: {product.price}</p>
                  <p>Descrição: {product.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductForm;
