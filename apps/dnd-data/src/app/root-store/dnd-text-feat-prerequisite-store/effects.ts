import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import * as actions from './actions';
import {DndTextFeatPrerequisite} from '@models/vo/dnd-text-feat-prerequisite';
import {DndTextFeatPrerequisiteService} from '@services/dnd-text-feat-prerequisite.service';
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
export class DndTextFeatPrerequisiteStoreEffects {
    constructor(private readonly actions$: Actions, private readonly service: DndTextFeatPrerequisiteService) {
    }

  searchRequestEffect$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(actions.SearchRequest, LoadAppData),
    searchCall<DndTextFeatPrerequisite>(this.service),
    searchResponse<DndTextFeatPrerequisite>(actions, {dispatchResponse: false}),
    searchCatchError<DndTextFeatPrerequisite>(actions),
    repeat()
  ));

  deleteRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteRequest),
    deleteCall<DndTextFeatPrerequisite>(this.service),
    deleteResponse<DndTextFeatPrerequisite>(actions, DndTextFeatPrerequisite, {dispatchResponse: false}),
    deleteCatchError<DndTextFeatPrerequisite>(actions),
    repeat()
  ));

  deleteManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteManyRequest),
    deleteManyCall<DndTextFeatPrerequisite>(this.service),
    deleteManyResponse<DndTextFeatPrerequisite>(actions, DndTextFeatPrerequisite, {dispatchResponse: false}),
    deleteManyCatchError<DndTextFeatPrerequisite>(actions),
    repeat()
  ));

  createRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateRequest),
    createCall<DndTextFeatPrerequisite>(this.service),
    createResponse<DndTextFeatPrerequisite>(actions, {dispatchResponse: false}),
    createCatchError<DndTextFeatPrerequisite>(actions),
    repeat()
  ));

  createManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateManyRequest),
    createManyCall<DndTextFeatPrerequisite>(this.service),
    createManyResponse<DndTextFeatPrerequisite>(actions, {dispatchResponse: false}),
    createManyCatchError<DndTextFeatPrerequisite>(actions),
    repeat()
  ));

  editRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditRequest),
    editCall<DndTextFeatPrerequisite>(this.service),
    editResponse<DndTextFeatPrerequisite>(actions, {dispatchResponse: false}),
    editCatchError<DndTextFeatPrerequisite>(actions),
    repeat()
  ));

  editManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditManyRequest),
    editManyCall<DndTextFeatPrerequisite>(this.service),
    editManyResponse<DndTextFeatPrerequisite>(actions, {dispatchResponse: false}),
    editManyCatchError<DndTextFeatPrerequisite>(actions),
    repeat()
  ));

  selectRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.SelectRequest),
    selectCall<DndTextFeatPrerequisite>(this.service),
    selectResponse<DndTextFeatPrerequisite>(actions, {dispatchResponse: false}),
    selectCatchError<DndTextFeatPrerequisite>(actions),
    repeat()
  ));

}
