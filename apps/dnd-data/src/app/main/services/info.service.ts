import {Injectable} from '@angular/core';
import {Info} from '@models/vo/info';
import {environment} from '../../../environments/environment';
import {BaseCrudService} from 'ngrx-entity-crud';

@Injectable({
  providedIn: 'root'
})
export class InfoService extends BaseCrudService<Info> {
  public service = environment.webServiceUri + 'info';
}
