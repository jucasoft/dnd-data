import {Injectable} from '@angular/core';
import {BaseCrudService, ICriteria, Response} from 'ngrx-entity-crud';
import {Observable} from 'rxjs';
import {camelCase} from 'lodash-es'
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DndBaseService<T> extends BaseCrudService<T> {
  public endPoint: string

  search(value?: ICriteria): Observable<Response<T[]>> {
    const filename = `dnd_${camelCase(this.endPoint)}.json`
    console.log(filename)
    return this.http.get(`assets/json/` + filename).pipe(
      map(data => ({data, hasError: false, message: ''})),
    ) as Observable<Response<T[]>>;
  }
}
