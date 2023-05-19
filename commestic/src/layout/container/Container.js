import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import {Outlet} from 'react-router-dom'
export default function Container() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}
