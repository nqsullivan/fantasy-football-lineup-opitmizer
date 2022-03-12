import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import teamRoutes from './routes/mainRoutes.js'
import userRoutes from './routes/users.js'


const app = express();
dotenv.config();

app.use( bodyParser.json({ limit: "30mb", extended: true }));
app.use( bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use( cors() );

app.use( '/user', userRoutes );

app.use( '/team', teamRoutes );

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`)))
    .catch((error) => console.log(`${error} did not connect`));


mongoose.set('useFindAndModify', false);