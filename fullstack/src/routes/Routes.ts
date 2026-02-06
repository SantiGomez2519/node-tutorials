import { Router } from 'express';
import { HomeController } from '../controllers/HomeController.js';
import { BookController } from '../controllers/BookController.js';

export default class Routes {
    static initializeRoutes(): Router {
        const router = Router();

        router.get('/', HomeController.index);
        router.get('/about', HomeController.about);
        router.get('/contact', HomeController.contact);

        router.get('/books', BookController.index);
        router.get('/books/:id', BookController.show);

        return router;
    }
}