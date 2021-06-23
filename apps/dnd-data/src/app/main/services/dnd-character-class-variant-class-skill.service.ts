import {Injectable} from '@angular/core';
import {DndCharacterClassVariantClassSkill} from '@models/vo/dnd-character-class-variant-class-skill';
import {environment} from '../../../environments/environment';
import {DndBaseService} from '@services/dnd-base.service';

@Injectable({
	providedIn: 'root'
})
export class DndCharacterClassVariantClassSkillService extends DndBaseService<DndCharacterClassVariantClassSkill> {
 public service = environment.webServiceUri;
  public endPoint = 'dnd-character-class-variant-class-skill';
}
