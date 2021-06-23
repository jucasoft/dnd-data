import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import * as actions from './actions';
import {DndRulebook} from '@models/vo/dnd-rulebook';
import {DndRulebookService} from '@services/dnd-rulebook.service';
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
export class DndRulebookStoreEffects {
    constructor(private readonly actions$: Actions, private readonly service: DndRulebookService) {
    }

  searchRequestEffect$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(actions.SearchRequest, LoadAppData),
    searchCall<DndRulebook>(this.service),
    searchResponse<DndRulebook>(actions, {dispatchResponse: false}),
    searchCatchError<DndRulebook>(actions),
    repeat()
  ));

  deleteRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteRequest),
    deleteCall<DndRulebook>(this.service),
    deleteResponse<DndRulebook>(actions, DndRulebook, {dispatchResponse: false}),
    deleteCatchError<DndRulebook>(actions),
    repeat()
  ));

  deleteManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteManyRequest),
    deleteManyCall<DndRulebook>(this.service),
    deleteManyResponse<DndRulebook>(actions, DndRulebook, {dispatchResponse: false}),
    deleteManyCatchError<DndRulebook>(actions),
    repeat()
  ));

  createRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateRequest),
    createCall<DndRulebook>(this.service),
    createResponse<DndRulebook>(actions, {dispatchResponse: false}),
    createCatchError<DndRulebook>(actions),
    repeat()
  ));

  createManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateManyRequest),
    createManyCall<DndRulebook>(this.service),
    createManyResponse<DndRulebook>(actions, {dispatchResponse: false}),
    createManyCatchError<DndRulebook>(actions),
    repeat()
  ));

  editRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditRequest),
    editCall<DndRulebook>(this.service),
    editResponse<DndRulebook>(actions, {dispatchResponse: false}),
    editCatchError<DndRulebook>(actions),
    repeat()
  ));

  editManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditManyRequest),
    editManyCall<DndRulebook>(this.service),
    editManyResponse<DndRulebook>(actions, {dispatchResponse: false}),
    editManyCatchError<DndRulebook>(actions),
    repeat()
  ));

  selectRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.SelectRequest),
    selectCall<DndRulebook>(this.service),
    selectResponse<DndRulebook>(actions, {dispatchResponse: false}),
    selectCatchError<DndRulebook>(actions),
    repeat()
  ));

}
