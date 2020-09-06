
const express = require("express")
const path = require("path")

const config = require("./config/server")

const app = express()

app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => res.render('pages/index'))

app.listen(config.port, () => console.log(`Listening on port ${config.port}.`))