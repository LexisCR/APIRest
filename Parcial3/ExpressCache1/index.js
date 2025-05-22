import express from 'express'
import apicache from 'apicache'
import redis from 'redis';

let app = express()
let cache = apicache.middleware
const client = redis.createClient();
await client.connect();

app.get('/numero', cache('1 minutes'), (req, res) => {
  let numal = Math.floor(Math.random() * 100);
  console.log('numal', numal);
  res.json({ num: numal })
})

app.listen(3000, () => {
    console.log('Server corriento en 3000');
})