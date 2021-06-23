import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import * as actions from './actions';
import {DndCharacterClassVariantRequiresFeat} from '@models/vo/dnd-character-class-variant-requires-feat';
import {DndCharacterClassVariantRequiresFeatService} from '@services/dnd-character-class-variant-requires-feat.service';
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
export class DndCharacterClassVariantRequiresFeatStoreEffects {
    constructor(private readonly actions$: Actions, private readonly service: DndCharacterClassVariantRequiresFeatService) {
    }

  searchRequestEffect$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(actions.SearchRequest, LoadAppData),
    searchCall<DndCharacterClassVariantRequiresFeat>(this.service),
    searchResponse<DndCharacterClassVariantRequiresFeat>(actions, {dispatchResponse: false}),
    searchCatchError<DndCharacterClassVariantRequiresFeat>(actions),
    repeat()
  ));

  deleteRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteRequest),
    deleteCall<DndCharacterClassVariantRequiresFeat>(this.service),
    deleteResponse<DndCharacterClassVariantRequiresFeat>(actions, DndCharacterClassVariantRequiresFeat, {dispatchResponse: false}),
    deleteCatchError<DndCharacterClassVariantRequiresFeat>(actions),
    repeat()
  ));

  deleteManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteManyRequest),
    deleteManyCall<DndCharacterClassVariantRequiresFeat>(this.service),
    deleteManyResponse<DndCharacterClassVariantRequiresFeat>(actions, DndCharacterClassVariantRequiresFeat, {dispatchResponse: false}),
    deleteManyCatchError<DndCharacterClassVariantRequiresFeat>(actions),
    repeat()
  ));

  createRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateRequest),
    createCall<DndCharacterClassVariantRequiresFeat>(this.service),
    createResponse<DndCharacterClassVariantRequiresFeat>(actions, {dispatchResponse: false}),
    createCatchError<DndCharacterClassVariantRequiresFeat>(actions),
    repeat()
  ));

  createManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateManyRequest),
    createManyCall<DndCharacterClassVariantRequiresFeat>(this.service),
    createManyResponse<DndCharacterClassVariantRequiresFeat>(actions, {dispatchResponse: false}),
    createManyCatchError<DndCharacterClassVariantRequiresFeat>(actions),
    repeat()
  ));

  editRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditRequest),
    editCall<DndCharacterClassVariantRequiresFeat>(this.service),
    editResponse<DndCharacterClassVariantRequiresFeat>(actions, {dispatchResponse: false}),
    editCatchError<DndCharacterClassVariantRequiresFeat>(actions),
    repeat()
  ));

  editManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditManyRequest),
    editManyCall<DndCharacterClassVariantRequiresFeat>(this.service),
    editManyResponse<DndCharacterClassVariantRequiresFeat>(actions, {dispatchResponse: false}),
    editManyCatchError<DndCharacterClassVariantRequiresFeat>(actions),
    repeat()
  ));

  selectRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.SelectRequest),
    selectCall<DndCharacterClassVariantRequiresFeat>(this.service),
    selectResponse<DndCharacterClassVariantRequiresFeat>(actions, {dispatchResponse: false}),
    selectCatchError<DndCharacterClassVariantRequiresFeat>(actions),
    repeat()
  ));

}
