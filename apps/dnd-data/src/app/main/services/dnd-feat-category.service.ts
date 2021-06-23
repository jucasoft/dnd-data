import {Injectable} from '@angular/core';
import {DndFeatCategory} from '@models/vo/dnd-feat-category';
import {environment} from '../../../environments/environment';
import {DndBaseService} from '@services/dnd-base.service';

@Injectable({
	providedIn: 'root'
})
export class DndFeatCategoryService extends DndBaseService<DndFeatCategory> {
 public service = environment.webServiceUri;
  public endPoint = 'dnd-feat-category';
}
