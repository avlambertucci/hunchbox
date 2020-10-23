import React from 'react'
import styles from './styles.module.css'
import Link from 'next/link'

export default function Header() {
  return (
    <React.Fragment>
      <div className={styles.header_container}>
        <div className='container mx-auto'>
          <img className='mx-auto text-center' src="/logo_paplpitebox.png" alt="logo"/>
        </div>
      <div className='text-center py-4'>
        <Link href='/contact'>
          <a className="px-2  font-sans text-lg text-black-800 text-center">Contact</a> 
        </Link>
        <Link href='/about'>
          <a className="px-2 font-sans text-lg text-black-800 text-center">About</a> 
        </Link>
      </div>
      </div>
    </React.Fragment>
  )
}
