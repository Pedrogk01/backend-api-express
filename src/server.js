//const express = require('express')
import express from 'express'

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('ola mundo express api')
})

app.get('/user', (req, res) => {
  res.send('exemplo de GET na rota /user')
})

app.post('/user', (req, res) => {
  res.send('exemplo de POST na rota /user')
})

app.put('/user', (req, res) => {
  res.send('exemplo de PUT na rota /user')
})

app.patch('/user', (req, res) => {
  res.send('exemplo de PATCH na rota /user')
})

app.delete('/user', (req, res) => {
  res.send('exemplo de DELETE na rota /user')
})

app.listen(port, () => {
  console.log(`servidor rodando em http://localhost:${port}`)
})
