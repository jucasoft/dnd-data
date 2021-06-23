import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import * as actions from './actions';
import {DndSpell} from '@models/vo/dnd-spell';
import {DndSpellService} from '@services/dnd-spell.service';
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
import {LoadAppData} from '@root-store/actions';

@Injectable()
export class DndSpellStoreEffects {
    constructor(private readonly actions$: Actions, private readonly service: DndSpellService) {
    }

  searchRequestEffect$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(actions.SearchRequest, LoadAppData),
    searchCall<DndSpell>(this.service),
    searchResponse<DndSpell>(actions, {dispatchResponse: false}),
    searchCatchError<DndSpell>(actions),
    repeat()
  ));

  deleteRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteRequest),
    deleteCall<DndSpell>(this.service),
    deleteResponse<DndSpell>(actions, DndSpell, {dispatchResponse: false}),
    deleteCatchError<DndSpell>(actions),
    repeat()
  ));

  deleteManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteManyRequest),
    deleteManyCall<DndSpell>(this.service),
    deleteManyResponse<DndSpell>(actions, DndSpell, {dispatchResponse: false}),
    deleteManyCatchError<DndSpell>(actions),
    repeat()
  ));

  createRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateRequest),
    createCall<DndSpell>(this.service),
    createResponse<DndSpell>(actions, {dispatchResponse: false}),
    createCatchError<DndSpell>(actions),
    repeat()
  ));

  createManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateManyRequest),
    createManyCall<DndSpell>(this.service),
    createManyResponse<DndSpell>(actions, {dispatchResponse: false}),
    createManyCatchError<DndSpell>(actions),
    repeat()
  ));

  editRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditRequest),
    editCall<DndSpell>(this.service),
    editResponse<DndSpell>(actions, {dispatchResponse: false}),
    editCatchError<DndSpell>(actions),
    repeat()
  ));

  editManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditManyRequest),
    editManyCall<DndSpell>(this.service),
    editManyResponse<DndSpell>(actions, {dispatchResponse: false}),
    editManyCatchError<DndSpell>(actions),
    repeat()
  ));

  selectRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.SelectRequest),
    selectCall<DndSpell>(this.service),
    selectResponse<DndSpell>(actions, {dispatchResponse: false}),
    selectCatchError<DndSpell>(actions),
    repeat()
  ));

}
