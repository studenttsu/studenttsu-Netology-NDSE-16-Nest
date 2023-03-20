import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Book, BookDocument } from "./models/book.schema";
import { CreateUpdateBookDto } from "./dto/create-update-book.dto";

@Injectable()
export class BooksService {

    constructor(
        @InjectModel(Book.name) private bookModel: Model<BookDocument>
    ) {}

    getAll(): Promise<Book[]> {
        return this.bookModel.find().select('-__v');
    }

    getById(bookId): Promise<Book> {
        return this.bookModel.findById(bookId).select('-__v');
    }

    async create(bookDto: CreateUpdateBookDto): Promise<Book> {
        const book = new this.bookModel(bookDto);
        return book.save();
    }

    async update(bookId: string, bookDto: CreateUpdateBookDto): Promise<Book> {
        await this.bookModel.findByIdAndUpdate(bookId, bookDto);
        return this.getById(bookId);
    }

    async remove(bookId: string): Promise<void> {
        await this.bookModel.findByIdAndDelete(bookId);
    }
}
