import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import * as actions from './actions';
import {DndRulesCondition} from '@models/vo/dnd-rules-condition';
import {DndRulesConditionService} from '@services/dnd-rules-condition.service';
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
export class DndRulesConditionStoreEffects {
    constructor(private readonly actions$: Actions, private readonly service: DndRulesConditionService) {
    }

  searchRequestEffect$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(actions.SearchRequest, LoadAppData),
    searchCall<DndRulesCondition>(this.service),
    searchResponse<DndRulesCondition>(actions, {dispatchResponse: false}),
    searchCatchError<DndRulesCondition>(actions),
    repeat()
  ));

  deleteRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteRequest),
    deleteCall<DndRulesCondition>(this.service),
    deleteResponse<DndRulesCondition>(actions, DndRulesCondition, {dispatchResponse: false}),
    deleteCatchError<DndRulesCondition>(actions),
    repeat()
  ));

  deleteManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteManyRequest),
    deleteManyCall<DndRulesCondition>(this.service),
    deleteManyResponse<DndRulesCondition>(actions, DndRulesCondition, {dispatchResponse: false}),
    deleteManyCatchError<DndRulesCondition>(actions),
    repeat()
  ));

  createRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateRequest),
    createCall<DndRulesCondition>(this.service),
    createResponse<DndRulesCondition>(actions, {dispatchResponse: false}),
    createCatchError<DndRulesCondition>(actions),
    repeat()
  ));

  createManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateManyRequest),
    createManyCall<DndRulesCondition>(this.service),
    createManyResponse<DndRulesCondition>(actions, {dispatchResponse: false}),
    createManyCatchError<DndRulesCondition>(actions),
    repeat()
  ));

  editRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditRequest),
    editCall<DndRulesCondition>(this.service),
    editResponse<DndRulesCondition>(actions, {dispatchResponse: false}),
    editCatchError<DndRulesCondition>(actions),
    repeat()
  ));

  editManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditManyRequest),
    editManyCall<DndRulesCondition>(this.service),
    editManyResponse<DndRulesCondition>(actions, {dispatchResponse: false}),
    editManyCatchError<DndRulesCondition>(actions),
    repeat()
  ));

  selectRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.SelectRequest),
    selectCall<DndRulesCondition>(this.service),
    selectResponse<DndRulesCondition>(actions, {dispatchResponse: false}),
    selectCatchError<DndRulesCondition>(actions),
    repeat()
  ));

}
