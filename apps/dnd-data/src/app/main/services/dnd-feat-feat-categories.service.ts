import {Injectable} from '@angular/core';
import {DndFeatFeatCategories} from '@models/vo/dnd-feat-feat-categories';
import {environment} from '../../../environments/environment';
import {DndBaseService} from '@services/dnd-base.service';

@Injectable({
	providedIn: 'root'
})
export class DndFeatFeatCategoriesService extends DndBaseService<DndFeatFeatCategories> {
 public service = environment.webServiceUri;
  public endPoint = 'dnd-feat-feat-categories';
}
