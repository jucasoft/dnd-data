import {Injectable} from '@angular/core';
import {DndCharacterClassVariantRequiresSkill} from '@models/vo/dnd-character-class-variant-requires-skill';
import {environment} from '../../../environments/environment';
import {DndBaseService} from '@services/dnd-base.service';

@Injectable({
	providedIn: 'root'
})
export class DndCharacterClassVariantRequiresSkillService extends DndBaseService<DndCharacterClassVariantRequiresSkill> {
 public service = environment.webServiceUri;
  public endPoint = 'dnd-character-class-variant-requires-skill';
}
