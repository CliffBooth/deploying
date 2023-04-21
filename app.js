import express from 'express'
import { networkInterfaces } from 'os'

const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
  const nets = networkInterfaces();
  const result = Object.keys(nets).map(name => {
  const arr = nets[name].filter(n => n.family === "IPv4" && !n.internal)
    if (arr.length !== 0)
      return {[name]: arr}
  }).filter(r => !!r)
  res.send(JSON.stringify(result));
})


app.listen(PORT, () => console.log(`listenging on ${PORT}`))
