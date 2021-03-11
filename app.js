const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Aizon\'s B.E Server Here. How may I help you?')
})

app.get('/customers', (req, res) => {
  res.send('Hello Customers!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})