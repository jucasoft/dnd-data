import {Injectable} from '@angular/core';
import {DndCharacterClassVariantRequiresRace} from '@models/vo/dnd-character-class-variant-requires-race';
import {environment} from '../../../environments/environment';
import {DndBaseService} from '@services/dnd-base.service';

@Injectable({
	providedIn: 'root'
})
export class DndCharacterClassVariantRequiresRaceService extends DndBaseService<DndCharacterClassVariantRequiresRace> {
 public service = environment.webServiceUri;
  public endPoint = 'dnd-character-class-variant-requires-race';
}
