import {GoogleSpreadsheet} from 'google-spreadsheet';
import credentials from '../../credentials.json'
const doc = new GoogleSpreadsheet('10wFaJAFkO8AneyNyDTw527YsT_Rs8kkwrNo72d12hCA')

export default async (req, res)=>{

  try{
    await doc.useServiceAccountAuth(credentials)
    await doc.loadInfo()
    
    const sheet = doc.sheetsByIndex[1]

    await sheet.addRow({ 
      Name: "Fulano",
      Email: "Fulano@gmail.com",
      Whatsapp: "985662431",
      Cupom: "10%",
      Promo: 'teste'
    
    })
    console.log(JSON.parse(req.body));
    res.end(req.body)
  }
  catch(err){
    console.log(err)
  }
}