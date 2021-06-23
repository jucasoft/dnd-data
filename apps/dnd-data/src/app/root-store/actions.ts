import {createAction, props} from '@ngrx/store';
import {ICriteria} from 'ngrx-entity-crud';

export const LoadAppData = createAction(`[App] Load appData`, props<ICriteria>());
