import logo from './logo.svg';
import './App.css';
import Footer from './Component/Footer';
import MyNavBar from './Component/MyNavBar';
import Login from './Component/Login';
import SignUp from './Component/SignUp';
import ContactUs from './Component/ContactUs';
import AboutUs from './Component/AboutUs';
import Products from './Component/Products';
import Product from './Component/Product';

import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom'
import Users from './Component/Users';
import Cart from './Component/Cart';
import CartProducts from './Component/CartProducts';
import Home from './Component/Home';
import Checkout from './Component/Checkout';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <MyNavBar />
        <Routes>
          <Route path='/Home' element={<Home />}/>
          <Route path='/' element={<Navigate to='/Home'/>}/>
          <Route path='/Products' element={<Products />}/>
          <Route path='/Products/:id' element={<Product />}/>
          <Route path='/About' element={<AboutUs />}/>
          <Route path='/Contact' element={<ContactUs />}/>
          <Route path='/Login' element={<Login />}/>
          <Route path='/SignUp' element={<SignUp />}/>
          <Route path='/User' element={<Users />}/>
          <Route path='/cartProducts' element={<CartProducts />}/>
          <Route path='/checkout' element={<Checkout />}/>
        </Routes>
        <Cart />
      </BrowserRouter>
        <Footer />
    </div>  
  );
}


export default App;
