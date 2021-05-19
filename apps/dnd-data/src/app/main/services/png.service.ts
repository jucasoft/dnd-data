import {Injectable} from '@angular/core';
import {Png} from '@models/vo/png';
import {environment} from '../../../environments/environment';
import {BaseCrudService} from 'ngrx-entity-crud';

@Injectable({
  providedIn: 'root'
})
export class PngService extends BaseCrudService<Png> {
  public service = environment.webServiceUri + 'png';
  getId = Png.selectId
}
