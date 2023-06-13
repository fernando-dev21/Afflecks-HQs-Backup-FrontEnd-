import React, { useState } from 'react';
import './Home.css';
import hq1 from '../assets/image/hq1.png';
import hq2 from '../assets/image/hq2.jpg';
import hq3 from '../assets/image/hq3.jpg';
import hq4 from '../assets/image/hq4.jpg';
import hq5 from '../assets/image/hq5.jpg';
import hq6 from '../assets/image/hq6.jpg';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

const Home = () => {
  const [fontSize, setFontSize] = useState(16);

  const increaseFontSize = () => {
    setFontSize(fontSize + 1);
  };

  const decreaseFontSize = () => {
    setFontSize(fontSize - 1);
  };

  return (
    <main>
      
      <div className="main">

      <div>
        <button onClick={increaseFontSize}><strong>Aumentar fonte</strong></button>
        <button onClick={decreaseFontSize}><strong>Diminuir fonte </strong></button>        
      </div>
      
        <div className="produto" style={{ fontSize: `${fontSize}px` }}>
          <img src={hq2} className="logo" alt="IMAGEM DA HQ DO BATMAN O CAVALEIROS DAS TREVAS" />
          <h3 style={{ fontSize: `${fontSize}px` }}> Batman O cavaleiro das trevas</h3>
          <p style={{ fontSize: `${fontSize}px` }}>R$ 29,99</p>
          <button>Adicionar ao carrinho</button>
        </div>
      </div>
      <div className="produto" style={{ fontSize: `${fontSize}px` }}>
        <img src={hq1} className="logo" alt="IMAGEM DA HQ DO SUPERMAN NÚMERO 4" />
        <h3 style={{ fontSize: `${fontSize}px` }}> Superman </h3>
        <p  style={{ fontSize: `${fontSize}px` }}>R$ 29,99</p>
        <button>Adicionar ao carrinho</button>
      </div>
      <div className="produto" style={{ fontSize: `${fontSize}px` }}>
        <img src={hq4} className="logo" alt="IMAGEM DA HQ DOS VINGADORES" />
        <h3 style={{ fontSize: `${fontSize}px` }}>Os Vingadores</h3>
        <p  style={{ fontSize: `${fontSize}px` }}>R$ 29,99</p>
        <button>Adicionar ao carrinho</button>
      </div>
      <div className="produto" style={{ fontSize: `${fontSize}px` }}>
        <img src={hq3} className="logo" alt="IMAGEM DA HQ DO AMAZING SPIDERMAN" />
        <h3 style={{ fontSize: `${fontSize}px` }}> O Espetacular Homen Aranha</h3>
        <p  style={{ fontSize: `${fontSize}px` }}>R$ 29,99</p>
        <button>Adicionar ao carrinho</button>
      </div>
      <div className="produto" style={{ fontSize: `${fontSize}px` }}>
        <img src={hq5} className="logo" alt="IMAGEM DO HQ BATMAN KNIGHTFALL" />
        <h3 style={{ fontSize: `${fontSize}px` }}> Batman Knightfall</h3>
        <p  style={{ fontSize: `${fontSize}px` }}>R$ 29,99</p>
        <button>Adicionar ao carrinho</button>
      </div>
      <div className="produto" style={{ fontSize: `${fontSize}px` }}>
        <img src={hq6} className="logo" alt="IMAGEM DA HQ DO WATCHMEN" />
        <h3 style={{ fontSize: `${fontSize}px` }}> Watchmen</h3>
        <p  style={{ fontSize: `${fontSize}px` }}>R$ 29,99</p>
        <button>Adicionar ao carrinho</button>
      </div>
     
    </main>
  );
};

export default Home;