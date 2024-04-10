const express = require('express');
const productRouter =require('./routers/productRouter');
const userRouter =require('./routers/userRouter');
const sellerRouter =require('./routers/sellerRouter');
const contactRouter =require('./routers/contactRouter');
const utilRouter =require('./routers/utilRouter');
const reviewRouter =require('./routers/reviewRouter');  
const cors = require('cors');
const app= express();
const port = 5000;

app.use(cors({
    origin: ['http://localhost:3000']
}));

app.use(express.json());

app.use('/product',productRouter);
app.use('/user',userRouter);
app.use('/seller',sellerRouter);
app.use('/review',reviewRouter);
app.use('/contact',contactRouter);
app.use('/util',utilRouter)

app.use(express.static('./static/uploads'));

app.listen(port, ()=>{console.log('server strted'); } );