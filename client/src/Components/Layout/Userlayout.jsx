import React from 'react'
import Header from '../Common/Header'
import Footer from './Footer'
import { Outlet } from 'react-router'

const Userlayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>


      <Footer />
    </>
  )
}

export default Userlayout