import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import * as actions from './actions';
import {DndFeatCategory} from '@models/vo/dnd-feat-category';
import {DndFeatCategoryService} from '@services/dnd-feat-category.service';
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
export class DndFeatCategoryStoreEffects {
    constructor(private readonly actions$: Actions, private readonly service: DndFeatCategoryService) {
    }

  searchRequestEffect$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(actions.SearchRequest, LoadAppData),
    searchCall<DndFeatCategory>(this.service),
    searchResponse<DndFeatCategory>(actions, {dispatchResponse: false}),
    searchCatchError<DndFeatCategory>(actions),
    repeat()
  ));

  deleteRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteRequest),
    deleteCall<DndFeatCategory>(this.service),
    deleteResponse<DndFeatCategory>(actions, DndFeatCategory, {dispatchResponse: false}),
    deleteCatchError<DndFeatCategory>(actions),
    repeat()
  ));

  deleteManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteManyRequest),
    deleteManyCall<DndFeatCategory>(this.service),
    deleteManyResponse<DndFeatCategory>(actions, DndFeatCategory, {dispatchResponse: false}),
    deleteManyCatchError<DndFeatCategory>(actions),
    repeat()
  ));

  createRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateRequest),
    createCall<DndFeatCategory>(this.service),
    createResponse<DndFeatCategory>(actions, {dispatchResponse: false}),
    createCatchError<DndFeatCategory>(actions),
    repeat()
  ));

  createManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateManyRequest),
    createManyCall<DndFeatCategory>(this.service),
    createManyResponse<DndFeatCategory>(actions, {dispatchResponse: false}),
    createManyCatchError<DndFeatCategory>(actions),
    repeat()
  ));

  editRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditRequest),
    editCall<DndFeatCategory>(this.service),
    editResponse<DndFeatCategory>(actions, {dispatchResponse: false}),
    editCatchError<DndFeatCategory>(actions),
    repeat()
  ));

  editManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditManyRequest),
    editManyCall<DndFeatCategory>(this.service),
    editManyResponse<DndFeatCategory>(actions, {dispatchResponse: false}),
    editManyCatchError<DndFeatCategory>(actions),
    repeat()
  ));

  selectRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.SelectRequest),
    selectCall<DndFeatCategory>(this.service),
    selectResponse<DndFeatCategory>(actions, {dispatchResponse: false}),
    selectCatchError<DndFeatCategory>(actions),
    repeat()
  ));

}
