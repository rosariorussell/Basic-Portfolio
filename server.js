const express = require('express')
const path = require('path')

var app = express()

var mainPath = path.join(path.dirname(require.main.filename))

var PORT = process.env.PORT || 3000
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
  res.sendFile(mainPath + '/public/main.html')
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})
