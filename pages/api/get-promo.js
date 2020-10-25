 
import {GoogleSpreadsheet} from 'google-spreadsheet';
import credentials from '../../credentials.json'

const doc = new GoogleSpreadsheet('10wFaJAFkO8AneyNyDTw527YsT_Rs8kkwrNo72d12hCA')

 
 export default async (req, res)=>{

  try{
    await doc.useServiceAccountAuth(credentials)
    await doc.loadInfo()
    

    const sheet = doc.sheetsByIndex[2]
    await sheet.loadCells('A3:B3')
    
    const activatePromotionCell = sheet.getCell(2, 0) 
    const textPromotionCell = sheet.getCell(2, 1)
    // console.log(activatePromotionCell.value)
    
    res.end(JSON.stringify({
      showCoupon: activatePromotionCell.value==="VERDADEIRO",
      message: textPromotionCell.value
    }))
  }
  catch(err){
    res.end(JSON.stringify({
      showCoupon: false,
      message: ""
    }))
  }
 }