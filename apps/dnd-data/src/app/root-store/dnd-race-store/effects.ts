import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import * as actions from './actions';
import {DndRace} from '@models/vo/dnd-race';
import {DndRaceService} from '@services/dnd-race.service';
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
export class DndRaceStoreEffects {
    constructor(private readonly actions$: Actions, private readonly service: DndRaceService) {
    }

  searchRequestEffect$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(actions.SearchRequest, LoadAppData),
    searchCall<DndRace>(this.service),
    searchResponse<DndRace>(actions, {dispatchResponse: false}),
    searchCatchError<DndRace>(actions),
    repeat()
  ));

  deleteRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteRequest),
    deleteCall<DndRace>(this.service),
    deleteResponse<DndRace>(actions, DndRace, {dispatchResponse: false}),
    deleteCatchError<DndRace>(actions),
    repeat()
  ));

  deleteManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteManyRequest),
    deleteManyCall<DndRace>(this.service),
    deleteManyResponse<DndRace>(actions, DndRace, {dispatchResponse: false}),
    deleteManyCatchError<DndRace>(actions),
    repeat()
  ));

  createRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateRequest),
    createCall<DndRace>(this.service),
    createResponse<DndRace>(actions, {dispatchResponse: false}),
    createCatchError<DndRace>(actions),
    repeat()
  ));

  createManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateManyRequest),
    createManyCall<DndRace>(this.service),
    createManyResponse<DndRace>(actions, {dispatchResponse: false}),
    createManyCatchError<DndRace>(actions),
    repeat()
  ));

  editRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditRequest),
    editCall<DndRace>(this.service),
    editResponse<DndRace>(actions, {dispatchResponse: false}),
    editCatchError<DndRace>(actions),
    repeat()
  ));

  editManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditManyRequest),
    editManyCall<DndRace>(this.service),
    editManyResponse<DndRace>(actions, {dispatchResponse: false}),
    editManyCatchError<DndRace>(actions),
    repeat()
  ));

  selectRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.SelectRequest),
    selectCall<DndRace>(this.service),
    selectResponse<DndRace>(actions, {dispatchResponse: false}),
    selectCatchError<DndRace>(actions),
    repeat()
  ));

}
