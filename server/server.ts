// server/server.ts
import express from 'express'
 
const server = express()
 
server.get('/', (req, res) => {
  res.send('Hello from Server')
})
 
server.listen(3000, () => {
  console.log(`Server running on http://localhost:3000`)
})
