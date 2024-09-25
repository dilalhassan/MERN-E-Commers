import express from 'express'
import mongoose from 'mongoose';
import bodyParser from 'express'
import userRouter from './Routes/user.js'
import productRouter from './Routes/product.js'
import cartRouter from './Routes/cart.js'
import addressRouter from './Routes/address.js'
import paymentRouter from './Routes/payment.js'
import cors from 'cors';

const app = express();

app.use(bodyParser.json())

app.use(cors({
    origin:true,
    methods:["GET","POST","PUT","DELETE"],
    credentials:true
}))

//home testing route
app.get('/',(req,res) =>res.json({messge:'this is home route'}))

// user Router
app.use('/api/user',userRouter)

// product Router
app.use('/api/product',productRouter)

// csrt Router
app.use('/api/cart',cartRouter)

// address Router
app.use('/api/address',addressRouter)

// payment Router
app.use('/api/payment',paymentRouter)

mongoose.connect(
    "mongodb+srv://dilalhassan123:o1Wypq1FRgOa1bPF@cluster0.s13cy.mongodb.net/",
    {dbName:"MERN-E-Commers"}
).then(() => console.log("MongoDB Connected Succssfully..!")).catch((err)=>console.log(err));

const port = 1000;
app.listen(port, ()=>console.log(`server is runing on port ${port}`))