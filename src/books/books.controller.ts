import {Controller, Get} from '@nestjs/common';
import {BooksService} from "./books.service";
import {BookDto} from "./dto/book.dto";

@Controller('books')
export class BooksController {

    constructor(private readonly booksService: BooksService) {}

    @Get()
    getBooks(): Promise<BookDto[]> {
        return this.booksService.getAll();
    }
}
