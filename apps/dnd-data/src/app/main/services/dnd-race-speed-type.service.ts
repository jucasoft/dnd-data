import {Injectable} from '@angular/core';
import {DndRaceSpeedType} from '@models/vo/dnd-race-speed-type';
import {environment} from '../../../environments/environment';
import {DndBaseService} from '@services/dnd-base.service';

@Injectable({
	providedIn: 'root'
})
export class DndRaceSpeedTypeService extends DndBaseService<DndRaceSpeedType> {
 public service = environment.webServiceUri;
  public endPoint = 'dnd-race-speed-type';
}
