import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import teamRoutes from './routes/mainRoutes.js'


const app = express();
dotenv.config();



app.use(bodyParser.json({limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());


app.use('/team', teamRoutes);

const PORT = 5000;
const CONNECTION_URL = process.env.CONNECTION_URL;

mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(5000, () => console.log(`Server running on port: http://localhost:${PORT}`)))
    .catch((error) => console.log(`${error} did not connect`));


export default CONNECTION_URL;