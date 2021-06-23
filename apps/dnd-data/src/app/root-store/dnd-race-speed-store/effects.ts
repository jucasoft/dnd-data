import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import * as actions from './actions';
import {DndRaceSpeed} from '@models/vo/dnd-race-speed';
import {DndRaceSpeedService} from '@services/dnd-race-speed.service';
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
export class DndRaceSpeedStoreEffects {
    constructor(private readonly actions$: Actions, private readonly service: DndRaceSpeedService) {
    }

  searchRequestEffect$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(actions.SearchRequest, LoadAppData),
    searchCall<DndRaceSpeed>(this.service),
    searchResponse<DndRaceSpeed>(actions, {dispatchResponse: false}),
    searchCatchError<DndRaceSpeed>(actions),
    repeat()
  ));

  deleteRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteRequest),
    deleteCall<DndRaceSpeed>(this.service),
    deleteResponse<DndRaceSpeed>(actions, DndRaceSpeed, {dispatchResponse: false}),
    deleteCatchError<DndRaceSpeed>(actions),
    repeat()
  ));

  deleteManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteManyRequest),
    deleteManyCall<DndRaceSpeed>(this.service),
    deleteManyResponse<DndRaceSpeed>(actions, DndRaceSpeed, {dispatchResponse: false}),
    deleteManyCatchError<DndRaceSpeed>(actions),
    repeat()
  ));

  createRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateRequest),
    createCall<DndRaceSpeed>(this.service),
    createResponse<DndRaceSpeed>(actions, {dispatchResponse: false}),
    createCatchError<DndRaceSpeed>(actions),
    repeat()
  ));

  createManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateManyRequest),
    createManyCall<DndRaceSpeed>(this.service),
    createManyResponse<DndRaceSpeed>(actions, {dispatchResponse: false}),
    createManyCatchError<DndRaceSpeed>(actions),
    repeat()
  ));

  editRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditRequest),
    editCall<DndRaceSpeed>(this.service),
    editResponse<DndRaceSpeed>(actions, {dispatchResponse: false}),
    editCatchError<DndRaceSpeed>(actions),
    repeat()
  ));

  editManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditManyRequest),
    editManyCall<DndRaceSpeed>(this.service),
    editManyResponse<DndRaceSpeed>(actions, {dispatchResponse: false}),
    editManyCatchError<DndRaceSpeed>(actions),
    repeat()
  ));

  selectRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.SelectRequest),
    selectCall<DndRaceSpeed>(this.service),
    selectResponse<DndRaceSpeed>(actions, {dispatchResponse: false}),
    selectCatchError<DndRaceSpeed>(actions),
    repeat()
  ));

}
