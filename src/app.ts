import express from 'express';
import dotenv from 'dotenv';
dotenv.config({path: '.env'});
import bodyParser from 'body-parser';
import { connectDB } from './config/db';
import { getAllCustomers } from './controllers/customer.controller';
const app = express();

app.use(bodyParser.json());

(async() => {
  await connectDB();
  getAllCustomers();
})();

app.listen(process.env.PORT, () => console.log(`Server is listening on PORT ${process.env.PORT}`))