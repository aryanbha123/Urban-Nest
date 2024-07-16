const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors({
  origin:"*"
}));
app.use(bodyParser.json());
app.post('/api/contact', (req, res) => {
  const { name, email, phone, message } = req.body;


  console.log('Received contact form data:', { name, email, phone, message });

  res.status(200).send({ message: 'Message received' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
