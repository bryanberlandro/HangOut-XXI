import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'swiper/css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/homePage';
import LoginPage from './pages/loginPage';
import RegisterPage from './pages/registerPage';
import PromoPage from './pages/promoPage';
import NotFoundPage from './pages/notFoundPage';
import MovieDetailPage from './pages/movieDetailPage';
import ProfilePage from './pages/profilePage';
import FoodPage from './pages/productPage';
import ProductDetails from './pages/productDetails';
import CartContextProvider from './context/CartItem';
import CartPage from './pages/cartPage';
import AddressPage from './pages/addressPage';
import UserContextProvider from './context/User';
import MoviesPage from './pages/moviesPage';
import CinemaSeatsPage from './pages/cinemaSeatsPage';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContextProvider>
      <CartContextProvider>
        <BrowserRouter>
            <Routes>
            <Route path='*' element={<NotFoundPage/>}/>
            <Route path='/' element={<Home/>} />
            <Route path='/profile' element={<ProfilePage/>}/>
            <Route path='/voucher' element={<PromoPage/>} />
            <Route path='/login' element={<LoginPage/>} />
            <Route path='/register' element={<RegisterPage/>} />
            <Route path='/food' element={<FoodPage/>}/>
            <Route path='/food/:id' element={<ProductDetails/>}/>
            <Route path='/cart/address' element={<AddressPage/>}/>
            <Route path='/cart' element={<CartPage/>}/>
            <Route path='/movies' element={<MoviesPage/>}/>
            <Route path='/movie/:id' element={<MovieDetailPage/>}/>
            <Route path='/movie/:id/seats' element={<CinemaSeatsPage/>}/>
            </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </UserContextProvider>
  </React.StrictMode>,
)
