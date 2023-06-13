import Carousel from "react-bootstrap/Carousel";

function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://hqrock.files.wordpress.com/2019/03/batman-80-years-banner.jpg?w=816"
          alt="Imagem do Primeiro banner do wallpaper de HQ"


        />
        <Carousel.Caption>
          <h3>Batman</h3>
          <p>The best comics of the gotham vigilian.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://hqrock.files.wordpress.com/2019/01/marvel-comics-character-burst-i28458.jpg?w=709"
          alt="Imagem do segundo banner do wallpaper de HQ"
        />

        <Carousel.Caption>
          <h3>Avengers</h3>
          <p>The best comics of Marvel super heros.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.ome.lt/cfoBYAKpFe6hqQbjY6yoaS8hts8=/970x360/smart/uploads/conteudo/fotos/dark_crisis.jpg"
          alt="Imagem do terceiro banner do wallpaper de HQ"
        />

        <Carousel.Caption>
          <h3>DC Universe</h3>
          <p>The Classics storys of DC Universe.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}


export default Slider;