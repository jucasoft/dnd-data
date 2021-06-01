import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import * as actions from './actions';
import {Pg} from '@models/vo/pg';
import {PgService} from '@services/pg.service';
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
export class PgStoreEffects {
    constructor(private readonly actions$: Actions, private readonly service: PgService) {
    }

  searchRequestEffect$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(actions.SearchRequest),
    searchCall<Pg>(this.service),
    searchResponse<Pg>(actions, {dispatchResponse: false}),
    searchCatchError<Pg>(actions),
    repeat()
  ));

  deleteRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteRequest),
    deleteCall<Pg>(this.service),
    deleteResponse<Pg>(actions, Pg, {dispatchResponse: false}),
    deleteCatchError<Pg>(actions),
    repeat()
  ));

  deleteManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteManyRequest),
    deleteManyCall<Pg>(this.service),
    deleteManyResponse<Pg>(actions, Pg, {dispatchResponse: false}),
    deleteManyCatchError<Pg>(actions),
    repeat()
  ));

  createRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateRequest),
    createCall<Pg>(this.service),
    createResponse<Pg>(actions, {dispatchResponse: false}),
    createCatchError<Pg>(actions),
    repeat()
  ));

  createManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateManyRequest),
    createManyCall<Pg>(this.service),
    createManyResponse<Pg>(actions, {dispatchResponse: false}),
    createManyCatchError<Pg>(actions),
    repeat()
  ));

  editRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditRequest),
    editCall<Pg>(this.service),
    editResponse<Pg>(actions, {dispatchResponse: false}),
    editCatchError<Pg>(actions),
    repeat()
  ));

  editManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditManyRequest),
    editManyCall<Pg>(this.service),
    editManyResponse<Pg>(actions, {dispatchResponse: false}),
    editManyCatchError<Pg>(actions),
    repeat()
  ));

  selectRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.SelectRequest),
    selectCall<Pg>(this.service),
    selectResponse<Pg>(actions, {dispatchResponse: false}),
    selectCatchError<Pg>(actions),
    repeat()
  ));

}
