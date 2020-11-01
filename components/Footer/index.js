import React from 'react'
import styles from './styles.module.css'

export default function Footer() {
  return (
    <div className={styles.footer_container}>  
      <div className="container mx-auto text-center font-bold text-white">
        <h3>Projeto desenvolvido por: </h3>
        <a className="hover:underline" href="">Armando Lambertucci</a> / {''}
        <a className="hover:underline" href="https://www.linkedin.com/in/armando-lambertucci-98402a40/">LinkedIn</a> /{''}
        {''} <a className="hover:underline" href="https://github.com/avlambertucci">Github</a>
      </div> 
      <div className='justify-space-between'>
        <img className="inline p-4" src="/logo_semana_fsm 1.png" alt="logo_semana"/>
        <img className="inline p-4" src="/logo_devpleno 1.png" alt=""/>
      </div>
    </div>
    
  )
}
