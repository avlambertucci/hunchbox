import React from 'react';
import '../css/styles.css'
import Layout from '../components/Layout';
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet"></link>

function MyApp({Component, pageProps}){
  console.log(pageProps)
  return(
    <div>
      <Layout>
        <Component {...pageProps}/>
      </Layout>
 
    </div>
  )
}

export default MyApp