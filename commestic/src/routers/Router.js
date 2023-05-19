import React from 'react'
import DashBoard from '../pages/dashboard/DashBoard'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import IndexPage from '../pages/indexPage/IndexPage'
import AboutPage from '../pages/aboutPage/AboutPage'
import ClientPage from '../pages/clientPage/ClientPage'
import ContactPage from '../pages/contactPage/ContactPage'
import ProductPage from '../pages/productPage/ProductPage'
import NotFound from '../components/notfound/NotFound'
import {Register} from '../components/register/Register'
import Cart from '../components/cart/Cart'
import {Login} from '../components/login/Login'
import Admin from '../components/admin/Admin'
import {Register2} from '../components/register/Register2'
import ChangePassword from '../components/changePassword/ChangePassword'
import { Login2 } from '../components/login/Login2'
import Product from '../components/admin/product/Product'
import Customer from '../components/admin/user/Customer'
import Invoice from '../components/admin/invoice/Invoice'

// Nhận dashBoard 
export default function Router() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<DashBoard/>}>
            <Route index element={<IndexPage/>}/>
            <Route path='about' element={<AboutPage/>}/>
            <Route path='client' element={<ClientPage/>} />
            <Route path='contact' element={<ContactPage/>}/>
            <Route path='product' element={<ProductPage/>}/>
            <Route path='cart' element={<Cart/>}/>

        </Route>
        <Route path='*' element={<NotFound/>}/>
        <Route path='register' element={<Register/>}/>
        <Route path='register2' element={<Register2/>}/>
        <Route path='login' element={<Login />}/>
        <Route path='admin' element={<Admin/>}>
          <Route path='/admin/customer' element={<Customer/>}/>
          <Route path='/admin/product' element={<Product/>}/>
          <Route path='/admin/invoice'element={<Invoice/>}/>
        </Route>
        <Route path='changepass' element={<ChangePassword/>}/>
        <Route path='login2' element={<Login2 />}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}
