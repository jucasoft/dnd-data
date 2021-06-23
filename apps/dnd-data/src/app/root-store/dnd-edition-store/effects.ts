import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import * as actions from './actions';
import {DndEdition} from '@models/vo/dnd-edition';
import {DndEditionService} from '@services/dnd-edition.service';
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
export class DndEditionStoreEffects {
    constructor(private readonly actions$: Actions, private readonly service: DndEditionService) {
    }

  searchRequestEffect$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(actions.SearchRequest, LoadAppData),
    searchCall<DndEdition>(this.service),
    searchResponse<DndEdition>(actions, {dispatchResponse: false}),
    searchCatchError<DndEdition>(actions),
    repeat()
  ));

  deleteRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteRequest),
    deleteCall<DndEdition>(this.service),
    deleteResponse<DndEdition>(actions, DndEdition, {dispatchResponse: false}),
    deleteCatchError<DndEdition>(actions),
    repeat()
  ));

  deleteManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteManyRequest),
    deleteManyCall<DndEdition>(this.service),
    deleteManyResponse<DndEdition>(actions, DndEdition, {dispatchResponse: false}),
    deleteManyCatchError<DndEdition>(actions),
    repeat()
  ));

  createRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateRequest),
    createCall<DndEdition>(this.service),
    createResponse<DndEdition>(actions, {dispatchResponse: false}),
    createCatchError<DndEdition>(actions),
    repeat()
  ));

  createManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateManyRequest),
    createManyCall<DndEdition>(this.service),
    createManyResponse<DndEdition>(actions, {dispatchResponse: false}),
    createManyCatchError<DndEdition>(actions),
    repeat()
  ));

  editRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditRequest),
    editCall<DndEdition>(this.service),
    editResponse<DndEdition>(actions, {dispatchResponse: false}),
    editCatchError<DndEdition>(actions),
    repeat()
  ));

  editManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditManyRequest),
    editManyCall<DndEdition>(this.service),
    editManyResponse<DndEdition>(actions, {dispatchResponse: false}),
    editManyCatchError<DndEdition>(actions),
    repeat()
  ));

  selectRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.SelectRequest),
    selectCall<DndEdition>(this.service),
    selectResponse<DndEdition>(actions, {dispatchResponse: false}),
    selectCatchError<DndEdition>(actions),
    repeat()
  ));

}
