const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');

app.use(express.json());
mongoose.connect('mongodb://localhost:27017/app_store', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(_ => console.log('Database connection'))
    .catch(err => console.log('Database connection error' + err));

app.use(express.static(path.join(__dirname, 'public')))
const typeRouter = require('./routers/type_router');
const productRouter = require('./routers/product_router');
const categoryRouter = require('./routers/category_router');
const producerRouter = require('./routers/producer_router');
const userRouter = require('./routers/user_router');



app.use('/users', userRouter);
app.use('/products', productRouter);
app.use('/types', typeRouter);
app.use('/categories', categoryRouter);
app.use('/producers', producerRouter);

app.listen(3000, () => {
    console.log('App listening from 3000 port');
});