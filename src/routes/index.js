const { Router } = require('express')

const UserController = require('../controllers/UserController')

const routes = Router()

routes.get('/', (req, res) => {
  res.send('Olá Mundo')
})

routes.post('/users', UserController.createUser)
routes.get('/users')

routes.get('/users/:user_id')

routes.post('/login')

routes.post('/products/:user_id')
routes.get('/products/:user_id')
routes.patch('/products/:user_id/:product-id')
routes.delete('/products/:user_id/:product-id')

routes.get('/products')
routes.get('/products/:product_id')

routes.post('/cart/:user_id')
routes.get('/cart/:user_id')

routes.post('/cart/:user_id/:user_id')


module.exports = routes 