import React from 'react';
import Link from 'next/link'
import useSWR from 'swr';
import PageTitle from '../components/PageTitle';


const fetcher = (...args)=> fetch(...args).then(res=> res.json())



const Index= ()=>{
const{data, error} = useSWR('/api/get-promo', fetcher )


  return (
    <div className="mt-12 text-center">
      <PageTitle title="Seja bem-vindo" />
      <p>
      O restaurante do John é conhecido por seu atendimento ao cliente de excelencia<br/>
      Por isso nos importamos com voce, e queremos te ouvir!
      </p>
      <div className='my-12'>
        <Link href='/search'>
          <button 
            className='rounded-lg bg-blue-400 font-bold px-6 py-4 shadow-lg 
            hover:shadow-md hover:bg-blue-500
            focus:outline-none focus:shadow-outline duration-300 ...'>Palpite!</button>
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