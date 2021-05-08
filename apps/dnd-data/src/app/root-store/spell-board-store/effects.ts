import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import * as actions from './actions';
import {SpellBoard} from '@models/vo/spell-board';
import {SpellBoardService} from '@services/spell-board.service';
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
export class SpellBoardStoreEffects {
    constructor(private readonly actions$: Actions, private readonly service: SpellBoardService) {
    }

  searchRequestEffect$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(actions.SearchRequest),
    searchCall<SpellBoard>(this.service),
    searchResponse<SpellBoard>(actions, {dispatchResponse: false}),
    searchCatchError<SpellBoard>(actions),
    repeat()
  ));

  deleteRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteRequest),
    deleteCall<SpellBoard>(this.service),
    deleteResponse<SpellBoard>(actions, SpellBoard, {dispatchResponse: false}),
    deleteCatchError<SpellBoard>(actions),
    repeat()
  ));

  deleteManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteManyRequest),
    deleteManyCall<SpellBoard>(this.service),
    deleteManyResponse<SpellBoard>(actions, SpellBoard, {dispatchResponse: false}),
    deleteManyCatchError<SpellBoard>(actions),
    repeat()
  ));

  createRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateRequest),
    createCall<SpellBoard>(this.service),
    createResponse<SpellBoard>(actions, {dispatchResponse: false}),
    createCatchError<SpellBoard>(actions),
    repeat()
  ));

  createManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateManyRequest),
    createManyCall<SpellBoard>(this.service),
    createManyResponse<SpellBoard>(actions, {dispatchResponse: false}),
    createManyCatchError<SpellBoard>(actions),
    repeat()
  ));

  editRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditRequest),
    editCall<SpellBoard>(this.service),
    editResponse<SpellBoard>(actions, {dispatchResponse: false}),
    editCatchError<SpellBoard>(actions),
    repeat()
  ));

  editManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditManyRequest),
    editManyCall<SpellBoard>(this.service),
    editManyResponse<SpellBoard>(actions, {dispatchResponse: false}),
    editManyCatchError<SpellBoard>(actions),
    repeat()
  ));

  selectRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.SelectRequest),
    selectCall<SpellBoard>(this.service),
    selectResponse<SpellBoard>(actions, {dispatchResponse: false}),
    selectCatchError<SpellBoard>(actions),
    repeat()
  ));

}
