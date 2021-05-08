import {Injectable} from '@angular/core';
import {Spell} from '@models/vo/spell';
import {environment} from '../../../environments/environment';
import {BaseCrudService} from 'ngrx-entity-crud';

@Injectable({
	providedIn: 'root'
})
export class SpellService extends BaseCrudService<Spell> {
	public service = environment.webServiceUri + 'spell';
}
