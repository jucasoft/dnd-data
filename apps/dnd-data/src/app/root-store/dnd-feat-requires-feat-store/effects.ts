import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import * as actions from './actions';
import {DndFeatRequiresFeat} from '@models/vo/dnd-feat-requires-feat';
import {DndFeatRequiresFeatService} from '@services/dnd-feat-requires-feat.service';
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
export class DndFeatRequiresFeatStoreEffects {
    constructor(private readonly actions$: Actions, private readonly service: DndFeatRequiresFeatService) {
    }

  searchRequestEffect$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(actions.SearchRequest, LoadAppData),
    searchCall<DndFeatRequiresFeat>(this.service),
    searchResponse<DndFeatRequiresFeat>(actions, {dispatchResponse: false}),
    searchCatchError<DndFeatRequiresFeat>(actions),
    repeat()
  ));

  deleteRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteRequest),
    deleteCall<DndFeatRequiresFeat>(this.service),
    deleteResponse<DndFeatRequiresFeat>(actions, DndFeatRequiresFeat, {dispatchResponse: false}),
    deleteCatchError<DndFeatRequiresFeat>(actions),
    repeat()
  ));

  deleteManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteManyRequest),
    deleteManyCall<DndFeatRequiresFeat>(this.service),
    deleteManyResponse<DndFeatRequiresFeat>(actions, DndFeatRequiresFeat, {dispatchResponse: false}),
    deleteManyCatchError<DndFeatRequiresFeat>(actions),
    repeat()
  ));

  createRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateRequest),
    createCall<DndFeatRequiresFeat>(this.service),
    createResponse<DndFeatRequiresFeat>(actions, {dispatchResponse: false}),
    createCatchError<DndFeatRequiresFeat>(actions),
    repeat()
  ));

  createManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateManyRequest),
    createManyCall<DndFeatRequiresFeat>(this.service),
    createManyResponse<DndFeatRequiresFeat>(actions, {dispatchResponse: false}),
    createManyCatchError<DndFeatRequiresFeat>(actions),
    repeat()
  ));

  editRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditRequest),
    editCall<DndFeatRequiresFeat>(this.service),
    editResponse<DndFeatRequiresFeat>(actions, {dispatchResponse: false}),
    editCatchError<DndFeatRequiresFeat>(actions),
    repeat()
  ));

  editManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditManyRequest),
    editManyCall<DndFeatRequiresFeat>(this.service),
    editManyResponse<DndFeatRequiresFeat>(actions, {dispatchResponse: false}),
    editManyCatchError<DndFeatRequiresFeat>(actions),
    repeat()
  ));

  selectRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.SelectRequest),
    selectCall<DndFeatRequiresFeat>(this.service),
    selectResponse<DndFeatRequiresFeat>(actions, {dispatchResponse: false}),
    selectCatchError<DndFeatRequiresFeat>(actions),
    repeat()
  ));

}
