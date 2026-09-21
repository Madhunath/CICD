const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({
    status: "success",
    message: "🚀 Hello World! I have tried Github actions with this repo!",
    timestamp: new Date()
  });
});

app.get('/health', (req, res) => {
  res.status(200).send("OK");
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

module.exports = app;
