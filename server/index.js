const express = require('express')  // same as import with react but has to be used like this with require

const app = express()     //this is how to set up express server 

const ctrl = require('./controller')

const SERVER_PORT = 4000      // must be in all caps like its typed never go lower then 3001

app.use(express.json())       

app.get('/api/jason', (req, res) => {
  res.status(200).send('Jason')
})

app.get('/api/users', ctrl.getAllUsers)

app.get('/api/user/:user_id', ctrl.getUserById)

app.listen(SERVER_PORT, () => console.log(`server running on port ${SERVER_PORT}`)) // need to do this to run express and it knows use nodemon server/index.js





