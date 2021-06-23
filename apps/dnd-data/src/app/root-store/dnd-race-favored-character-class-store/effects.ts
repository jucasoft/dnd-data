import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import * as actions from './actions';
import {DndRaceFavoredCharacterClass} from '@models/vo/dnd-race-favored-character-class';
import {DndRaceFavoredCharacterClassService} from '@services/dnd-race-favored-character-class.service';
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
export class DndRaceFavoredCharacterClassStoreEffects {
    constructor(private readonly actions$: Actions, private readonly service: DndRaceFavoredCharacterClassService) {
    }

  searchRequestEffect$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(actions.SearchRequest, LoadAppData),
    searchCall<DndRaceFavoredCharacterClass>(this.service),
    searchResponse<DndRaceFavoredCharacterClass>(actions, {dispatchResponse: false}),
    searchCatchError<DndRaceFavoredCharacterClass>(actions),
    repeat()
  ));

  deleteRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteRequest),
    deleteCall<DndRaceFavoredCharacterClass>(this.service),
    deleteResponse<DndRaceFavoredCharacterClass>(actions, DndRaceFavoredCharacterClass, {dispatchResponse: false}),
    deleteCatchError<DndRaceFavoredCharacterClass>(actions),
    repeat()
  ));

  deleteManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteManyRequest),
    deleteManyCall<DndRaceFavoredCharacterClass>(this.service),
    deleteManyResponse<DndRaceFavoredCharacterClass>(actions, DndRaceFavoredCharacterClass, {dispatchResponse: false}),
    deleteManyCatchError<DndRaceFavoredCharacterClass>(actions),
    repeat()
  ));

  createRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateRequest),
    createCall<DndRaceFavoredCharacterClass>(this.service),
    createResponse<DndRaceFavoredCharacterClass>(actions, {dispatchResponse: false}),
    createCatchError<DndRaceFavoredCharacterClass>(actions),
    repeat()
  ));

  createManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateManyRequest),
    createManyCall<DndRaceFavoredCharacterClass>(this.service),
    createManyResponse<DndRaceFavoredCharacterClass>(actions, {dispatchResponse: false}),
    createManyCatchError<DndRaceFavoredCharacterClass>(actions),
    repeat()
  ));

  editRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditRequest),
    editCall<DndRaceFavoredCharacterClass>(this.service),
    editResponse<DndRaceFavoredCharacterClass>(actions, {dispatchResponse: false}),
    editCatchError<DndRaceFavoredCharacterClass>(actions),
    repeat()
  ));

  editManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditManyRequest),
    editManyCall<DndRaceFavoredCharacterClass>(this.service),
    editManyResponse<DndRaceFavoredCharacterClass>(actions, {dispatchResponse: false}),
    editManyCatchError<DndRaceFavoredCharacterClass>(actions),
    repeat()
  ));

  selectRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.SelectRequest),
    selectCall<DndRaceFavoredCharacterClass>(this.service),
    selectResponse<DndRaceFavoredCharacterClass>(actions, {dispatchResponse: false}),
    selectCatchError<DndRaceFavoredCharacterClass>(actions),
    repeat()
  ));

}
