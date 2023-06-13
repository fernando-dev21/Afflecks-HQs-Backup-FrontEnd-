import React, { useState } from 'react';
import './Pagina2.css';
import flash from '../assets/image/flash.webp';
import bane from '../assets/image/bane.jpg';
import camiseta from '../assets/image/camiseta.webp';
import movie from '../assets/image/movie.jpg';
import game_1 from '../assets/image/game.webp';
import game_2 from '../assets/image/game_2.jpg';
import evento from '../assets/image/evento.webp';



const Pagina2 = () => {
  const [fontSize, setFontSize] = useState(16);

  const increaseFontSize = () => {
    setFontSize(fontSize + 1);
  };

  const decreaseFontSize = () => {
    setFontSize(fontSize - 1);
  };

  return (
    <div>
      <div>
        <button onClick={increaseFontSize}><strong>Aumentar fonte</strong></button>
        <button onClick={decreaseFontSize}><strong>Diminuir fonte </strong></button>        
      </div>
      <section className="section-container">           

        <div className="right-side" style={{ fontSize: `${fontSize}px` }}>
          <h3 style={{ fontSize: `${fontSize}px` }}>
          Spiderman Ps5</h3>
          <p style={{ fontSize: `${fontSize}px` }}>
          Spider-Man para o PlayStation 5 (PS5) é um jogo de ação e aventura desenvolvido pela Insomniac Games e publicado pela Sony Interactive Entertainment. 
          Lançado em novembro de 2020, o jogo é uma continuação direta do aclamado Marvel's Spider-Man para o PlayStation 4.
          </p>
        </div>
        <div className="left-side">
          <img src={game_1} alt="Imagem" className="image" />
        </div>


        
        <div className="right-side">
          <h2 style={{ fontSize: `${fontSize}px` }}>
          Injustice 2</h2>
          <p style={{ fontSize: `${fontSize}px` }}>
          Injustice 2 é um jogo de luta desenvolvido pela NetherRealm Studios e publicado pela Warner Bros. Interactive Entertainment.
          Lançado em maio de 2017, o jogo é a sequência do aclamado Injustice: Gods Among Us.
          </p>
        </div>
        <div className="left-side">
          <img src={game_2} alt="Imagem" className="image" />
        </div>

      </section>

      <section className="section-container">
        <div className="left-side">
          <img src={evento} alt="Imagem" className="image" />
        </div>
        <div className="right-side">
          <h2 style={{ fontSize: `${fontSize}px` }}>
          Eventos Geeks</h2>
          <p style={{ fontSize: `${fontSize}px` }}>          
          Eventos de revistas em quadrinhos, também conhecidos como convenções de quadrinhos, 
          são encontros dedicados à celebração e promoção do universo das histórias em quadrinhos.
          Esses eventos reúnem fãs, profissionais da indústria, artistas, 
          escritores e editores para compartilhar sua paixão pelos quadrinhos, explorar lançamentos,
          participar de painéis de discussão, sessões de autógrafos, exposições de arte e muito mais.
          </p>
        </div>
      </section>

      <section className="section-container">
        
        <div className="right-side">
          <h2 style={{ fontSize: `${fontSize}px` }}>
          Ilustrações</h2>
          <p style={{ fontSize: `${fontSize}px` }}>          
          Desenhos em quadrinhos, também conhecidos como histórias em quadrinhos ou HQs, são formas de narrativa visual que combinam ilustrações e texto para contar histórias. 
          Eles são compostos por uma sequência de painéis, onde cada painel representa uma cena ou momento específico da história.
          Os desenhos em quadrinhos abrangem uma ampla variedade de gêneros, desde super-heróis até comédia, ficção científica, fantasia, drama, aventura e muito mais.
          </p>          
        </div>
        <div className="left-side">
          <img src={flash} alt="Imagem" className="image" />
        </div>
      </section>


      <section className="section-3">
      <div className="left-side">
        <img src={movie} alt="Imagem 1" className="image" />
        <div className="description">
          <h2 style={{ fontSize: `${fontSize}px` }}>
          Filmes</h2>
          <p style={{ fontSize: `${fontSize}px` }}>          
          Os filmes da Marvel são uma série de produções cinematográficas que fazem parte do Universo Cinematográfico Marvel (UCM). 
          Esses filmes são baseados em personagens e histórias dos quadrinhos da Marvel Comics e são conhecidos por sua ação, 
          aventura e elementos de fantasia.
          </p>
        </div>
      </div>

      <div className="center-side">
        <img src={camiseta} alt="Imagem 2" className="image" />
        <div className="description">
        <h2 style={{ fontSize: `${fontSize}px` }}>
        Camisetas</h2>
        <p style={{ fontSize: `${fontSize}px` }}>      
        As camisetas de heróis são peças de vestuário populares que apresentam estampas e designs baseados em personagens
        de histórias em quadrinhos, filmes, séries de televisão e jogos.
        Elas são muito apreciadas por fãs e entusiastas desses universos,
        permitindo que as pessoas mostrem seu amor e apoio aos seus heróis favoritos.
        </p>
        </div>
      </div>

      <div className="right-side">
        <img src={bane} alt="Imagem 3" className="image" />
        <div className="description">
        <h2 style={{ fontSize: `${fontSize}px` }}>
        Action Figures</h2>
        <p style={{ fontSize: `${fontSize}px` }}>      
        Action figures são figuras colecionáveis baseadas em personagens de filmes, séries, histórias em quadrinhos, 
        jogos e outras formas de entretenimento.
        Essas figuras são geralmente feitas de plástico ou resina e possuem detalhes precisos e articulações que
        permitem posicionar e movimentar os personagens de diferentes maneiras.
        </p>
        </div>
      </div>
    </section>



    </div>
  );
  
};

export default Pagina2;