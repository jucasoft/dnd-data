import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import * as actions from './actions';
import {DndCharacterClassVariant} from '@models/vo/dnd-character-class-variant';
import {DndCharacterClassVariantService} from '@services/dnd-character-class-variant.service';
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
export class DndCharacterClassVariantStoreEffects {
    constructor(private readonly actions$: Actions, private readonly service: DndCharacterClassVariantService) {
    }

  searchRequestEffect$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(actions.SearchRequest, LoadAppData),
    searchCall<DndCharacterClassVariant>(this.service),
    searchResponse<DndCharacterClassVariant>(actions, {dispatchResponse: false}),
    searchCatchError<DndCharacterClassVariant>(actions),
    repeat()
  ));

  deleteRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteRequest),
    deleteCall<DndCharacterClassVariant>(this.service),
    deleteResponse<DndCharacterClassVariant>(actions, DndCharacterClassVariant, {dispatchResponse: false}),
    deleteCatchError<DndCharacterClassVariant>(actions),
    repeat()
  ));

  deleteManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteManyRequest),
    deleteManyCall<DndCharacterClassVariant>(this.service),
    deleteManyResponse<DndCharacterClassVariant>(actions, DndCharacterClassVariant, {dispatchResponse: false}),
    deleteManyCatchError<DndCharacterClassVariant>(actions),
    repeat()
  ));

  createRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateRequest),
    createCall<DndCharacterClassVariant>(this.service),
    createResponse<DndCharacterClassVariant>(actions, {dispatchResponse: false}),
    createCatchError<DndCharacterClassVariant>(actions),
    repeat()
  ));

  createManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateManyRequest),
    createManyCall<DndCharacterClassVariant>(this.service),
    createManyResponse<DndCharacterClassVariant>(actions, {dispatchResponse: false}),
    createManyCatchError<DndCharacterClassVariant>(actions),
    repeat()
  ));

  editRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditRequest),
    editCall<DndCharacterClassVariant>(this.service),
    editResponse<DndCharacterClassVariant>(actions, {dispatchResponse: false}),
    editCatchError<DndCharacterClassVariant>(actions),
    repeat()
  ));

  editManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditManyRequest),
    editManyCall<DndCharacterClassVariant>(this.service),
    editManyResponse<DndCharacterClassVariant>(actions, {dispatchResponse: false}),
    editManyCatchError<DndCharacterClassVariant>(actions),
    repeat()
  ));

  selectRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.SelectRequest),
    selectCall<DndCharacterClassVariant>(this.service),
    selectResponse<DndCharacterClassVariant>(actions, {dispatchResponse: false}),
    selectCatchError<DndCharacterClassVariant>(actions),
    repeat()
  ));

}
