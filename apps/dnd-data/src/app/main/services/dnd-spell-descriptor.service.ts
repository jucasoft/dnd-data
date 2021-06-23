import {Injectable} from '@angular/core';
import {DndSpellDescriptor} from '@models/vo/dnd-spell-descriptor';
import {environment} from '../../../environments/environment';
import {DndBaseService} from '@services/dnd-base.service';

@Injectable({
	providedIn: 'root'
})
export class DndSpellDescriptorService extends DndBaseService<DndSpellDescriptor> {
 public service = environment.webServiceUri;
  public endPoint = 'dnd-spell-descriptor';
}
