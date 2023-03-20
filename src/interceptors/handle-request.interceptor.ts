import {
  CallHandler,
  ExecutionContext,
  HttpException,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { catchError, map, throwError } from 'rxjs';

@Injectable()
export class HandleRequestInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler) {
    return next.handle().pipe(
      map((value) => ({
        status: 'success',
        data: value,
      })),
      catchError((e) =>
        throwError(
          () =>
            new HttpException(
              {
                status: 'fail',
                data: e?.response ? e.response : e,
              },
              500,
            ),
        ),
      ),
    );
  }
}
