import express from 'express'

let app = express()

app.use(express.static('public'))

app.get('/', (request, response) => response.send("yapyapyap"))

app.listen(3000)
