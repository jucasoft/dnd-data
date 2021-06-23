import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import * as actions from './actions';
import {DndSpellDescriptor} from '@models/vo/dnd-spell-descriptor';
import {DndSpellDescriptorService} from '@services/dnd-spell-descriptor.service';
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
export class DndSpellDescriptorStoreEffects {
    constructor(private readonly actions$: Actions, private readonly service: DndSpellDescriptorService) {
    }

  searchRequestEffect$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(actions.SearchRequest, LoadAppData),
    searchCall<DndSpellDescriptor>(this.service),
    searchResponse<DndSpellDescriptor>(actions, {dispatchResponse: false}),
    searchCatchError<DndSpellDescriptor>(actions),
    repeat()
  ));

  deleteRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteRequest),
    deleteCall<DndSpellDescriptor>(this.service),
    deleteResponse<DndSpellDescriptor>(actions, DndSpellDescriptor, {dispatchResponse: false}),
    deleteCatchError<DndSpellDescriptor>(actions),
    repeat()
  ));

  deleteManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteManyRequest),
    deleteManyCall<DndSpellDescriptor>(this.service),
    deleteManyResponse<DndSpellDescriptor>(actions, DndSpellDescriptor, {dispatchResponse: false}),
    deleteManyCatchError<DndSpellDescriptor>(actions),
    repeat()
  ));

  createRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateRequest),
    createCall<DndSpellDescriptor>(this.service),
    createResponse<DndSpellDescriptor>(actions, {dispatchResponse: false}),
    createCatchError<DndSpellDescriptor>(actions),
    repeat()
  ));

  createManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateManyRequest),
    createManyCall<DndSpellDescriptor>(this.service),
    createManyResponse<DndSpellDescriptor>(actions, {dispatchResponse: false}),
    createManyCatchError<DndSpellDescriptor>(actions),
    repeat()
  ));

  editRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditRequest),
    editCall<DndSpellDescriptor>(this.service),
    editResponse<DndSpellDescriptor>(actions, {dispatchResponse: false}),
    editCatchError<DndSpellDescriptor>(actions),
    repeat()
  ));

  editManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditManyRequest),
    editManyCall<DndSpellDescriptor>(this.service),
    editManyResponse<DndSpellDescriptor>(actions, {dispatchResponse: false}),
    editManyCatchError<DndSpellDescriptor>(actions),
    repeat()
  ));

  selectRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.SelectRequest),
    selectCall<DndSpellDescriptor>(this.service),
    selectResponse<DndSpellDescriptor>(actions, {dispatchResponse: false}),
    selectCatchError<DndSpellDescriptor>(actions),
    repeat()
  ));

}
