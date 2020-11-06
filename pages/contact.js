import React from 'react';
import PageTitle from '../components/PageTitle';
import dynamic from 'next/dynamic'

function ContactPage() {
  
  const Map = dynamic(
    
    () => import('../components/Map/Map'), // replace '@components/map' with your component's location
    { 
      loading: () => <p>A map is loading</p>,
      ssr: false // This line is important. It's what prevents server-side render
    }
  )
  return(
    <>
    <PageTitle title="Contato" />
    
    <div className="flex p-5">
    <aside className="p-5 max-w-xl shadow-lg bg-gray-100 hover:shadow-inner hover:bg-gray-300 transition duration-500 ease-in-out">
        <h2 className=" my-2 text-gray-600 text-2xl font-bold font-serif border-b border-gray-400">Solicite Contato</h2>
        <br/>
        <ul>
          <li className=" my-2">Av. Augusto de Lima, 100, Centro Belo Horizonte, MG – 00000-000 - +55 31 3181-0000</li>
          <li>Av. Augusto de Lima, 100, Centro Belo Horizonte, MG – 00000-000 - +55 31 3181-0000</li>
        </ul>
      </aside>
     <Map />
    </div>
    </>
  );
}
  


export default ContactPage;