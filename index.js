const http = require('http')
const express = require('express')
const user = require('./routes/route_user')
const store = require('./routes/route_store')
const inventory = require('./routes/route_invetory')

app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/auth',user)
app.use('/api/store',store)
app.use('/api/inventory',inventory)
  

  app.listen(process.env.PORT || 3002, () => {
    console.log(`Server running at PORT: ${3000}`);
  });