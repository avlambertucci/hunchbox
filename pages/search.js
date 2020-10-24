import React from 'react'

export default function Search() {
  return (
    <div className="container mx-auto text-center py-8">
      <h1 className="font-bold text-3xl">Suggestions</h1>
      <p className=""> Please give a hunch and tell us how can we be better!</p>
      <div className="grid justify-center py-8">
        <label className="flex flex-start" htmlFor="">Name:</label>
        <input type="text"/>
        <label className="flex flex-start" htmlFor="">E-mail:</label>
        <input type="text"/>
        <label className="flex flex-start" htmlFor="">Whatsapp:</label>
        <input type="text"/>
        <label className="flex flex-start" htmlFor="">Suggestion:</label>
        <input type="text"/>
      </div>
    </div>
  )
}
