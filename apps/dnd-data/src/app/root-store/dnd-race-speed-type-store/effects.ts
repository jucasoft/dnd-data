import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import * as actions from './actions';
import {DndRaceSpeedType} from '@models/vo/dnd-race-speed-type';
import {DndRaceSpeedTypeService} from '@services/dnd-race-speed-type.service';
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
export class DndRaceSpeedTypeStoreEffects {
    constructor(private readonly actions$: Actions, private readonly service: DndRaceSpeedTypeService) {
    }

  searchRequestEffect$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(actions.SearchRequest, LoadAppData),
    searchCall<DndRaceSpeedType>(this.service),
    searchResponse<DndRaceSpeedType>(actions, {dispatchResponse: false}),
    searchCatchError<DndRaceSpeedType>(actions),
    repeat()
  ));

  deleteRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteRequest),
    deleteCall<DndRaceSpeedType>(this.service),
    deleteResponse<DndRaceSpeedType>(actions, DndRaceSpeedType, {dispatchResponse: false}),
    deleteCatchError<DndRaceSpeedType>(actions),
    repeat()
  ));

  deleteManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteManyRequest),
    deleteManyCall<DndRaceSpeedType>(this.service),
    deleteManyResponse<DndRaceSpeedType>(actions, DndRaceSpeedType, {dispatchResponse: false}),
    deleteManyCatchError<DndRaceSpeedType>(actions),
    repeat()
  ));

  createRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateRequest),
    createCall<DndRaceSpeedType>(this.service),
    createResponse<DndRaceSpeedType>(actions, {dispatchResponse: false}),
    createCatchError<DndRaceSpeedType>(actions),
    repeat()
  ));

  createManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateManyRequest),
    createManyCall<DndRaceSpeedType>(this.service),
    createManyResponse<DndRaceSpeedType>(actions, {dispatchResponse: false}),
    createManyCatchError<DndRaceSpeedType>(actions),
    repeat()
  ));

  editRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditRequest),
    editCall<DndRaceSpeedType>(this.service),
    editResponse<DndRaceSpeedType>(actions, {dispatchResponse: false}),
    editCatchError<DndRaceSpeedType>(actions),
    repeat()
  ));

  editManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditManyRequest),
    editManyCall<DndRaceSpeedType>(this.service),
    editManyResponse<DndRaceSpeedType>(actions, {dispatchResponse: false}),
    editManyCatchError<DndRaceSpeedType>(actions),
    repeat()
  ));

  selectRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.SelectRequest),
    selectCall<DndRaceSpeedType>(this.service),
    selectResponse<DndRaceSpeedType>(actions, {dispatchResponse: false}),
    selectCatchError<DndRaceSpeedType>(actions),
    repeat()
  ));

}
