import express from 'express'
import bodyParser from 'body-parser'
import * as auth from './auth'

const port = 3000

const app = express()

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.set('view engine', 'pug')

app.get('/', (req: express.Request, res: express.Response): void => {
  res.render('layout')
})
app.get('/sign-in', (req: express.Request, res: express.Response): void => {
  res.render('sign_in')
})
app.get('/sign-up', (req: express.Request, res: express.Response): void => {
  res.render('sign_up')
})

app.post('/sign-in/auth', auth.signIn)
app.post('/sign-up/auth', auth.signUp)

app.listen(port, (): void => {
  console.log(`Listening on port ${port}`)
})
