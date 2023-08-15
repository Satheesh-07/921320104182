const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 8008;

app.use(express.json());

app.get('/numbers', async (req, res) => {
  const urls = req.query.url;

  if (!urls || !Array.isArray(urls)) {
    return res.status(400).json({ error: 'Invalid URLs' });
  }

  const fetchPromises = urls.map(async (url) => {
    try {
      const response = await axios.get(url, { timeout: 500 });
      return response.data.numbers;
    } catch (error) {
      return [];
    }
  });

  const allNumbers = await Promise.all(fetchPromises);
  const mergedNumbers = [...new Set(allNumbers.flat())].sort((a, b) => a - b);

  res.json({ numbers: mergedNumbers });
});

app.listen(PORT, () => {
  console.log(`Microservice is running on port ${PORT}`);
});
