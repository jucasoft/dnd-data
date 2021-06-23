import {Injectable} from '@angular/core';
import {DndRaceType} from '@models/vo/dnd-race-type';
import {environment} from '../../../environments/environment';
import {DndBaseService} from '@services/dnd-base.service';

@Injectable({
	providedIn: 'root'
})
export class DndRaceTypeService extends DndBaseService<DndRaceType> {
 public service = environment.webServiceUri;
  public endPoint = 'dnd-race-type';
}
