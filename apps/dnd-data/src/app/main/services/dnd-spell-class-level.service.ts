import {Injectable} from '@angular/core';
import {DndSpellClassLevel} from '@models/vo/dnd-spell-class-level';
import {environment} from '../../../environments/environment';
import {DndBaseService} from '@services/dnd-base.service';

@Injectable({
	providedIn: 'root'
})
export class DndSpellClassLevelService extends DndBaseService<DndSpellClassLevel> {
 public service = environment.webServiceUri;
  public endPoint = 'dnd-spell-class-level';
}
