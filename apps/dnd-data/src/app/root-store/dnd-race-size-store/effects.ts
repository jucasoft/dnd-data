import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import * as actions from './actions';
import {DndRaceSize} from '@models/vo/dnd-race-size';
import {DndRaceSizeService} from '@services/dnd-race-size.service';
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
export class DndRaceSizeStoreEffects {
    constructor(private readonly actions$: Actions, private readonly service: DndRaceSizeService) {
    }

  searchRequestEffect$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(actions.SearchRequest, LoadAppData),
    searchCall<DndRaceSize>(this.service),
    searchResponse<DndRaceSize>(actions, {dispatchResponse: false}),
    searchCatchError<DndRaceSize>(actions),
    repeat()
  ));

  deleteRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteRequest),
    deleteCall<DndRaceSize>(this.service),
    deleteResponse<DndRaceSize>(actions, DndRaceSize, {dispatchResponse: false}),
    deleteCatchError<DndRaceSize>(actions),
    repeat()
  ));

  deleteManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteManyRequest),
    deleteManyCall<DndRaceSize>(this.service),
    deleteManyResponse<DndRaceSize>(actions, DndRaceSize, {dispatchResponse: false}),
    deleteManyCatchError<DndRaceSize>(actions),
    repeat()
  ));

  createRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateRequest),
    createCall<DndRaceSize>(this.service),
    createResponse<DndRaceSize>(actions, {dispatchResponse: false}),
    createCatchError<DndRaceSize>(actions),
    repeat()
  ));

  createManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateManyRequest),
    createManyCall<DndRaceSize>(this.service),
    createManyResponse<DndRaceSize>(actions, {dispatchResponse: false}),
    createManyCatchError<DndRaceSize>(actions),
    repeat()
  ));

  editRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditRequest),
    editCall<DndRaceSize>(this.service),
    editResponse<DndRaceSize>(actions, {dispatchResponse: false}),
    editCatchError<DndRaceSize>(actions),
    repeat()
  ));

  editManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditManyRequest),
    editManyCall<DndRaceSize>(this.service),
    editManyResponse<DndRaceSize>(actions, {dispatchResponse: false}),
    editManyCatchError<DndRaceSize>(actions),
    repeat()
  ));

  selectRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.SelectRequest),
    selectCall<DndRaceSize>(this.service),
    selectResponse<DndRaceSize>(actions, {dispatchResponse: false}),
    selectCatchError<DndRaceSize>(actions),
    repeat()
  ));

}
