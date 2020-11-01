import {GoogleSpreadsheet} from 'google-spreadsheet';
import moment from 'moment';
const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID)



export default async (req, res)=>{

  try{
    await doc.useServiceAccountAuth({
      client_email: process.env.SHEET_CLIENT_EMAIL,
      private_key: fromBase64(process.env.SHEET_PRIVATE_KEY)
    })
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
    
      await sheet.addRow({ 
      Name: data.Name,
      Email: data.Email,
      Whatsapp: data.Whatsapp,
      Cupom,
      Promo,
      "Fill Date": FillDate,
      Rate: parseInt(data.Rate)
      
    })
    
    res.send(JSON.stringify({
      showCupom: Cupom !== '',
      Cupom,
      Promo
    }))
  }
  catch(err){
    console.log(err)
    res.end(err)
  }
}