import {Injectable} from '@angular/core';
import {SpellsInventory} from '@models/vo/spells-inventory';
import {environment} from '../../../environments/environment';
import {BaseCrudService} from 'ngrx-entity-crud';

@Injectable({
	providedIn: 'root'
})
export class SpellsInventoryService extends BaseCrudService<SpellsInventory> {
	public service = environment.webServiceUri + 'spells-inventory';
}
