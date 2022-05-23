const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.all('*', (req, res) => {
  return res.status(404).send({ err: 'Page not found' });
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
