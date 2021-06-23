import {Injectable} from '@angular/core';
import {DndFeat} from '@models/vo/dnd-feat';
import {environment} from '../../../environments/environment';
import {DndBaseService} from '@services/dnd-base.service';

@Injectable({
	providedIn: 'root'
})
export class DndFeatService extends DndBaseService<DndFeat> {
 public service = environment.webServiceUri;
  public endPoint = 'dnd-feat';
}
