const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT
const num = 10;
const num2= 20;

app.listen(port, () => console.log(`server is running on port ${port}`))

