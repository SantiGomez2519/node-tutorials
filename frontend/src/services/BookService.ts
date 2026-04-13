// external imports
import axios from 'axios';

// internal imports
import type { BookInterface } from '@/interfaces/BookInterface';
import type { CreateBookDTO } from '@/dtos/CreateBookDTO.js';

export class BookService {
  private static readonly API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';
  private static readonly API_URL = `${this.API_BASE_URL}/api/books`;

  public static async getBooks(): Promise<BookInterface[]> {
    const { data } = await axios.get(this.API_URL);
    return data;
  }

  public static async getBookById(id: number): Promise<BookInterface> {
    const { data } = await axios.get(`${this.API_URL}/${id}`);
    return data;
  }

  public static async createBook(book: CreateBookDTO): Promise<BookInterface> {
    const { data } = await axios.post(this.API_URL, book);
    return data;
  }
}
