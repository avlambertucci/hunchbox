import React from 'react'
const save = async()=>{
 const form = {
   Name: 'ssaf',
   Email: 'asf',
   Whatsapp: 'asf',
 }

  const response = await fetch('/api/save',{
    method: "POST",
    body: JSON.stringify(form)
  })
  const data = await response.json()
  console.log(data)

}
export default function Search() {
  return (
    <div className="container mx-auto text-center py-8">
      <h1 className="font-bold text-3xl">Suggestions</h1>
      <p className=""> Please give a hunch and tell us how can we be better!</p>
      <div className="grid justify-center py-8">
        <label className="flex flex-start" htmlFor="">Name:</label>
        <input type="text" className="p-4 block shadow bg-gray-100 my-2 rounded"/>
        <label className="flex flex-start" htmlFor="">E-mail:</label>
        <input type="text" className="p-4 block shadow bg-gray-100 my-2 rounded"/>
        <label className="flex flex-start" htmlFor="">Whatsapp:</label>
        <input type="text" className="p-4 block shadow bg-gray-100 my-2 rounded"/>
        <label className="flex flex-start" htmlFor="">Suggestion:</label>
        <input type="text" className="p-4 block shadow bg-gray-100 my-2 rounded"/>
        <button className=" shadow-lg rounded py-3 my-6 bg-blue-400 hover:bg-blue-500 duration-300" onClick={save}>Salvar</button>
      </div>
    </div>
  )
}
