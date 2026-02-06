export class Book {
    constructor(
        private id: number,
        private title: string,
        private category: string,
        private price: number,
        private stock: number
    ) {}

    public static findById(books: Book[], id: number): Book {
        const book = books.find(book => book.id === id);

        if (!book) {
            throw new Error(`Book with id ${id} not found`);
        }
        return book;
    }

    // Getters and Setters
    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getTitle(): string {
        return this.title;
    }

    public setTitle(title: string): void {
        this.title = title;
    }

    public getCategory(): string {
        return this.category;
    }

    public setCategory(category: string): void {
        this.category = category;
    }

    public getPrice(): number {
        return this.price;
    }

    public setPrice(price: number): void {
        this.price = price;
    }

    public getStock(): number {
        return this.stock;
    }

    public setStock(stock: number): void {
        this.stock = stock;
    }
}