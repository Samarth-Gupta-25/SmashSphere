import './App.css';
import Navbar from './components/Navbar';
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='relative'>
      <div className='bg-green-900 fixed top-0 w-full z-10'>
        <Navbar/>
      </div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </div>
  );
}

export default App;
