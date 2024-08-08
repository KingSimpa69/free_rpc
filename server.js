const express = require('express');
const axios = require('axios');
const rpcs = require('./RPCS.json')

let currentIndex = 0;

const getNextRpcUrl = () => {
  const url = rpcs[currentIndex];
  currentIndex = (currentIndex + 1) % rpcs.length;
  return url;
}

const app = express();
app.use(express.json());

app.post('/', async (req, res) => {
  const rpcUrl = getNextRpcUrl();
  try {
    const response = await axios.post(rpcUrl, req.body, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    res.json(response.data);
  } catch (error) {
    console.log(`Error making a request to ${rpcUrl}`)
    res.status(500).json({ error: 'Failed to forward the request' });
  } finally {
    console.log(`request made to ${rpcUrl}`)
  }
});

app.get('/', (req, res) => {
    res.json({
      message: 'RPC load balancer is running. Use POST requests with JSON-RPC payloads.',
      endpoints: rpcs.length,
      currentIndex: currentIndex
    });
  });

const PORT = process.env.PORT || 6969;
app.listen(PORT, () => {
  console.log(`Virtual RPC is running on port ${PORT}`);
});
