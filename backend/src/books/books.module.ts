import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';
import { Review } from './entities/review.entity';
import { ReviewsController } from './review.controller';
import { ReviewsService } from './review.service';

@Module({
    imports: [TypeOrmModule.forFeature([Book, Review])],
    controllers: [BooksController, ReviewsController],
    providers: [BooksService, ReviewsService],
})
export class BooksModule {}