// internal imports
import type { BookInterface } from '@/interfaces/BookInterface';
import { useBookStore } from '@/stores/bookstore';
import type { CreateBookDTO } from '@/dtos/CreateBookDTO';

export class BookService {
  static getBooks(): BookInterface[] {
    return useBookStore().books;
  }

  static getUniqueBookCategories(): string[] {
    const books = this.getBooks();
    const categories = books.map((book) => book.category);
    const uniqueCategories = new Set(categories);

    return Array.from(uniqueCategories);
  }

  static getBookById(id: number): BookInterface | undefined {
    return useBookStore().books.find((book) => book.id === id);
  }

  static createBook(book: CreateBookDTO): void {
    const id = useBookStore().books.length + 1;
    useBookStore().books.push({ id, ...book });
  }
}
