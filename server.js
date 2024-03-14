import express from 'express'
import fetch from 'node-fetch'

const app = express() 

const port = 8080
const server = app.listen(port, () => {
    console.log(`server started on localhost:${port}`)
})

app.get("/todos", async (req,res) => {
    res.status(200).json({success:true, message:"Hello, it works"})
})

app.get("/health", (req,res) => {
    res.status(200).json({success:true, message: "Hello, this is a health check"})
})