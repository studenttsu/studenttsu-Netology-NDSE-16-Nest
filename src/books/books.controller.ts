import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateUpdateBookDto } from './dto/create-update-book.dto';
import { Book } from './models/book.schema';
import { IdValidationPipe } from './book-id-validation-pipe.service';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  getBooks(): Promise<Book[]> {
    return this.booksService.getAll();
  }

  @Get(':id')
  getBook(@Param('id', IdValidationPipe) id: string): Promise<Book> {
    return this.booksService.getById(id);
  }

  @Post()
  create(@Body() bookDto: CreateUpdateBookDto): Promise<Book> {
    return this.booksService.create(bookDto);
  }

  @Put(':id')
  update(
    @Param('id', IdValidationPipe) id: string,
    @Body() bookDto: CreateUpdateBookDto,
  ): Promise<Book> {
    return this.booksService.update(id, bookDto);
  }

  @Delete(':id')
  remove(@Param('id', IdValidationPipe) id: string): Promise<void> {
    return this.booksService.remove(id);
  }
}
