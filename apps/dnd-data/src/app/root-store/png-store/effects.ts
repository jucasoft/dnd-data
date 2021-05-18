import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import * as actions from './actions';
import {Png} from '@models/vo/png';
import {PngService} from '@services/png.service';
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
export class PngStoreEffects {
    constructor(private readonly actions$: Actions, private readonly service: PngService) {
    }

  searchRequestEffect$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(actions.SearchRequest),
    searchCall<Png>(this.service),
    searchResponse<Png>(actions, {dispatchResponse: false}),
    searchCatchError<Png>(actions),
    repeat()
  ));

  deleteRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteRequest),
    deleteCall<Png>(this.service),
    deleteResponse<Png>(actions, Png, {dispatchResponse: false}),
    deleteCatchError<Png>(actions),
    repeat()
  ));

  deleteManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteManyRequest),
    deleteManyCall<Png>(this.service),
    deleteManyResponse<Png>(actions, Png, {dispatchResponse: false}),
    deleteManyCatchError<Png>(actions),
    repeat()
  ));

  createRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateRequest),
    createCall<Png>(this.service),
    createResponse<Png>(actions, {dispatchResponse: false}),
    createCatchError<Png>(actions),
    repeat()
  ));

  createManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateManyRequest),
    createManyCall<Png>(this.service),
    createManyResponse<Png>(actions, {dispatchResponse: false}),
    createManyCatchError<Png>(actions),
    repeat()
  ));

  editRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditRequest),
    editCall<Png>(this.service),
    editResponse<Png>(actions, {dispatchResponse: false}),
    editCatchError<Png>(actions),
    repeat()
  ));

  editManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditManyRequest),
    editManyCall<Png>(this.service),
    editManyResponse<Png>(actions, {dispatchResponse: false}),
    editManyCatchError<Png>(actions),
    repeat()
  ));

  selectRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.SelectRequest),
    selectCall<Png>(this.service),
    selectResponse<Png>(actions, {dispatchResponse: false}),
    selectCatchError<Png>(actions),
    repeat()
  ));

}
