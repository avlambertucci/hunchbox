import React from 'react';
import Link from 'next/link'


function Index(){
  return (
    <div>
    
    <h1>Olá semana!3 </h1>
    <Link href='/contact'>
      <a>Contact</a> 
    </Link>
    <Link href='/about'>
      <a>About</a> 
    </Link>
  </div>
  )
  
}

export default Index;