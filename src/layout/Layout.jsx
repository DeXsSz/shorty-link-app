import React from 'react'
import { Footer } from '../components/Footer'
import { NavBar } from '../components/NavBar'

export const Layout = (props) => {
  return (
    <div>
        <NavBar/>
        <main>
            {props.children}
        </main>
        <Footer/>
    </div>
  )
}
