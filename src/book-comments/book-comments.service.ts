import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BookComment, BookCommentDocument } from './models/book-comment.schema';
import { CreateBookCommentDto } from './dto/book-comment.dto';

@Injectable()
export class BookCommentsService {
  constructor(
    @InjectModel(BookComment.name)
    private bookCommentModel: Model<BookCommentDocument>,
  ) {}

  setCommentToBook(data: CreateBookCommentDto): Promise<BookCommentDocument> {
    const entity = new this.bookCommentModel(data);
    return entity.save();
  }

  async removeComment(id: string): Promise<void> {
    await this.bookCommentModel.findByIdAndDelete(id);
  }

  updateComment(id: string, comment: string): Promise<BookCommentDocument> {
    return this.bookCommentModel.findByIdAndUpdate(id, { comment });
  }

  findAllBookComment(id: string): Promise<BookCommentDocument[]> {
    return this.bookCommentModel.find({ bookId: id });
  }
}
