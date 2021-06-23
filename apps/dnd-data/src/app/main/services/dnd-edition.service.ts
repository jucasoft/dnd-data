import {Injectable} from '@angular/core';
import {DndEdition} from '@models/vo/dnd-edition';
import {environment} from '../../../environments/environment';
import {DndBaseService} from '@services/dnd-base.service';

@Injectable({
	providedIn: 'root'
})
export class DndEditionService extends DndBaseService<DndEdition> {
 public service = environment.webServiceUri;
  public endPoint = 'dnd-edition';
}
