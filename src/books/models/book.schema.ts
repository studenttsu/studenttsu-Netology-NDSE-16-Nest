import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BookDocument = HydratedDocument<Book>;

@Schema()
export class Book {
    @Prop({ isRequired: true })
    title: string;

    @Prop()
    description: number;

    @Prop({ isRequired: true })
    authors: string;

    @Prop()
    fileCover: string;

    @Prop()
    fileName: string;

    @Prop()
    fileBook: string;
}

export const BookSchema = SchemaFactory.createForClass(Book);