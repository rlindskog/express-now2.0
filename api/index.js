const express = require('express')

const app = express()


app.get('/api', (req, res) => {
  res.json({ message: 'welcome to the api' })
})

app.get('/api/hello', (req, res) => {
  res.json({ hello: 'world' })
})

app.listen(process.env.PORT || 3000)
