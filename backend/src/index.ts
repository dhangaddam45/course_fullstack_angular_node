import dotenv from 'dotenv';
dotenv.config();


import express = require("express");

import './database/index'
import CategoryRoutes from './routes/category.routes';
import { config } from 'process';

const app = express();
const port = process.env.PORT;


app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api/categories',CategoryRoutes);

//api/categories/xyz/abc GET


app.listen(port,() => {
    console.log('server is running on port http://localhost ${port}');
});
