import {Injectable} from '@angular/core';
import {DndFeatRequiresFeat} from '@models/vo/dnd-feat-requires-feat';
import {environment} from '../../../environments/environment';
import {DndBaseService} from '@services/dnd-base.service';

@Injectable({
	providedIn: 'root'
})
export class DndFeatRequiresFeatService extends DndBaseService<DndFeatRequiresFeat> {
 public service = environment.webServiceUri;
  public endPoint = 'dnd-feat-requires-feat';
}
