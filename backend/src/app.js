const express = require('express');

const cors = require('cors');

const app = express();
app.use(express.json());

app.use(cors());

const {
  categoryRouter, productRouter, searchRouter, userRouter, loginRouter,
} = require('./routes');

app.use('/category', categoryRouter);
app.use('/product', productRouter);
app.use('/search', searchRouter);
app.use('/user', userRouter);
app.use('/login', loginRouter);

module.exports = app;
