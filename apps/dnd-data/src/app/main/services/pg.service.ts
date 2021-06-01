import {Injectable} from '@angular/core';
import {Pg} from '@models/vo/pg';
import {environment} from '../../../environments/environment';
import {BaseCrudService} from 'ngrx-entity-crud';

@Injectable({
  providedIn: 'root'
})
export class PgService extends BaseCrudService<Pg> {
  public service = environment.webServiceUri + 'pg';
  getId = Pg.selectId
}
