import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {CallHandler, ExecutionContext, NestInterceptor} from '@nestjs/common';
import {map} from 'rxjs/operators';

export interface Response<T> {
  data: T;
}

@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<T, Response<T>> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<Response<T>> {
    //TODO: escludo dalla rotta graphql la trasformazione della risposta.
    if ((context as any).contextType === 'graphql') {
      return next.handle();
    } else {
      return next.handle().pipe(map(data => ({data})));
    }
  }
}
