import React, {useState} from 'react'
import PageTitle from '../components/PageTitle';


export default function Search() {
  
  const [form, setForm] = useState({
    Name: '',
    Email: '',
    Whatsapp: '',
    Rate: 0

  })
  const onChangeF = evt=>{
    const value = evt.target.value
    const key = evt.target.name
    setForm(old =>({
      ...old,
      [key]: value
    }))
    
  }
  const [success, setSuccess] = useState(false)
  const [payloadFromBack, setpayloadFromBack] = useState({})
  const rate = [0,1,2,3,4,5]
  

  const save = async()=>{
    try{
      
      const response = await fetch('/api/save',{
        method: "POST",
        body: JSON.stringify(form)
      })
      const data = await response.json()
      
      setSuccess(true)
      setpayloadFromBack(data)

    }catch(error){
      console.log(error)
    }
   
    
  }
  return (
    <div className="container mx-auto text-center py-8">
      <PageTitle title="Pesquisa" />
      <h1 className="font-bold text-3xl">Sugestões</h1>
      <p className="max-w-sm mt-4 mx-auto"> Dê seu palpite aqui</p>
      <p className="max-w-sm mx-auto">Contribuindo voce ganha um cupom de desconto 💰 para usar no nosso restaurante 🍕!</p>
      { success == true && <div className=" relative mx-auto my-6 max-w-sm shadow-lg flex bg-gray-300 justify-center content-center rounded p-4 flex-col">
      <img className="w-10 mx-auto " src="./tick.png" alt="success"/>
      <h2 className="font-bold my-4">Obrigado! Sua opinião e muito importante para nós</h2>
      <div class="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3" role="alert">
        <p class="font-bold">Resgate Cupom!</p>
        <p class="mt-4 text-2xl font-bold font-mono">{payloadFromBack.Cupom}</p>
        <hr/>
        <p class="font-bold mt-4">Info:</p>
        <p class="text-sm">{payloadFromBack.Promo}</p>
      </div>
      <p className="mt-6 italic w-56 mx-auto">Printe o cupom e mostra à um garçom</p>
      
     </div>
      }
      {!success && 
      <div>
        <div className="grid justify-center pt-8 ">
          <label className="flex flex-start" htmlFor="">Nome:</label>
          <input type="text" className="p-4 block shadow bg-gray-100 my-2 rounded" onChange={onChangeF} value={form.Name} name="Name"/>
          <label className="flex flex-start" htmlFor="">E-mail:</label>
          <input type="text" className="p-4 block shadow bg-gray-100 my-2 rounded" onChange={onChangeF} value={form.Email} name="Email"/>
          <label className="flex flex-start" htmlFor="">Whatsapp:</label>
          <input type="text" className="p-4 block shadow bg-gray-100 my-2 rounded" onChange={onChangeF} value={form.Whatsapp} name="Whatsapp"/>
          <label className="flex flex-start" htmlFor="">Sugestão:</label>
          <input type="text" className="p-4 block shadow bg-gray-100 my-2 rounded"/>
          <button className=" shadow-lg rounded py-3 my-6 bg-blue-400 hover:bg-blue-500 duration-300" onClick={save}>Salvar</button>
          <span>Nota:</span>
          
        </div>
        <div className="flex flex-row justify-center">
          {rate.map(rate => { 
            return(
              <label htmlFor={rate} className="grid p-3">{rate}<input type="radio" name="Rate" value={rate} onChange={onChangeF}/></label> 
            )}
          )}
        </div>

      </div>
      
      }
     
      
       
      
    </div>
  )
}
