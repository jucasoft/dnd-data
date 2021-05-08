import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import * as actions from './actions';
import {SpellMetaInfo} from '@models/vo/spell-meta-info';
import {SpellMetaInfoService} from '@services/spell-meta-info.service';
import {
  createCall, createCatchError, createResponse,
  createManyCall, createManyCatchError, createManyResponse,
  deleteCall, deleteCatchError, deleteResponse,
  deleteManyCall, deleteManyCatchError, deleteManyResponse,
  editCall, editCatchError, editResponse,
  editManyCall, editManyCatchError, editManyResponse,
  searchCall, searchCatchError, searchResponse,
  selectCall, selectCatchError, selectResponse
} from 'ngrx-entity-crud';
import {repeat} from 'rxjs/operators';

@Injectable()
export class SpellMetaInfoStoreEffects {
    constructor(private readonly actions$: Actions, private readonly service: SpellMetaInfoService) {
    }

  searchRequestEffect$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(actions.SearchRequest),
    searchCall<SpellMetaInfo>(this.service),
    searchResponse<SpellMetaInfo>(actions, {dispatchResponse: false}),
    searchCatchError<SpellMetaInfo>(actions),
    repeat()
  ));

  deleteRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteRequest),
    deleteCall<SpellMetaInfo>(this.service),
    deleteResponse<SpellMetaInfo>(actions, SpellMetaInfo, {dispatchResponse: false}),
    deleteCatchError<SpellMetaInfo>(actions),
    repeat()
  ));

  deleteManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteManyRequest),
    deleteManyCall<SpellMetaInfo>(this.service),
    deleteManyResponse<SpellMetaInfo>(actions, SpellMetaInfo, {dispatchResponse: false}),
    deleteManyCatchError<SpellMetaInfo>(actions),
    repeat()
  ));

  createRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateRequest),
    createCall<SpellMetaInfo>(this.service),
    createResponse<SpellMetaInfo>(actions, {dispatchResponse: false}),
    createCatchError<SpellMetaInfo>(actions),
    repeat()
  ));

  createManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateManyRequest),
    createManyCall<SpellMetaInfo>(this.service),
    createManyResponse<SpellMetaInfo>(actions, {dispatchResponse: false}),
    createManyCatchError<SpellMetaInfo>(actions),
    repeat()
  ));

  editRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditRequest),
    editCall<SpellMetaInfo>(this.service),
    editResponse<SpellMetaInfo>(actions, {dispatchResponse: false}),
    editCatchError<SpellMetaInfo>(actions),
    repeat()
  ));

  editManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditManyRequest),
    editManyCall<SpellMetaInfo>(this.service),
    editManyResponse<SpellMetaInfo>(actions, {dispatchResponse: false}),
    editManyCatchError<SpellMetaInfo>(actions),
    repeat()
  ));

  selectRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.SelectRequest),
    selectCall<SpellMetaInfo>(this.service),
    selectResponse<SpellMetaInfo>(actions, {dispatchResponse: false}),
    selectCatchError<SpellMetaInfo>(actions),
    repeat()
  ));

}
