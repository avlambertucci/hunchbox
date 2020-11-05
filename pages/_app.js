import React from 'react';
import '../css/styles.css'
import Layout from '../components/Layout';
import {motion} from 'framer-motion';
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet"></link>

function MyApp({Component, pageProps, router}){
  
  return(
    <motion.div key={router.route} initial="pageInitial"   animate="pageAnimate" variants={{
      pageInitial:{
        opacity:0
      },
      pageAnimate:{
        opacity:1
      }
    }}>
      <Layout>
        <Component {...pageProps}/>
      </Layout>
    </motion.div>
 
    
  )
}

export default MyApp