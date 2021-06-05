const PORT = process.env.PORT || 5000;
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// Routes

app.use('/api', require('./routes/authRouter'));

const URI = process.env.MONGO_URL;

mongoose.connect(
  URI,
  {
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
  (err) => {
    if (err) throw err;
    app.listen(PORT, () => {
      console.log('Connected to DB,', 'Server running on port:', PORT);
    });
  }
);

app.get('/', (req, res) => {
  res.json({ msg: 'hello there' });
});
