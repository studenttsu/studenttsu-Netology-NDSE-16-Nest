import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type BookCommentDocument = HydratedDocument<BookComment>;

@Schema()
export class BookComment {
  @Prop()
  bookId: string;

  @Prop()
  comment: string;
}

export const BookCommentSchema = SchemaFactory.createForClass(BookComment);