import { Module } from '@nestjs/common';
import { BookCommentsService } from './book-comments.service';
import { BookCommentsGateway } from './book-comments.gateway';

@Module({
  providers: [BookCommentsService, BookCommentsGateway]
})
export class BookCommentsModule {}
