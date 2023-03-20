import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class IdValidationPipe implements PipeTransform {
  transform(value: string) {
    if (!value || value.length !== 24) {
      throw new BadRequestException('Ошибка валидации');
    }

    return value;
  }
}
