import {Injectable} from '@angular/core';
import {DndRaceSpeed} from '@models/vo/dnd-race-speed';
import {environment} from '../../../environments/environment';
import {DndBaseService} from '@services/dnd-base.service';

@Injectable({
	providedIn: 'root'
})
export class DndRaceSpeedService extends DndBaseService<DndRaceSpeed> {
 public service = environment.webServiceUri;
  public endPoint = 'dnd-race-speed';
}
