import {Injectable} from '@angular/core';
import {DndSpecialFeatPrerequisite} from '@models/vo/dnd-special-feat-prerequisite';
import {environment} from '../../../environments/environment';
import {DndBaseService} from '@services/dnd-base.service';

@Injectable({
	providedIn: 'root'
})
export class DndSpecialFeatPrerequisiteService extends DndBaseService<DndSpecialFeatPrerequisite> {
 public service = environment.webServiceUri;
  public endPoint = 'dnd-special-feat-prerequisite';
}
