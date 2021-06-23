import {Injectable} from '@angular/core';
import {DndRace} from '@models/vo/dnd-race';
import {environment} from '../../../environments/environment';
import {DndBaseService} from '@services/dnd-base.service';

@Injectable({
	providedIn: 'root'
})
export class DndRaceService extends DndBaseService<DndRace> {
 public service = environment.webServiceUri;
  public endPoint = 'dnd-race';
}
