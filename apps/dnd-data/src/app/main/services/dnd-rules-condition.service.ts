import {Injectable} from '@angular/core';
import {DndRulesCondition} from '@models/vo/dnd-rules-condition';
import {environment} from '../../../environments/environment';
import {DndBaseService} from '@services/dnd-base.service';

@Injectable({
	providedIn: 'root'
})
export class DndRulesConditionService extends DndBaseService<DndRulesCondition> {
 public service = environment.webServiceUri;
  public endPoint = 'dnd-rules-condition';
}
