import express from 'express'

const app = express()

type Fn = () => void

interface Params {
  a: number
  b: number
}

type Add = (x: Params) => number

const add: Add = (x) => {
  return x.a + x.b
}

app.get('/', (req, res) => {
  add({ a: 1, b: 2 })
  res.send('<h1>Hola</h1>')
})

app.listen(3001, () => {
  console.log('started!')
})
