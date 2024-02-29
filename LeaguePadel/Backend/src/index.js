const express = require('express')
const server= express()
const morgan = require('morgan')
const router = require('./Routes/iRouetes')
//settings
server.set('port',process.env.PORT || 3000)
server.set('json spaces', 2)
//middleweres

//routes
server.use(router)

server.use(morgan('dev'))
server.use(express.json())
// server.use(express.urlencoded({extended:false}))

server.listen(3000,()=>{
    console.log(`Server on port ${server.set('port')}`)
})