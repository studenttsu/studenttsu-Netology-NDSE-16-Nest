export interface BookCommentDto {
  id: string
  bookId: string;
  comment: string;
}

export type CreateBookCommentDto = Omit<BookCommentDto, 'id'>;
