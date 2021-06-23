import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import * as actions from './actions';
import {DndSpellDescriptors} from '@models/vo/dnd-spell-descriptors';
import {DndSpellDescriptorsService} from '@services/dnd-spell-descriptors.service';
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
export class DndSpellDescriptorsStoreEffects {
    constructor(private readonly actions$: Actions, private readonly service: DndSpellDescriptorsService) {
    }

  searchRequestEffect$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(actions.SearchRequest, LoadAppData),
    searchCall<DndSpellDescriptors>(this.service),
    searchResponse<DndSpellDescriptors>(actions, {dispatchResponse: false}),
    searchCatchError<DndSpellDescriptors>(actions),
    repeat()
  ));

  deleteRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteRequest),
    deleteCall<DndSpellDescriptors>(this.service),
    deleteResponse<DndSpellDescriptors>(actions, DndSpellDescriptors, {dispatchResponse: false}),
    deleteCatchError<DndSpellDescriptors>(actions),
    repeat()
  ));

  deleteManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteManyRequest),
    deleteManyCall<DndSpellDescriptors>(this.service),
    deleteManyResponse<DndSpellDescriptors>(actions, DndSpellDescriptors, {dispatchResponse: false}),
    deleteManyCatchError<DndSpellDescriptors>(actions),
    repeat()
  ));

  createRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateRequest),
    createCall<DndSpellDescriptors>(this.service),
    createResponse<DndSpellDescriptors>(actions, {dispatchResponse: false}),
    createCatchError<DndSpellDescriptors>(actions),
    repeat()
  ));

  createManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateManyRequest),
    createManyCall<DndSpellDescriptors>(this.service),
    createManyResponse<DndSpellDescriptors>(actions, {dispatchResponse: false}),
    createManyCatchError<DndSpellDescriptors>(actions),
    repeat()
  ));

  editRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditRequest),
    editCall<DndSpellDescriptors>(this.service),
    editResponse<DndSpellDescriptors>(actions, {dispatchResponse: false}),
    editCatchError<DndSpellDescriptors>(actions),
    repeat()
  ));

  editManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditManyRequest),
    editManyCall<DndSpellDescriptors>(this.service),
    editManyResponse<DndSpellDescriptors>(actions, {dispatchResponse: false}),
    editManyCatchError<DndSpellDescriptors>(actions),
    repeat()
  ));

  selectRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.SelectRequest),
    selectCall<DndSpellDescriptors>(this.service),
    selectResponse<DndSpellDescriptors>(actions, {dispatchResponse: false}),
    selectCatchError<DndSpellDescriptors>(actions),
    repeat()
  ));

}
