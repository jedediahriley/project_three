const express = require('express')
const app = express()
const PORT = 3003

app.listen(PORT, () => {
  console.log('listening to MEP server on ', PORT)
})