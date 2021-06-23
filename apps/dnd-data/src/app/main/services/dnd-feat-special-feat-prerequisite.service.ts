import {Injectable} from '@angular/core';
import {DndFeatSpecialFeatPrerequisite} from '@models/vo/dnd-feat-special-feat-prerequisite';
import {environment} from '../../../environments/environment';
import {DndBaseService} from '@services/dnd-base.service';

@Injectable({
	providedIn: 'root'
})
export class DndFeatSpecialFeatPrerequisiteService extends DndBaseService<DndFeatSpecialFeatPrerequisite> {
 public service = environment.webServiceUri;
  public endPoint = 'dnd-feat-special-feat-prerequisite';
}
