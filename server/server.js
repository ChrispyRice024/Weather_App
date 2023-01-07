const express = require('express')
const app = express()
const PORT = 3001
const routes = require('./routes')

// parses the incoming JSON request(req) and puts it it the req.body(puts the data into the server)
app.use(express.json())

// converts the URL into ASCII character set
app.use(express.urlencoded({extended: true}));

// allows the server to use the controller routes
app.use(routes)

app.listen(PORT, () => {
    console.log('Server Running on Port 3001')
})