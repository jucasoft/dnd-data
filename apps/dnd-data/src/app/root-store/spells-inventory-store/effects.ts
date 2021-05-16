import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import * as actions from './actions';
import {SpellsInventory} from '@models/vo/spells-inventory';
import {SpellsInventoryService} from '@services/spells-inventory.service';
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
export class SpellsInventoryStoreEffects {
    constructor(private readonly actions$: Actions, private readonly service: SpellsInventoryService) {
    }

  searchRequestEffect$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(actions.SearchRequest),
    searchCall<SpellsInventory>(this.service),
    searchResponse<SpellsInventory>(actions, {dispatchResponse: false}),
    searchCatchError<SpellsInventory>(actions),
    repeat()
  ));

  deleteRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteRequest),
    deleteCall<SpellsInventory>(this.service),
    deleteResponse<SpellsInventory>(actions, SpellsInventory, {dispatchResponse: false}),
    deleteCatchError<SpellsInventory>(actions),
    repeat()
  ));

  deleteManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteManyRequest),
    deleteManyCall<SpellsInventory>(this.service),
    deleteManyResponse<SpellsInventory>(actions, SpellsInventory, {dispatchResponse: false}),
    deleteManyCatchError<SpellsInventory>(actions),
    repeat()
  ));

  createRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateRequest),
    createCall<SpellsInventory>(this.service),
    createResponse<SpellsInventory>(actions, {dispatchResponse: false}),
    createCatchError<SpellsInventory>(actions),
    repeat()
  ));

  createManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateManyRequest),
    createManyCall<SpellsInventory>(this.service),
    createManyResponse<SpellsInventory>(actions, {dispatchResponse: false}),
    createManyCatchError<SpellsInventory>(actions),
    repeat()
  ));

  editRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditRequest),
    editCall<SpellsInventory>(this.service),
    editResponse<SpellsInventory>(actions, {dispatchResponse: false}),
    editCatchError<SpellsInventory>(actions),
    repeat()
  ));

  editManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditManyRequest),
    editManyCall<SpellsInventory>(this.service),
    editManyResponse<SpellsInventory>(actions, {dispatchResponse: false}),
    editManyCatchError<SpellsInventory>(actions),
    repeat()
  ));

  selectRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.SelectRequest),
    selectCall<SpellsInventory>(this.service),
    selectResponse<SpellsInventory>(actions, {dispatchResponse: false}),
    selectCatchError<SpellsInventory>(actions),
    repeat()
  ));

}
