import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import * as actions from './actions';
import {DndCharacterClassVariantRequiresRace} from '@models/vo/dnd-character-class-variant-requires-race';
import {DndCharacterClassVariantRequiresRaceService} from '@services/dnd-character-class-variant-requires-race.service';
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
export class DndCharacterClassVariantRequiresRaceStoreEffects {
    constructor(private readonly actions$: Actions, private readonly service: DndCharacterClassVariantRequiresRaceService) {
    }

  searchRequestEffect$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(actions.SearchRequest, LoadAppData),
    searchCall<DndCharacterClassVariantRequiresRace>(this.service),
    searchResponse<DndCharacterClassVariantRequiresRace>(actions, {dispatchResponse: false}),
    searchCatchError<DndCharacterClassVariantRequiresRace>(actions),
    repeat()
  ));

  deleteRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteRequest),
    deleteCall<DndCharacterClassVariantRequiresRace>(this.service),
    deleteResponse<DndCharacterClassVariantRequiresRace>(actions, DndCharacterClassVariantRequiresRace, {dispatchResponse: false}),
    deleteCatchError<DndCharacterClassVariantRequiresRace>(actions),
    repeat()
  ));

  deleteManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteManyRequest),
    deleteManyCall<DndCharacterClassVariantRequiresRace>(this.service),
    deleteManyResponse<DndCharacterClassVariantRequiresRace>(actions, DndCharacterClassVariantRequiresRace, {dispatchResponse: false}),
    deleteManyCatchError<DndCharacterClassVariantRequiresRace>(actions),
    repeat()
  ));

  createRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateRequest),
    createCall<DndCharacterClassVariantRequiresRace>(this.service),
    createResponse<DndCharacterClassVariantRequiresRace>(actions, {dispatchResponse: false}),
    createCatchError<DndCharacterClassVariantRequiresRace>(actions),
    repeat()
  ));

  createManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateManyRequest),
    createManyCall<DndCharacterClassVariantRequiresRace>(this.service),
    createManyResponse<DndCharacterClassVariantRequiresRace>(actions, {dispatchResponse: false}),
    createManyCatchError<DndCharacterClassVariantRequiresRace>(actions),
    repeat()
  ));

  editRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditRequest),
    editCall<DndCharacterClassVariantRequiresRace>(this.service),
    editResponse<DndCharacterClassVariantRequiresRace>(actions, {dispatchResponse: false}),
    editCatchError<DndCharacterClassVariantRequiresRace>(actions),
    repeat()
  ));

  editManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditManyRequest),
    editManyCall<DndCharacterClassVariantRequiresRace>(this.service),
    editManyResponse<DndCharacterClassVariantRequiresRace>(actions, {dispatchResponse: false}),
    editManyCatchError<DndCharacterClassVariantRequiresRace>(actions),
    repeat()
  ));

  selectRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.SelectRequest),
    selectCall<DndCharacterClassVariantRequiresRace>(this.service),
    selectResponse<DndCharacterClassVariantRequiresRace>(actions, {dispatchResponse: false}),
    selectCatchError<DndCharacterClassVariantRequiresRace>(actions),
    repeat()
  ));

}
