import express from 'express'

const port = 3000

const app = express()

app.use(express.static('public'))

app.set('view engine', 'pug')

app.get('/', (req:express.Request, res:express.Response): void => {
    res.render('layout')
})


app.listen(port, (): void => {
  console.log(`Listening on port ${port}`)
})
