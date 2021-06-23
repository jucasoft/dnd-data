import {Injectable} from '@angular/core';
import {DndCharacterClassVariant} from '@models/vo/dnd-character-class-variant';
import {environment} from '../../../environments/environment';
import {DndBaseService} from '@services/dnd-base.service';

@Injectable({
	providedIn: 'root'
})
export class DndCharacterClassVariantService extends DndBaseService<DndCharacterClassVariant> {
  public service = environment.webServiceUri;
  public endPoint = 'dnd-character-class-variant';
}
