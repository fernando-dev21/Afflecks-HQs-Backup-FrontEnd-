import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Pagina2 from './pages/Pagina2';
import Pagina3 from './pages/Pagina3';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css'
import Slider from './slider'
import ProductForm from './components/Product/productForm';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <NavBar />
        <Slider/>
        <Routes>

          <Route path='/' element={<Home />} />

          <Route path='/ProductForm' element={<ProductForm />} />

          <Route path='/pagina2' element={<Pagina2 />} />
          <Route path='/pagina3' element={<Pagina3 />} />
          
        </Routes>       
        <Footer />
      </BrowserRouter>
    
    </>
  );
}

export default App;
