import {Injectable} from '@angular/core';
import {DndRulebook} from '@models/vo/dnd-rulebook';
import {environment} from '../../../environments/environment';
import {DndBaseService} from '@services/dnd-base.service';

@Injectable({
	providedIn: 'root'
})
export class DndRulebookService extends DndBaseService<DndRulebook> {
 public service = environment.webServiceUri;
  public endPoint = 'dnd-rulebook';
}
