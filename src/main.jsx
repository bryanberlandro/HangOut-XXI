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
    <BrowserRouter>
        <Routes>
        <Route path='*' element={<NotFoundPage/>}/>
        <Route path='/' element={<Home/>} />
        <Route path='/voucher' element={<PromoPage/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/register' element={<RegisterPage/>} />
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
