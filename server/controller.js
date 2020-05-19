const users = require('../data.json')

let id = users[users.length - 1].id + 1

module.exports = {
  getAllUsers: (req, res) => {
    const {email} = req.query

    if(email){
      const filteredUser = users.filter(elem => elem.email.includes(email))
      res.status(200).send(filteredUser)
    }else {
      res.status(200).send(users)
    }

  },

  getUserById: (req, res) => {
    // req.params.user_id
    const{user_id} = req.params
    const user = users.find(element => element.id === +user_id)

    if(user){
      res.status(200).send(user)
    }else {
      res.status(404).send('user not found')
    }
  },

  creatUser: (req, res) => {
    const {first_name, last_name, email} = req.body

    const newUser = {id, first_name, last_name, email}
    users.push(newUser)

    id++

    res.status(200).send(users)
  },

  editUser: (req, res) => {
    const {user_id} = req.params
    const {first_name, last_name, email} = req.body

    const index = users.findIndex(elem => elem.id === +user_id) // need to add a + to make it a number 

    if(index === -1){ // findIndex will return -1 if nothing is found
      return res.status(404).send('user not found')
    }

    // const updatedUser = {id: +user_id, first_name, last_name, email}

    const updatedUser = {
      id: +user_id,
      first_name: first_name || users[index].first_name,
      last_name: last_name || users[index].last_name,
      email: email || users[index].email,
    }

    users[index] = updatedUser

    res.status(200).send(users)
  },

  deleteUser: (req, res) => {
    const {user_id} = req.params

    const index = users.findIndex(e => e.id === +user_id)

    if(index === -1)
    return res.status(404).send('user not found')

    users.splice(index, 1)
    
    res.status(200).send(users)
  }

}