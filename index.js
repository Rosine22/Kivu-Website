import dotenv from 'dotenv'
dotenv.config();
import swaggerUi from 'swagger-ui-express'
import express from 'express'
const app = express()
import mongoose from 'mongoose'
import router from './routes/contact.routes.js'
import routes from './routes/user.routes.js'
import cookieParser from "cookie-parser";
import ErrorHandler from './Middlewares/ErrorHandler.js'

import swagger from "./docs/swagger.json" assert {type:"json"}
//const port = 3000
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded());
app.use("/api/contact",router)
app.use("/api/v1/user" , routes)
app.use(cookieParser()) 

mongoose.connect("mongodb://localhost:27017/Kivu-Shore")
try{
    console.log("DB connected")
    app.listen(process.env.PORT,()=>{
        console.log(`server running on port ${process.env.PORT}`);
    })

}catch(err){
    console.log(err)
}


app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swagger))

app.use(ErrorHandler);