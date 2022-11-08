const userModel = require("./model")
const createModel = require("./itemModel")
const jwt = require("jsonwebtoken")
const nodemailer = require("nodemailer")
var smtpTransport = require('nodemailer-smtp-transport');
//const bcrypt= require("bcrypt")

const userCreation = async (req, res) => {
  try{
  let data = req.body
  


//   let mailTransporter = nodemailer.createTransport(smtpTransport({
//     service: 'gmail',
//     host:'smtp.ethereal.email',
//     secure: false,
//     port:587,
//     auth: {
//         user: "dibakardey15@gmail.com",
//         pass: "ewhmzjpmbedbopty",
//     //     authentication: 'plain',
//     // enable_starttls_auto: true
//     }
// }));
  
// let mailDetails = {
//     from: 'dibakardey15@gmail.com',
//     to: data.Email,
//     subject: 'pawan bhaiya stay safe',
  
//    text:`get well soon.we miss u  ❤❤❤, this is the password ${data.password}`
// };
 
//  await mailTransporter.sendMail(mailDetails, function(err, data) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });

  


  let createData = await userModel.create(data)
  return res.status(201).send({ msg: createData })
}

catch(err){
  res.status(500).send(err)
}}

const userLogin = async (req, res) => {
  try {
    console.log(req.body);
    let data = req.body
    let { email, password } = data
    let findMail = await userModel.findOne({ email: email, password: password })
    if (!findMail)
      return res.status(404).send({ msg: "enter the correct email" })
    //if(email.length==0) return res.status.send({msg:"enter the email"})
    // let encryptedPassword = findMail.password
    // let passwordCheck = await bcrypt.compare(passworrd,encryptedPassword)

    // if(!passwordCheck)
    //            return res.status(401).send({status:false,message:"Password is NOT Correct"});

    const userId = findMail._id;
    const type = findMail.type
    const token = jwt.sign({
      userId: userId,
      exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60 // expirydate =24 hours 
    },
      "simplify3x")

    return res.status(200).send({ status: true, message: "User login successfull", data: type })
  }
  catch (err) { 
    console.log(err)
    return res.status(500).send(err.message) 
  }
}

const getUser= async(req,res)=>{
  try{
  let allData = await userModel.find()

  return res.status(200).send(allData)
  }
  catch(err){res.status(500).send(err.msg)}

}

const deleteUser= async(req,res)=>{
  
  try{let userId = req.params.id
  //let {id}= data
  console.log(userId)
  let getData = await userModel.findByIdAndDelete(userId)
  res.status(200).send({msg:`user has been deleted with the id of ${userId}`})
  }
  catch(err){ res.status(500).send(err.msg)}
}


const updateUser=async(req,res)=>{
 try{ let data = req.body
   let findData = await userModel.findOne({Email:data.Email})
  if(!findData) return res.status(400).send({msg:"invalid email"})
  let updateData = await userModel.findOneAndUpdate({_id:findData._id},{$set:req.body},{new:true})

  return res.status(201).send({success: true,msg:"data has been updated",updateData})
 }
 catch(err) {return res.status(500).send({msg:err.msg})}
}

// let updateUser = (req, res) => {
//   return new Promise((reject, resolve) => {
//     let data = req.body;
//     userModel.findOne({Email: data.Email}, (err, data1) => {
//       if(err) {
//         res.status(500).send(err.msg)
//         reject();
//       } 
//       else{
//         userModel.updateMany({_id:data1._id}, {$set:req.body}, (err, data2) => {
//           if(err) {
//             res.status(500).send(err.msg)
//             reject();
//           }else{
//             res.status(500).send({msg:"err.msg"});
//             resolve()
//           }
//         })
//       }
//     })
//   })
// }






//..............................for item creation api............................................


const createItem = async(req,res)=>{
  try{let data = req.body
    console.log(data)
  const createData = await createModel.create(data)
  res.status(201).send(createData)
}
catch(err){res.status(500).send(err.message)}
}


const getItems= async(req,res)=>{
 try{ let allData=await createModel.find()
  return res.status(200).send(allData)
}
catch(err){res.status(500).send(err.msg)}

}

const deleteItems= async(req,res)=>{
  
  try{let itemId = req.params.id
  //let {id}= data
 
  let getData = await createModel.findByIdAndDelete({_id:itemId})
  res.status(200).send({msg:`item has been deleted with the id of ${itemId}`})
  }
  catch(err){ res.status(500).send(err.msg)}
}


const updateItems=async(req,res)=>{
 try{ let data = req.body
  console.log(data)
  
  let updateData = await createModel.findOneAndUpdate({_id:data._id},{$set:req.body},{new:true})

  return res.status(201).send({success: true,msg:"data has been updated",updateData})
 }
 catch(err) {return res.status(500).send({msg:err.msg})}
}


module.exports.userCreation = userCreation
module.exports.userLogin = userLogin
module.exports.getUser= getUser
module.exports.deleteUser= deleteUser
module.exports.updateUser= updateUser

module.exports.createItem= createItem
module.exports.getItems= getItems
module.exports.deleteItems= deleteItems
module.exports.updateItems= updateItems
