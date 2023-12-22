const express=require('express')
require('../src/config/database')
const app=express();

const morgan=require('morgan')

app.use(morgan('tiny'))
const PORT=5000
app.listen(PORT,()=>
{
    console.log(`server is connected to : ${PORT}`)
})