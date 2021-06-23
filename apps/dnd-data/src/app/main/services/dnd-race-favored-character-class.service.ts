import {Injectable} from '@angular/core';
import {DndRaceFavoredCharacterClass} from '@models/vo/dnd-race-favored-character-class';
import {environment} from '../../../environments/environment';
import {DndBaseService} from '@services/dnd-base.service';

@Injectable({
	providedIn: 'root'
})
export class DndRaceFavoredCharacterClassService extends DndBaseService<DndRaceFavoredCharacterClass> {
 public service = environment.webServiceUri;
  public endPoint = 'dnd-race-favored-character-class';
}
