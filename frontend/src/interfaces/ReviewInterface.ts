export interface ReviewInterface {
  id: number;
  rating: number;
  comment: string;
  author: string;
  createdAt: Date;

  // relations
  bookId: number;
}
