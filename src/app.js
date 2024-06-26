import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import expressLayouts from 'express-ejs-layouts';

const app = express();
const __dirname = path.resolve();

if (process.env.NODE_ENV !== 'production') {
    dotenv.config();
}

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));

app.use(express.static(path.join(__dirname, 'public')));

import indexRouter from './routes/index.js';

app.use('/', indexRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});