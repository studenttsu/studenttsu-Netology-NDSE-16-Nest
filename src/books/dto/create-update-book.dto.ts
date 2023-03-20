import { IsEmpty, IsString } from 'class-validator';

export class CreateUpdateBookDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsString()
  authors: string;

  @IsString()
  @IsEmpty()
  fileCover: string;

  @IsString()
  @IsEmpty()
  fileName: string;

  @IsString()
  @IsEmpty()
  fileBook: string;
}
