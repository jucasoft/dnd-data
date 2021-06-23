import {Injectable} from '@angular/core';
import {DndLanguage} from '@models/vo/dnd-language';
import {environment} from '../../../environments/environment';
import {DndBaseService} from '@services/dnd-base.service';

@Injectable({
	providedIn: 'root'
})
export class DndLanguageService extends DndBaseService<DndLanguage> {
 public service = environment.webServiceUri;
  public endPoint = 'dnd-language';
}
