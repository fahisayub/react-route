import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './Pages/Home';
import AllProducts from './Pages/AllProducts';
import ProductsDetails from './Pages/ProductsDetails';
import Navbar from './components/Navbar';
import Page404 from './Pages/Page404';
function App() {
  return (
    <div className="App">
      <Navbar/>
    <Routes>
      <Route/>

      <Route path='/' element={<Home/>}/>
      <Route path='/products' element={<AllProducts/>}/>
      <Route path='/products/:id' element={<ProductsDetails/>}/>
      <Route path='*' element={<Page404/>}/>
    </Routes>
    </div>
  );
}

export default App;
