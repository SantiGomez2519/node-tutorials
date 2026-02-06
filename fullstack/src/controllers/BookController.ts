import type { Request, Response } from 'express';
import { books } from '../data/Books.js';
import { Book } from '../models/Book.js';

export class BookController {
    
    static index(req: Request, res: Response): void {
        const viewData: { [key: string]: any } = {};
        viewData["books"] = books;

        res.render("book/index", { viewData: viewData });
    }

    static show(req: Request, res: Response): void {
        const book = Book.findById(books, parseInt(req.params.id as string));
        
        const viewData: { [key: string]: any } = {};
        viewData["book"] = book;

        res.render("book/show", { viewData: viewData });
    }
}