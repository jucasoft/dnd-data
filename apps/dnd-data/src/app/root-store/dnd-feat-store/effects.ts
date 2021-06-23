import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import * as actions from './actions';
import {DndFeat} from '@models/vo/dnd-feat';
import {DndFeatService} from '@services/dnd-feat.service';
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
export class DndFeatStoreEffects {
    constructor(private readonly actions$: Actions, private readonly service: DndFeatService) {
    }

  searchRequestEffect$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(actions.SearchRequest, LoadAppData),
    searchCall<DndFeat>(this.service),
    searchResponse<DndFeat>(actions, {dispatchResponse: false}),
    searchCatchError<DndFeat>(actions),
    repeat()
  ));

  deleteRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteRequest),
    deleteCall<DndFeat>(this.service),
    deleteResponse<DndFeat>(actions, DndFeat, {dispatchResponse: false}),
    deleteCatchError<DndFeat>(actions),
    repeat()
  ));

  deleteManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteManyRequest),
    deleteManyCall<DndFeat>(this.service),
    deleteManyResponse<DndFeat>(actions, DndFeat, {dispatchResponse: false}),
    deleteManyCatchError<DndFeat>(actions),
    repeat()
  ));

  createRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateRequest),
    createCall<DndFeat>(this.service),
    createResponse<DndFeat>(actions, {dispatchResponse: false}),
    createCatchError<DndFeat>(actions),
    repeat()
  ));

  createManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateManyRequest),
    createManyCall<DndFeat>(this.service),
    createManyResponse<DndFeat>(actions, {dispatchResponse: false}),
    createManyCatchError<DndFeat>(actions),
    repeat()
  ));

  editRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditRequest),
    editCall<DndFeat>(this.service),
    editResponse<DndFeat>(actions, {dispatchResponse: false}),
    editCatchError<DndFeat>(actions),
    repeat()
  ));

  editManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditManyRequest),
    editManyCall<DndFeat>(this.service),
    editManyResponse<DndFeat>(actions, {dispatchResponse: false}),
    editManyCatchError<DndFeat>(actions),
    repeat()
  ));

  selectRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.SelectRequest),
    selectCall<DndFeat>(this.service),
    selectResponse<DndFeat>(actions, {dispatchResponse: false}),
    selectCatchError<DndFeat>(actions),
    repeat()
  ));

}
