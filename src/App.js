import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './view/Home';
import AboutUs from './view/AboutUs';
import Contact from './view/Contact';
import Product from './view/Product';
import Gallery from './view/Gallery';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' Component={<Home />}/>
        <Route path='/about' Component={<AboutUs />}/>
        <Route path='/contact' Component={<Contact />}/>
        <Route path='/gallery' Component={<Gallery />}/>
        <Route path='/product' Component={<Product />}/>
      </Routes>
    </div>
  );
}

export default App;
