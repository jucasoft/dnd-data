import {Injectable} from '@angular/core';
import {DndTextFeatPrerequisite} from '@models/vo/dnd-text-feat-prerequisite';
import {environment} from '../../../environments/environment';
import {DndBaseService} from '@services/dnd-base.service';

@Injectable({
	providedIn: 'root'
})
export class DndTextFeatPrerequisiteService extends DndBaseService<DndTextFeatPrerequisite> {
 public service = environment.webServiceUri;
  public endPoint = 'dnd-text-feat-prerequisite';
}
