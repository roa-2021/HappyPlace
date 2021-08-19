const express = require('express')
const hbs  = require('express-handlebars')

//if you are going to add routes do it in routes.js
const routes = require('./routes')


const server = express()

server.use(express.static('public'))
server.engine('hbs', hbs({ extname: 'hbs' }))
server.set('view engine', 'hbs')

server.use('/', routes)

module.exports = server