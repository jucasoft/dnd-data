import {Injectable} from '@angular/core';
import {DndRaceBonusLanguage} from '@models/vo/dnd-race-bonus-language';
import {environment} from '../../../environments/environment';
import {DndBaseService} from '@services/dnd-base.service';

@Injectable({
	providedIn: 'root'
})
export class DndRaceBonusLanguageService extends DndBaseService<DndRaceBonusLanguage> {
 public service = environment.webServiceUri;
  public endPoint = 'dnd-race-bonus-language';
}
