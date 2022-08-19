import express, {Request, Response, NextFunction} from 'express';
import bookRouter from './routes/books';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api/books", bookRouter)

const PORT = process.env.PORT ||  3000;
app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`);
})