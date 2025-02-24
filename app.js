const express = require("express")
const app=express()

const port = 3000
app.get('/', (req, res)=>{
    res.send('<h1>Hello sem7<h>')
})

app.listen(3000, ()=>{
    console.log(`app runnnig at port: ${port}`)
})