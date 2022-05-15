import Home from './Pages/Home/Home';
import './App.css'
import ProductList from './Pages/ProductsList/ProductList';
import Product from './Pages/Product/Product';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import Cart from './Pages/Cart/Cart';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './context/AuthProvider'

function App() {
  return (
    <div className="App">
      <AuthProvider>
     <BrowserRouter>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/productList' element={<ProductList/>}/>
       <Route path='/product' element={<Product/>}/>
       <Route path='/register' element={<Register/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/cart' element={<Cart/>}/>
     </Routes>
     </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;
