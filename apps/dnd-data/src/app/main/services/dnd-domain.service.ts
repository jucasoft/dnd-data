import {Injectable} from '@angular/core';
import {DndDomain} from '@models/vo/dnd-domain';
import {environment} from '../../../environments/environment';
import {DndBaseService} from '@services/dnd-base.service';

@Injectable({
	providedIn: 'root'
})
export class DndDomainService extends DndBaseService<DndDomain> {
 public service = environment.webServiceUri;
  public endPoint = 'dnd-domain';
}
