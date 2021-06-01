import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import * as actions from './actions';
import {Info} from '@models/vo/info';
import {InfoService} from '@services/info.service';
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
export class InfoStoreEffects {
    constructor(private readonly actions$: Actions, private readonly service: InfoService) {
    }

  searchRequestEffect$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(actions.SearchRequest),
    searchCall<Info>(this.service),
    searchResponse<Info>(actions, {dispatchResponse: false}),
    searchCatchError<Info>(actions),
    repeat()
  ));

  deleteRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteRequest),
    deleteCall<Info>(this.service),
    deleteResponse<Info>(actions, Info, {dispatchResponse: false}),
    deleteCatchError<Info>(actions),
    repeat()
  ));

  deleteManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteManyRequest),
    deleteManyCall<Info>(this.service),
    deleteManyResponse<Info>(actions, Info, {dispatchResponse: false}),
    deleteManyCatchError<Info>(actions),
    repeat()
  ));

  createRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateRequest),
    createCall<Info>(this.service),
    createResponse<Info>(actions, {dispatchResponse: false}),
    createCatchError<Info>(actions),
    repeat()
  ));

  createManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateManyRequest),
    createManyCall<Info>(this.service),
    createManyResponse<Info>(actions, {dispatchResponse: false}),
    createManyCatchError<Info>(actions),
    repeat()
  ));

  editRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditRequest),
    editCall<Info>(this.service),
    editResponse<Info>(actions, {dispatchResponse: false}),
    editCatchError<Info>(actions),
    repeat()
  ));

  editManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditManyRequest),
    editManyCall<Info>(this.service),
    editManyResponse<Info>(actions, {dispatchResponse: false}),
    editManyCatchError<Info>(actions),
    repeat()
  ));

  selectRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.SelectRequest),
    selectCall<Info>(this.service),
    selectResponse<Info>(actions, {dispatchResponse: false}),
    selectCatchError<Info>(actions),
    repeat()
  ));

}
