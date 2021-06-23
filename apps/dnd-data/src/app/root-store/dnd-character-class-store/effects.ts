import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import * as actions from './actions';
import {DndCharacterClass} from '@models/vo/dnd-character-class';
import {DndCharacterClassService} from '@services/dnd-character-class.service';
import {createCall, createCatchError, createManyCall, createManyCatchError, createManyResponse, createResponse, deleteCall, deleteCatchError, deleteManyCall, deleteManyCatchError, deleteManyResponse, deleteResponse, editCall, editCatchError, editManyCall, editManyCatchError, editManyResponse, editResponse, searchCall, searchCatchError, searchResponse, selectCall, selectCatchError, selectResponse} from 'ngrx-entity-crud';
import {repeat} from 'rxjs/operators';
import {LoadAppData} from '@root-store/actions';

@Injectable()
export class DndCharacterClassStoreEffects {
  constructor(private readonly actions$: Actions, private readonly service: DndCharacterClassService) {
  }

  searchRequestEffect$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(actions.SearchRequest, LoadAppData),
    searchCall<DndCharacterClass>(this.service),
    searchResponse<DndCharacterClass>(actions, {dispatchResponse: false}),
    searchCatchError<DndCharacterClass>(actions),
    repeat()
  ));

  deleteRequestEffect$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteRequest),
    deleteCall<DndCharacterClass>(this.service),
    deleteResponse<DndCharacterClass>(actions, DndCharacterClass, {dispatchResponse: false}),
    deleteCatchError<DndCharacterClass>(actions),
    repeat()
  ));

  deleteManyRequestEffect$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteManyRequest),
    deleteManyCall<DndCharacterClass>(this.service),
    deleteManyResponse<DndCharacterClass>(actions, DndCharacterClass, {dispatchResponse: false}),
    deleteManyCatchError<DndCharacterClass>(actions),
    repeat()
  ));

  createRequestEffect$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateRequest),
    createCall<DndCharacterClass>(this.service),
    createResponse<DndCharacterClass>(actions, {dispatchResponse: false}),
    createCatchError<DndCharacterClass>(actions),
    repeat()
  ));

  createManyRequestEffect$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateManyRequest),
    createManyCall<DndCharacterClass>(this.service),
    createManyResponse<DndCharacterClass>(actions, {dispatchResponse: false}),
    createManyCatchError<DndCharacterClass>(actions),
    repeat()
  ));

  editRequestEffect$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(actions.EditRequest),
    editCall<DndCharacterClass>(this.service),
    editResponse<DndCharacterClass>(actions, {dispatchResponse: false}),
    editCatchError<DndCharacterClass>(actions),
    repeat()
  ));

  editManyRequestEffect$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(actions.EditManyRequest),
    editManyCall<DndCharacterClass>(this.service),
    editManyResponse<DndCharacterClass>(actions, {dispatchResponse: false}),
    editManyCatchError<DndCharacterClass>(actions),
    repeat()
  ));

  selectRequestEffect$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(actions.SelectRequest),
    selectCall<DndCharacterClass>(this.service),
    selectResponse<DndCharacterClass>(actions, {dispatchResponse: false}),
    selectCatchError<DndCharacterClass>(actions),
    repeat()
  ));

}
