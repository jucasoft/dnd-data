import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import * as actions from './actions';
import {DndSpellClassLevel} from '@models/vo/dnd-spell-class-level';
import {DndSpellClassLevelService} from '@services/dnd-spell-class-level.service';
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
export class DndSpellClassLevelStoreEffects {
    constructor(private readonly actions$: Actions, private readonly service: DndSpellClassLevelService) {
    }

  searchRequestEffect$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(actions.SearchRequest, LoadAppData),
    searchCall<DndSpellClassLevel>(this.service),
    searchResponse<DndSpellClassLevel>(actions, {dispatchResponse: false}),
    searchCatchError<DndSpellClassLevel>(actions),
    repeat()
  ));

  deleteRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteRequest),
    deleteCall<DndSpellClassLevel>(this.service),
    deleteResponse<DndSpellClassLevel>(actions, DndSpellClassLevel, {dispatchResponse: false}),
    deleteCatchError<DndSpellClassLevel>(actions),
    repeat()
  ));

  deleteManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteManyRequest),
    deleteManyCall<DndSpellClassLevel>(this.service),
    deleteManyResponse<DndSpellClassLevel>(actions, DndSpellClassLevel, {dispatchResponse: false}),
    deleteManyCatchError<DndSpellClassLevel>(actions),
    repeat()
  ));

  createRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateRequest),
    createCall<DndSpellClassLevel>(this.service),
    createResponse<DndSpellClassLevel>(actions, {dispatchResponse: false}),
    createCatchError<DndSpellClassLevel>(actions),
    repeat()
  ));

  createManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateManyRequest),
    createManyCall<DndSpellClassLevel>(this.service),
    createManyResponse<DndSpellClassLevel>(actions, {dispatchResponse: false}),
    createManyCatchError<DndSpellClassLevel>(actions),
    repeat()
  ));

  editRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditRequest),
    editCall<DndSpellClassLevel>(this.service),
    editResponse<DndSpellClassLevel>(actions, {dispatchResponse: false}),
    editCatchError<DndSpellClassLevel>(actions),
    repeat()
  ));

  editManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditManyRequest),
    editManyCall<DndSpellClassLevel>(this.service),
    editManyResponse<DndSpellClassLevel>(actions, {dispatchResponse: false}),
    editManyCatchError<DndSpellClassLevel>(actions),
    repeat()
  ));

  selectRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.SelectRequest),
    selectCall<DndSpellClassLevel>(this.service),
    selectResponse<DndSpellClassLevel>(actions, {dispatchResponse: false}),
    selectCatchError<DndSpellClassLevel>(actions),
    repeat()
  ));

}
