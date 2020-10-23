import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/styles.css'
// import logo from '../public/logo_transparent.png'


function MyApp({Component, pageProps}){
  return(
    <div>
      <Header />
      
      <Component {...pageProps}/>

      <Footer />
    </div>
  )
}

export default MyApp