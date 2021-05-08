import {Injectable} from '@angular/core';
import {SpellBoard} from '@models/vo/spell-board';
import {environment} from '../../../environments/environment';
import {BaseCrudService} from 'ngrx-entity-crud';

@Injectable({
	providedIn: 'root'
})
export class SpellBoardService extends BaseCrudService<SpellBoard> {
	public service = environment.webServiceUri + 'spell-board';
}
