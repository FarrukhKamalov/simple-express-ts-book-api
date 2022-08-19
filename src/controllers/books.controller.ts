import { Request, Response } from "express";
import { resolve } from "path";
interface IBook {
    id: number,
    title: string,
    author: string
}


var books: IBook[] = [
    {
        id: 1,
        title: "Folder Structure Book",
        author: "Kamalov Farrukh"
    },
    {
        id: 2,
        title: "Clean Code",
        author: "James Joyce"
    }
]



export default class BookController {
  public  getAll(req: Request, res: Response) {
        try{
            res.json(books);
        }
        catch(err){
            res.json({error: err})
        }
    }
   public singleGetIdBook(req: Request, res: Response)  {
        try{  
            const id: number  = parseInt(req.params.id);
            const book = books.find(book => book.id == id);
            res.json(book);
        }catch(err){
            res.json({error: err})
        }
    }
    public addBook(req: Request, res: Response){
        try{
            const book  = {
                id: books.length + 1,
                title: req.body.title,
                author: req.body.author
            }
            books.push(book);
            res.json(books)
        }
        catch(err){
            res.json({error: err})
        }
    }
    public deleteBook(req: Request, res: Response){

        try{
            const id = parseInt(req.params.id);
            let bookIdFind = books.findIndex(book =>{
                return book.id == id;
            });
            if(bookIdFind !== -1){
                books.splice(bookIdFind, 1);
            }
            res.json({book_deleted: id})
        }
        catch(err){    
            res.json({error: err})
        }
    }
}
