import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { APP_INTERCEPTOR } from '@nestjs/core';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { HandleRequestInterceptor } from './core/handle-request.interceptor';
import { BookCommentsModule } from './book-comments/book-comments.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/db'),
    BooksModule,
    BookCommentsModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: HandleRequestInterceptor,
    },
  ],
})
export class AppModule {}
