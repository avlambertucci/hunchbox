import React from 'react'
import styles from './styles.module.css'
import Link from 'next/link'

export default function Header() {
  return (
    <div className={styles.header_container}>
      <div className={styles.header_container_top}>
        <img className={styles.img} src="/logo_paplpitebox.png" alt="logo"/>
      </div>
      <div className={styles.header_links}>
        <Link href='/contact'>
          <a className="font-sans text-lg text-black-800 text-center">Contact</a> 
        </Link>
        <Link href='/about'>
          <a className="font-sans text-lg text-black-800 text-center">About</a> 
        </Link>
      </div>
      
    </div>
  )
}
