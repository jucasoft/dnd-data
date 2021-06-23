import {Injectable} from '@angular/core';
import {DndRaceSize} from '@models/vo/dnd-race-size';
import {environment} from '../../../environments/environment';
import {DndBaseService} from '@services/dnd-base.service';

@Injectable({
	providedIn: 'root'
})
export class DndRaceSizeService extends DndBaseService<DndRaceSize> {
 public service = environment.webServiceUri;
  public endPoint = 'dnd-race-size';
}
