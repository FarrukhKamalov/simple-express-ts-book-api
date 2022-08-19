import express from "express";
import bookController from '../controllers/books.controller'
const router = express.Router();
const book = new bookController()

router.get('/', book.getAll);
router.get('/:id', book.singleGetIdBook);
router.post('/', book.addBook) 
router.delete('/:id', book.deleteBook);


export default router;