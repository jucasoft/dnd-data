import {Injectable} from '@angular/core';
import {DndSpellSchool} from '@models/vo/dnd-spell-school';
import {environment} from '../../../environments/environment';
import {DndBaseService} from '@services/dnd-base.service';

@Injectable({
	providedIn: 'root'
})
export class DndSpellSchoolService extends DndBaseService<DndSpellSchool> {
 public service = environment.webServiceUri;
  public endPoint = 'dnd-spell-school';
}
