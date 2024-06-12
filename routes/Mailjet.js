// import Mailjet from "node-mailjet"
// // const Mailjet = require("node-mailjet")
// const mailjet = Mailjet.apiConnect(
//     import.meta.env.MAILJET_API_KEY,
//     import.meta.env.MAILJET_SECRET_KEY
// )
// const sendMail = async(sender,name,message)=>{
//     try {
//         const request = mailjet
//                     .post("send",{version:"v3.1"})
//                     .request({
//                         Messages:[
//                             {
//                                 From:{
//                                     Email:sender,
//                                     Name:name
//                                 },
//                             To:[
//                                 {
//                                     Email:"szheng.persevere@gmail.com",
//                                     Name:"you"
//                                 }
//                             ],
//                             Subject:"Customer Question",
//                                 TextPart:message,
//                             }
//                         ]
//                     })
//                     const result = await request
//                     res.json(result.body)
//     } catch (e) {
//         console.log(e)
//     }
// }

// export default sendMail