import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Book, BookSchema } from './models/book.schema';
import { IdValidationPipe } from './book-id-validation-pipe.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Book.name, schema: BookSchema }]),
  ],
  providers: [BooksService, IdValidationPipe],
  controllers: [BooksController],
})
export class BooksModule {}
