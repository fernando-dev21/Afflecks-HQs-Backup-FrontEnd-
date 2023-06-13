import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  const [fontSize, setFontSize] = useState(16); // Tamanho inicial da fonte
  const [searchQuery, setSearchQuery] = useState('');

  const increaseFontSize = () => {
    setFontSize(fontSize + 1);
  };

  const decreaseFontSize = () => {
    setFontSize(fontSize - 1);
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para lidar com a pesquisa, como enviar a consulta para um servidor ou executar uma ação específica.
    console.log('Pesquisando por:', searchQuery);
    setSearchQuery('');
  };

  return (
    <nav>
      <Link to="/" style={{ fontSize: `${fontSize}px` }}>
        Home
      </Link>
      <Link to="/pagina2" style={{ fontSize: `${fontSize}px` }}>
        Destaques
      </Link>


      <Link to="/productForm" style={{ fontSize: `${fontSize}px` }}>
        Cadastro de Produto
      </Link>


      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Link to="/pagina3" style={{ fontSize: `${fontSize}px`, marginRight: '10px' }}>
          Quem somos
        </Link>              
      </div>
      <div>
        <button onClick={increaseFontSize}>Aumentar fonte</button>
        <button onClick={decreaseFontSize}>Diminuir fonte</button>
      </div>

      <form onSubmit={handleSubmit} style={{ display: 'flex' }}>
          <input
            type="text"
            value={searchQuery}
            onChange={handleInputChange}
            placeholder="Digite sua pesquisa..."
          />
          <button type="submit">Pesquisar</button>
      </form>
      
    </nav>
  );
};

export default NavBar;
