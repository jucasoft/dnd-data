import {Injectable} from '@angular/core';
import {DndRaceAutomaticLanguage} from '@models/vo/dnd-race-automatic-language';
import {environment} from '../../../environments/environment';
import {DndBaseService} from '@services/dnd-base.service';

@Injectable({
	providedIn: 'root'
})
export class DndRaceAutomaticLanguageService extends DndBaseService<DndRaceAutomaticLanguage> {
 public service = environment.webServiceUri;
  public endPoint = 'dnd-race-automatic-language';
}
