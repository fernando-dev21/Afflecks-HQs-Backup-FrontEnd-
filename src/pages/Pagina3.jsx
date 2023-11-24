import React, { useState } from 'react';
import './Pagina3.css';




const Pagina3 = () => {
  const [fontSize, setFontSize] = useState(16);

  const increaseFontSize = () => {
    setFontSize(fontSize + 1);
  };

  const decreaseFontSize = () => {
    setFontSize(fontSize - 1);
  };

  return (
    <div className="App">
       
      <section className="quem-somos" style={{ fontSize: `${fontSize}px` }} >
        <h2 style={{ fontSize: `${fontSize}px` }}>Bem vindos ao Affleck´s HQs!</h2>
        <p style={{ fontSize: `${fontSize}px` }}>
        Nossa landing page é o seu portal para um mundo cheio de conteúdo emocionante e oportunidades de 
        compra exclusivas para os entusiastas das histórias em quadrinhos.
        Aqui está o que você pode esperar ao navegar pelo nosso site:        
        </p>

        <p style={{ fontSize: `${fontSize}px` }}>
          <strong>Artigos e Resenhas:</strong> Explore uma variedade de artigos informativos e resenhas detalhadas sobre as mais recentes HQs, incluindo lançamentos, clássicos e títulos cult. Nossa equipe de especialistas está sempre atualizada sobre as novidades e compartilhará suas opiniões e análises para mantê-lo informado e entretido.
        </p>

        <p style={{ fontSize: `${fontSize}px` }}>
          <strong>Eventos e Convenções:</strong>Fique atualizado sobre os eventos e convenções de quadrinhos que estão acontecendo em sua região. 
          Informaremos sobre datas, locais e atrações especiais, para que você não perca a oportunidade de conhecer seus artistas e 
          escritores favoritos, participar de painéis de discussão e experimentar a emoção das convenções de HQs.
        </p>

        <p style={{ fontSize: `${fontSize}px` }}>
          <strong>Loja Online:</strong>Navegue por nossa mini loja virtual, onde você encontrará uma seleção cuidadosamente curada de produtos relacionados a HQs. 
          De camisetas exclusivas a canecas colecionáveis e itens de decoração, temos tudo o que um fã de quadrinhos poderia desejar. 
          Compre com confiança, pois trabalhamos apenas com parceiros e fornecedores confiáveis para garantir a qualidade dos produtos.
        </p>

      </section>
    </div>
  )
}

export default Pagina3