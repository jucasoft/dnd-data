import {Injectable} from '@angular/core';
import {DndCharacterClass} from '@models/vo/dnd-character-class';
import {environment} from '../../../environments/environment';
import {DndBaseService} from '@services/dnd-base.service';

@Injectable({
  providedIn: 'root'
})
export class DndCharacterClassService extends DndBaseService<DndCharacterClass> {
  public service = environment.webServiceUri;
  public endPoint = 'dnd-character-class';
}
