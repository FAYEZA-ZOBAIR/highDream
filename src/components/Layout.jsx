import React from 'react'

import Navbar from "./Navbar/Navbar";
import Footer from './Footer/Footer';

// Pass the child props
export default function Layout({ children }) {
  return (
    <div>
      <Navbar/>
      {children}
      <Footer/>
    </div>
  );
}