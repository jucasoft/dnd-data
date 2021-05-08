import {Injectable} from '@angular/core';
import {SpellMetaInfo} from '@models/vo/spell-meta-info';
import {environment} from '../../../environments/environment';
import {BaseCrudService} from 'ngrx-entity-crud';

@Injectable({
	providedIn: 'root'
})
export class SpellMetaInfoService extends BaseCrudService<SpellMetaInfo> {
	public service = environment.webServiceUri + 'spell-meta-info';
}
