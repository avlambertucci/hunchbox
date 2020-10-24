import React from 'react';
import Link from 'next/link'


function Index(){
  return (
    <div className="mt-12 text-center">
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
    </div>
    
  )
  
}

export default Index;