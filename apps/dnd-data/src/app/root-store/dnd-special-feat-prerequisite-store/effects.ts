import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import * as actions from './actions';
import {DndSpecialFeatPrerequisite} from '@models/vo/dnd-special-feat-prerequisite';
import {DndSpecialFeatPrerequisiteService} from '@services/dnd-special-feat-prerequisite.service';
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
export class DndSpecialFeatPrerequisiteStoreEffects {
    constructor(private readonly actions$: Actions, private readonly service: DndSpecialFeatPrerequisiteService) {
    }

  searchRequestEffect$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(actions.SearchRequest, LoadAppData),
    searchCall<DndSpecialFeatPrerequisite>(this.service),
    searchResponse<DndSpecialFeatPrerequisite>(actions, {dispatchResponse: false}),
    searchCatchError<DndSpecialFeatPrerequisite>(actions),
    repeat()
  ));

  deleteRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteRequest),
    deleteCall<DndSpecialFeatPrerequisite>(this.service),
    deleteResponse<DndSpecialFeatPrerequisite>(actions, DndSpecialFeatPrerequisite, {dispatchResponse: false}),
    deleteCatchError<DndSpecialFeatPrerequisite>(actions),
    repeat()
  ));

  deleteManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteManyRequest),
    deleteManyCall<DndSpecialFeatPrerequisite>(this.service),
    deleteManyResponse<DndSpecialFeatPrerequisite>(actions, DndSpecialFeatPrerequisite, {dispatchResponse: false}),
    deleteManyCatchError<DndSpecialFeatPrerequisite>(actions),
    repeat()
  ));

  createRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateRequest),
    createCall<DndSpecialFeatPrerequisite>(this.service),
    createResponse<DndSpecialFeatPrerequisite>(actions, {dispatchResponse: false}),
    createCatchError<DndSpecialFeatPrerequisite>(actions),
    repeat()
  ));

  createManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateManyRequest),
    createManyCall<DndSpecialFeatPrerequisite>(this.service),
    createManyResponse<DndSpecialFeatPrerequisite>(actions, {dispatchResponse: false}),
    createManyCatchError<DndSpecialFeatPrerequisite>(actions),
    repeat()
  ));

  editRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditRequest),
    editCall<DndSpecialFeatPrerequisite>(this.service),
    editResponse<DndSpecialFeatPrerequisite>(actions, {dispatchResponse: false}),
    editCatchError<DndSpecialFeatPrerequisite>(actions),
    repeat()
  ));

  editManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditManyRequest),
    editManyCall<DndSpecialFeatPrerequisite>(this.service),
    editManyResponse<DndSpecialFeatPrerequisite>(actions, {dispatchResponse: false}),
    editManyCatchError<DndSpecialFeatPrerequisite>(actions),
    repeat()
  ));

  selectRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.SelectRequest),
    selectCall<DndSpecialFeatPrerequisite>(this.service),
    selectResponse<DndSpecialFeatPrerequisite>(actions, {dispatchResponse: false}),
    selectCatchError<DndSpecialFeatPrerequisite>(actions),
    repeat()
  ));

}
