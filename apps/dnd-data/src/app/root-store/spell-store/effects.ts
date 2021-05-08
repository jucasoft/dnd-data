import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import * as actions from './actions';
import {Spell} from '@models/vo/spell';
import {SpellService} from '@services/spell.service';
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
export class SpellStoreEffects {
    constructor(private readonly actions$: Actions, private readonly service: SpellService) {
    }

  searchRequestEffect$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(actions.SearchRequest),
    searchCall<Spell>(this.service),
    searchResponse<Spell>(actions, {dispatchResponse: false}),
    searchCatchError<Spell>(actions),
    repeat()
  ));

  deleteRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteRequest),
    deleteCall<Spell>(this.service),
    deleteResponse<Spell>(actions, Spell, {dispatchResponse: false}),
    deleteCatchError<Spell>(actions),
    repeat()
  ));

  deleteManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteManyRequest),
    deleteManyCall<Spell>(this.service),
    deleteManyResponse<Spell>(actions, Spell, {dispatchResponse: false}),
    deleteManyCatchError<Spell>(actions),
    repeat()
  ));

  createRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateRequest),
    createCall<Spell>(this.service),
    createResponse<Spell>(actions, {dispatchResponse: false}),
    createCatchError<Spell>(actions),
    repeat()
  ));

  createManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateManyRequest),
    createManyCall<Spell>(this.service),
    createManyResponse<Spell>(actions, {dispatchResponse: false}),
    createManyCatchError<Spell>(actions),
    repeat()
  ));

  editRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditRequest),
    editCall<Spell>(this.service),
    editResponse<Spell>(actions, {dispatchResponse: false}),
    editCatchError<Spell>(actions),
    repeat()
  ));

  editManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditManyRequest),
    editManyCall<Spell>(this.service),
    editManyResponse<Spell>(actions, {dispatchResponse: false}),
    editManyCatchError<Spell>(actions),
    repeat()
  ));

  selectRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.SelectRequest),
    selectCall<Spell>(this.service),
    selectResponse<Spell>(actions, {dispatchResponse: false}),
    selectCatchError<Spell>(actions),
    repeat()
  ));

}
