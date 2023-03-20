import {
  CallHandler,
  ExecutionContext,
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
        throwError(() => ({
          status: 'fail',
          data: e,
        })),
      ),
    );
  }
}
