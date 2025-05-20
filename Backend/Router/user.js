const express = require("express") ; 
const zod = require("zod") ; 
const { User } = require("../db");
const userRouter = express.Router() ; 


const signUpBody = zod.object({
   username : zod.string().email() ,
   firstname : zod.string() ,
   lastname : zod.string() ,
   password : zod.string()
})

userRouter.post("/signup" , async (req,res)=>{

  // verifying use into 
  const parsedData = signUpBody.safeParse(req.body) ; 

  if(!parsedData.success){
    res.status(400).json({
      message : "Validarestion failed" , 
      error : parsedData.error.errors 
    })
  }


  // checking if user already don't exist 
  const existingUser = await User.findOne({username : body.req.username })

})

