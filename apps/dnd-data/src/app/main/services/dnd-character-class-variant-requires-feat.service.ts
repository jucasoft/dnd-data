import {Injectable} from '@angular/core';
import {DndCharacterClassVariantRequiresFeat} from '@models/vo/dnd-character-class-variant-requires-feat';
import {environment} from '../../../environments/environment';
import {DndBaseService} from '@services/dnd-base.service';

@Injectable({
	providedIn: 'root'
})
export class DndCharacterClassVariantRequiresFeatService extends DndBaseService<DndCharacterClassVariantRequiresFeat> {
 public service = environment.webServiceUri;
  public endPoint = 'dnd-character-class-variant-requires-feat';
}
