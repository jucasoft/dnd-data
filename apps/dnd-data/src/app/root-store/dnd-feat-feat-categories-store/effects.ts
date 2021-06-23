import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import * as actions from './actions';
import {DndFeatFeatCategories} from '@models/vo/dnd-feat-feat-categories';
import {DndFeatFeatCategoriesService} from '@services/dnd-feat-feat-categories.service';
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
export class DndFeatFeatCategoriesStoreEffects {
    constructor(private readonly actions$: Actions, private readonly service: DndFeatFeatCategoriesService) {
    }

  searchRequestEffect$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(actions.SearchRequest, LoadAppData),
    searchCall<DndFeatFeatCategories>(this.service),
    searchResponse<DndFeatFeatCategories>(actions, {dispatchResponse: false}),
    searchCatchError<DndFeatFeatCategories>(actions),
    repeat()
  ));

  deleteRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteRequest),
    deleteCall<DndFeatFeatCategories>(this.service),
    deleteResponse<DndFeatFeatCategories>(actions, DndFeatFeatCategories, {dispatchResponse: false}),
    deleteCatchError<DndFeatFeatCategories>(actions),
    repeat()
  ));

  deleteManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteManyRequest),
    deleteManyCall<DndFeatFeatCategories>(this.service),
    deleteManyResponse<DndFeatFeatCategories>(actions, DndFeatFeatCategories, {dispatchResponse: false}),
    deleteManyCatchError<DndFeatFeatCategories>(actions),
    repeat()
  ));

  createRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateRequest),
    createCall<DndFeatFeatCategories>(this.service),
    createResponse<DndFeatFeatCategories>(actions, {dispatchResponse: false}),
    createCatchError<DndFeatFeatCategories>(actions),
    repeat()
  ));

  createManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateManyRequest),
    createManyCall<DndFeatFeatCategories>(this.service),
    createManyResponse<DndFeatFeatCategories>(actions, {dispatchResponse: false}),
    createManyCatchError<DndFeatFeatCategories>(actions),
    repeat()
  ));

  editRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditRequest),
    editCall<DndFeatFeatCategories>(this.service),
    editResponse<DndFeatFeatCategories>(actions, {dispatchResponse: false}),
    editCatchError<DndFeatFeatCategories>(actions),
    repeat()
  ));

  editManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditManyRequest),
    editManyCall<DndFeatFeatCategories>(this.service),
    editManyResponse<DndFeatFeatCategories>(actions, {dispatchResponse: false}),
    editManyCatchError<DndFeatFeatCategories>(actions),
    repeat()
  ));

  selectRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.SelectRequest),
    selectCall<DndFeatFeatCategories>(this.service),
    selectResponse<DndFeatFeatCategories>(actions, {dispatchResponse: false}),
    selectCatchError<DndFeatFeatCategories>(actions),
    repeat()
  ));

}
