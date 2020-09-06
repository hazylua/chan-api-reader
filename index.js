
const express = require("express")
const path = require("path")

const config = require("./config/server")

express()
    .use(express.static(path.join(__dirname, 'public')))
    .set('views', path.join(__dirname, 'views'))
    .get('/', (req, res) => res.render('pages/index'))
    .listen(config.port, () => console.log(`Listening on port ${config.port}.`))