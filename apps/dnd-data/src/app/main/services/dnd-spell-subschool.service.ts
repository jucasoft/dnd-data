import {Injectable} from '@angular/core';
import {DndSpellSubschool} from '@models/vo/dnd-spell-subschool';
import {environment} from '../../../environments/environment';
import {DndBaseService} from '@services/dnd-base.service';

@Injectable({
	providedIn: 'root'
})
export class DndSpellSubschoolService extends DndBaseService<DndSpellSubschool> {
 public service = environment.webServiceUri;
  public endPoint = 'dnd-spell-subschool';
}
