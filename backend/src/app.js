const express = require('express');

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

const {
  categoryRouter, productRouter, searchRouter, userRouter,
  loginRouter, comparisonRouter, comparisonProductsRouter,
} = require('./routes');

app.use('/category', categoryRouter);
app.use('/product', productRouter);
app.use('/search', searchRouter);
app.use('/user', userRouter);
app.use('/login', loginRouter);
app.use('/comparison', comparisonRouter);
app.use('/comparison-products', comparisonProductsRouter);

module.exports = app;
