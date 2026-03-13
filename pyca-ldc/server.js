const express = require('express')
const app = express()
const port = 3000 

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/landing.html")
})

app.get('/apps/ocr-qa-v1', (req, res) => {
  res.sendFile(__dirname + "/apps/ocr_qa-v1/ocr-verify.html")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
