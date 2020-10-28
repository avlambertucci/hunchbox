import {GoogleSpreadsheet} from 'google-spreadsheet';
import credentials from '../../credentials.json'
import moment from 'moment';
const doc = new GoogleSpreadsheet('10wFaJAFkO8AneyNyDTw527YsT_Rs8kkwrNo72d12hCA')

export default async (req, res)=>{

  try{
    await doc.useServiceAccountAuth(credentials)
    await doc.loadInfo()
    
    const data = (JSON.parse(req.body));
    
    const sheet = doc.sheetsByIndex[1]

    const sheetConfig = doc.sheetsByIndex[2]
    await sheetConfig.loadCells('A3:B3')
    const activatePromotionCell = sheetConfig.getCell(2, 0) 
    const textPromotionCell = sheetConfig.getCell(2, 1)

    let Cupom = ""
    let Promo = ""
    let FillDate = ""
    
    const genCupom = ()=>{
      const code = parseInt(moment().format('YYMMDDHHmmssSSS')).toString(16).toUpperCase();
      return code.substr(0,4) + '-' + code.substr(4,4) + '-' + code.substr(8,4)
    }

    if(activatePromotionCell.value==="VERDADEIRO"){
      //todo gerar cupom
      Cupom = genCupom()
      Promo = textPromotionCell.value,
      FillDate = moment().format('DD/MM/YYYY, HH:mm:ss');
      
    }
    
    const payload = await sheet.addRow({ 
      Name: data.Name,
      Email: data.Email,
      Whatsapp: data.Whatsapp,
      Cupom,
      Promo,
      "Fill Date": FillDate,
      Rate: 5
      
    })
    res.send(req.body)
  }
  catch(err){
    console.log(err)
    res.end(err)
  }
}