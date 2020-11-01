import React from 'react';
import Link from 'next/link'
import useSWR from 'swr';
import PageTitle from '../components/Title'

const fetcher = (...args)=> fetch(...args).then(res=> res.json())



function Index(){
const{data, error} = useSWR('/api/get-promo', fetcher )


  return (
    <div className="mt-12 text-center">
      <PageTitle title="Index" />
      <p>
      John Doe's restaurant is known for its ability to serve customers perfectly<br/>
      Therefore, we are always open to hear from you!
      </p>
      <div className='my-12'>
        <Link href='/search'>
          <button 
            className='rounded-lg bg-blue-400 font-bold px-6 py-4 shadow-lg 
            hover:shadow-md hover:bg-blue-500
            focus:outline-none focus:shadow-outline duration-300 ...'>Give a hunch!</button>
        </Link>
      </div>
      <p className="my-12 text-center">
      {!data && <p>Carregando...</p>}
      {!error && data && data.showCoupon==true && <p>{data.message}</p>}
        
      </p>
    </div>
    
  )
  
}

export default Index;