const express = require('express')
const dotenv=require('dotenv')
const cors=require('cors')
const auth=require('./route/AuthRoute')
const Trans=require('./route/TransRoute')
const db = require('./config/database')
const path=require('path')
dotenv.config({
    path:"./config/.env"
})
const app = express()
db()
app.use(cors())
app.use(express.json())

app.use(express.static("build"))
app.use('/Upload',express.static(path.join(__dirname,"Upload")))
app.use('/', auth)
app.use('/', Trans)

app.listen(process.env.PORT || 5000, () => console.log(`Example app listening on port ${process.env.PORT}!`))