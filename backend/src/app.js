const express = require('express');

const cors = require('cors');

const app = express();
app.use(express.json());

app.use(cors());

const {
  categoryRouter, productRouter, searchRouter, userRouter,
} = require('./routes');

app.use('/category', categoryRouter);
app.use('/product', productRouter);
app.use('/search', searchRouter);
app.use('/user', userRouter);

module.exports = app;
