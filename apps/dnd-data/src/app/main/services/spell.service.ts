import {Injectable} from '@angular/core';
import {Spell} from '@models/vo/spell';
import {environment} from '../../../environments/environment';
import {BaseCrudService, OptManyRequest, OptRequest, Response} from 'ngrx-entity-crud';
import {from, Observable, of} from 'rxjs';
import {concatMap, delay, map, mergeMap, toArray} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpellService extends BaseCrudService<Spell> {
  public service = environment.webServiceUri + 'spell';

  createMany(opt: OptManyRequest<Spell>): Observable<Response<Spell[]>> {
    const result = opt.items.map(item => {
      const optB: OptRequest<Spell> = {...opt, item};
      return this.create(optB).pipe(
        map(value => ({...value, data: [value.data]})), // trasformo la singola risposta da {data:T} in {data:T[]}
      );
    });
    return from(result).pipe(
      // delay(100),
      concatMap(value => value),
      // toArray()
    );
  }
}
