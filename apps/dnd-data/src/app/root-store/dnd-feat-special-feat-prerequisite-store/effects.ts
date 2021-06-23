import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import * as actions from './actions';
import {DndFeatSpecialFeatPrerequisite} from '@models/vo/dnd-feat-special-feat-prerequisite';
import {DndFeatSpecialFeatPrerequisiteService} from '@services/dnd-feat-special-feat-prerequisite.service';
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
export class DndFeatSpecialFeatPrerequisiteStoreEffects {
    constructor(private readonly actions$: Actions, private readonly service: DndFeatSpecialFeatPrerequisiteService) {
    }

  searchRequestEffect$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(actions.SearchRequest, LoadAppData),
    searchCall<DndFeatSpecialFeatPrerequisite>(this.service),
    searchResponse<DndFeatSpecialFeatPrerequisite>(actions, {dispatchResponse: false}),
    searchCatchError<DndFeatSpecialFeatPrerequisite>(actions),
    repeat()
  ));

  deleteRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteRequest),
    deleteCall<DndFeatSpecialFeatPrerequisite>(this.service),
    deleteResponse<DndFeatSpecialFeatPrerequisite>(actions, DndFeatSpecialFeatPrerequisite, {dispatchResponse: false}),
    deleteCatchError<DndFeatSpecialFeatPrerequisite>(actions),
    repeat()
  ));

  deleteManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteManyRequest),
    deleteManyCall<DndFeatSpecialFeatPrerequisite>(this.service),
    deleteManyResponse<DndFeatSpecialFeatPrerequisite>(actions, DndFeatSpecialFeatPrerequisite, {dispatchResponse: false}),
    deleteManyCatchError<DndFeatSpecialFeatPrerequisite>(actions),
    repeat()
  ));

  createRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateRequest),
    createCall<DndFeatSpecialFeatPrerequisite>(this.service),
    createResponse<DndFeatSpecialFeatPrerequisite>(actions, {dispatchResponse: false}),
    createCatchError<DndFeatSpecialFeatPrerequisite>(actions),
    repeat()
  ));

  createManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateManyRequest),
    createManyCall<DndFeatSpecialFeatPrerequisite>(this.service),
    createManyResponse<DndFeatSpecialFeatPrerequisite>(actions, {dispatchResponse: false}),
    createManyCatchError<DndFeatSpecialFeatPrerequisite>(actions),
    repeat()
  ));

  editRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditRequest),
    editCall<DndFeatSpecialFeatPrerequisite>(this.service),
    editResponse<DndFeatSpecialFeatPrerequisite>(actions, {dispatchResponse: false}),
    editCatchError<DndFeatSpecialFeatPrerequisite>(actions),
    repeat()
  ));

  editManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditManyRequest),
    editManyCall<DndFeatSpecialFeatPrerequisite>(this.service),
    editManyResponse<DndFeatSpecialFeatPrerequisite>(actions, {dispatchResponse: false}),
    editManyCatchError<DndFeatSpecialFeatPrerequisite>(actions),
    repeat()
  ));

  selectRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.SelectRequest),
    selectCall<DndFeatSpecialFeatPrerequisite>(this.service),
    selectResponse<DndFeatSpecialFeatPrerequisite>(actions, {dispatchResponse: false}),
    selectCatchError<DndFeatSpecialFeatPrerequisite>(actions),
    repeat()
  ));

}
