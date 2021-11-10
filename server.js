const express = require('express')
const app = express()
const path = require('path')
require('dotenv').config()



app.use(express.static(path.join(__dirname + '/public')))


//  Error handling
app.use((req, res) => {
    res.status(404)
    res.sendFile(path.join(__dirname + '/public/404.html'))

})

const PORT = process.env.PORT || 8888
app.listen(PORT, function() {
    console.log(`Listening on port ${PORT}`)
})