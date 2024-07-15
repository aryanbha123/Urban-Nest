const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());
app.post('/api/contact', (req, res) => {
  const { name, email, phone, message } = req.body;

  // Here you would typically handle the data (e.g., save it to a database or send an email)
  console.log('Received contact form data:', { name, email, phone, message });

  res.status(200).send({ message: 'Message received' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
