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

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Home/>
//   },
//   {
//     path: '/login',
//     element: <LoginPage/>
//   },
//   {
//     path: '/register',
//     element: <RegisterPage/>
//   }
// ])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <RouterProvider router={router}/> */}
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
          <Route path='/cart' element={<CartPage/>}/>
          <Route path='/movie/:id' element={<MovieDetailPage/>}/>
          </Routes>
      </BrowserRouter>
    </CartContextProvider>
  </React.StrictMode>,
)
