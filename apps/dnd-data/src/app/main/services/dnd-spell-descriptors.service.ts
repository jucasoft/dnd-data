import {Injectable} from '@angular/core';
import {DndSpellDescriptors} from '@models/vo/dnd-spell-descriptors';
import {environment} from '../../../environments/environment';
import {DndBaseService} from '@services/dnd-base.service';

@Injectable({
	providedIn: 'root'
})
export class DndSpellDescriptorsService extends DndBaseService<DndSpellDescriptors> {
 public service = environment.webServiceUri;
  public endPoint = 'dnd-spell-descriptors';
}
