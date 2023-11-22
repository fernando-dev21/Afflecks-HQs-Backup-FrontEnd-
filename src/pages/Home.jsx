import React, { useState } from 'react';
import './Home.css';
import hq1 from '../assets/image/hq1.png';
import hq2 from '../assets/image/hq2.jpg';
import hq3 from '../assets/image/hq3.jpg';
import hq4 from '../assets/image/hq4.jpg';
import hq5 from '../assets/image/hq5.jpg';
import hq6 from '../assets/image/hq6.jpg';
import hq7 from '../assets/image/hq7.jpg';
import hq8 from '../assets/image/hq8.jpg';
import hq9 from '../assets/image/hq9.png';
import hq10 from '../assets/image/hq10.jpg';



const Home = () => {
  const [fontSize, setFontSize] = useState(16);

  const increaseFontSize = () => {
    setFontSize(fontSize + 1);
  };

  const decreaseFontSize = () => {
    setFontSize(fontSize - 1);
  };

  const produtosIniciais = [
    { id: 1, imagem: hq2, nome: 'Batman O cavaleiro das trevas', preco: 'R$ 29,99', adicionado: false },
    { id: 2, imagem: hq1, nome: 'Superman', preco: 'R$ 29,99', adicionado: false },
    { id: 3, imagem: hq4, nome: 'Os Vingadores', preco: 'R$ 29,99', adicionado: false },
    { id: 4, imagem: hq3, nome: 'O Espetacular Homem Aranha', preco: 'R$ 29,99', adicionado: false },
    { id: 5, imagem: hq5, nome: 'Batman Knightfall', preco: 'R$ 29,99', adicionado: false },
    { id: 6, imagem: hq6, nome: 'Watchmen', preco: 'R$ 29,99', adicionado: false },
    { id: 7, imagem: hq7, nome: 'Watchmen', preco: 'R$ 29,99', adicionado: false },
    { id: 8, imagem: hq8, nome: 'Watchmen', preco: 'R$ 29,99', adicionado: false },
    { id: 9, imagem: hq9, nome: 'Watchmen', preco: 'R$ 29,99', adicionado: false },
    { id: 10, imagem: hq10, nome: 'Watchmen', preco: 'R$ 29,99', adicionado: false },


  ];

  const [produtos, setProdutos] = useState(produtosIniciais);

  const handleClick = (id) => {
    setProdutos((prevProdutos) =>
      prevProdutos.map((produto) =>
        produto.id === id ? { ...produto, adicionado: !produto.adicionado } : produto
      )
    );
  };

  return (
    <main>
      <div className="main">
        {/* ... Controles de fonte ... */}

        <div className="produtos-container">
          {produtos.map((produto) => (
            <div key={produto.id} className="produto" style={{ fontSize: `${fontSize}px` }}>
              <img src={produto.imagem} className="logo" alt={`IMAGEM DA HQ DE ${produto.nome}`} />
              <h3 style={{ fontSize: `${fontSize}px` }}>{produto.nome}</h3>
              <p style={{ fontSize: `${fontSize}px` }}>{produto.preco}</p>

              <div>
                <button
                  onClick={() => handleClick(produto.id)}
                  style={{
                    backgroundColor: produto.adicionado ? 'green' : '',
                    color: produto.adicionado ? 'white' : 'black',
                  }}
                >
                  {produto.adicionado ? 'Adicionado ao carrinho' : 'Adicionar ao carrinho'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
