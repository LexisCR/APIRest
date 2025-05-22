import express from 'express'
import redis from 'redis';

let app = express()
const client = redis.createClient();
await client.connect();

app.get('/numero',async (req, res) => {
  const cachedo = await client.get('numeroAleatorio');
  if(cachedo) {return res.json({numeroAleaotrio: Number(cachedo), cacheado: true});}

  const numeroAleatorio = Math.floor(Math.random() * 100);
  await client.set('numeroAleatorio', numeroAleatorio.toString(), {EX: 15});
  res.json({numeroAleatorio, cachedo: false});
})

app.listen(3000, () => {
    console.log('Server corriento en 3000');
})