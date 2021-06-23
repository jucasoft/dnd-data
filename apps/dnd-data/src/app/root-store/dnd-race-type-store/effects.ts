import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import * as actions from './actions';
import {DndRaceType} from '@models/vo/dnd-race-type';
import {DndRaceTypeService} from '@services/dnd-race-type.service';
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
export class DndRaceTypeStoreEffects {
    constructor(private readonly actions$: Actions, private readonly service: DndRaceTypeService) {
    }

  searchRequestEffect$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(actions.SearchRequest, LoadAppData),
    searchCall<DndRaceType>(this.service),
    searchResponse<DndRaceType>(actions, {dispatchResponse: false}),
    searchCatchError<DndRaceType>(actions),
    repeat()
  ));

  deleteRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteRequest),
    deleteCall<DndRaceType>(this.service),
    deleteResponse<DndRaceType>(actions, DndRaceType, {dispatchResponse: false}),
    deleteCatchError<DndRaceType>(actions),
    repeat()
  ));

  deleteManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteManyRequest),
    deleteManyCall<DndRaceType>(this.service),
    deleteManyResponse<DndRaceType>(actions, DndRaceType, {dispatchResponse: false}),
    deleteManyCatchError<DndRaceType>(actions),
    repeat()
  ));

  createRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateRequest),
    createCall<DndRaceType>(this.service),
    createResponse<DndRaceType>(actions, {dispatchResponse: false}),
    createCatchError<DndRaceType>(actions),
    repeat()
  ));

  createManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateManyRequest),
    createManyCall<DndRaceType>(this.service),
    createManyResponse<DndRaceType>(actions, {dispatchResponse: false}),
    createManyCatchError<DndRaceType>(actions),
    repeat()
  ));

  editRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditRequest),
    editCall<DndRaceType>(this.service),
    editResponse<DndRaceType>(actions, {dispatchResponse: false}),
    editCatchError<DndRaceType>(actions),
    repeat()
  ));

  editManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditManyRequest),
    editManyCall<DndRaceType>(this.service),
    editManyResponse<DndRaceType>(actions, {dispatchResponse: false}),
    editManyCatchError<DndRaceType>(actions),
    repeat()
  ));

  selectRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.SelectRequest),
    selectCall<DndRaceType>(this.service),
    selectResponse<DndRaceType>(actions, {dispatchResponse: false}),
    selectCatchError<DndRaceType>(actions),
    repeat()
  ));

}
