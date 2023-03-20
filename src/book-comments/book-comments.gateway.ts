import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { BookCommentsService } from './book-comments.service';
import { CreateBookCommentDto } from './dto/book-comment.dto';

@WebSocketGateway({ cors: true })
export class BookCommentsGateway {
  constructor(private readonly bookCommentsService: BookCommentsService) {}

  @WebSocketServer()
  server: Server;

  @SubscribeMessage('getAllComments')
  getAllComments(@MessageBody() bookId: string) {
    return this.bookCommentsService.findAllBookComment(bookId);
  }

  @SubscribeMessage('addComment')
  addComment(@MessageBody() data: CreateBookCommentDto) {
    return this.bookCommentsService.setCommentToBook(data);
  }
}
