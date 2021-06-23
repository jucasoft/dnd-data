import {Injectable} from '@angular/core';
import {DndSpell} from '@models/vo/dnd-spell';
import {environment} from '../../../environments/environment';
import {DndBaseService} from '@services/dnd-base.service';

@Injectable({
	providedIn: 'root'
})
export class DndSpellService extends DndBaseService<DndSpell> {
 public service = environment.webServiceUri;
  public endPoint = 'dnd-spell';
}
