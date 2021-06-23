import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import * as actions from './actions';
import {DndSpellDomainLevel} from '@models/vo/dnd-spell-domain-level';
import {DndSpellDomainLevelService} from '@services/dnd-spell-domain-level.service';
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
export class DndSpellDomainLevelStoreEffects {
    constructor(private readonly actions$: Actions, private readonly service: DndSpellDomainLevelService) {
    }

  searchRequestEffect$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(actions.SearchRequest, LoadAppData),
    searchCall<DndSpellDomainLevel>(this.service),
    searchResponse<DndSpellDomainLevel>(actions, {dispatchResponse: false}),
    searchCatchError<DndSpellDomainLevel>(actions),
    repeat()
  ));

  deleteRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteRequest),
    deleteCall<DndSpellDomainLevel>(this.service),
    deleteResponse<DndSpellDomainLevel>(actions, DndSpellDomainLevel, {dispatchResponse: false}),
    deleteCatchError<DndSpellDomainLevel>(actions),
    repeat()
  ));

  deleteManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteManyRequest),
    deleteManyCall<DndSpellDomainLevel>(this.service),
    deleteManyResponse<DndSpellDomainLevel>(actions, DndSpellDomainLevel, {dispatchResponse: false}),
    deleteManyCatchError<DndSpellDomainLevel>(actions),
    repeat()
  ));

  createRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateRequest),
    createCall<DndSpellDomainLevel>(this.service),
    createResponse<DndSpellDomainLevel>(actions, {dispatchResponse: false}),
    createCatchError<DndSpellDomainLevel>(actions),
    repeat()
  ));

  createManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateManyRequest),
    createManyCall<DndSpellDomainLevel>(this.service),
    createManyResponse<DndSpellDomainLevel>(actions, {dispatchResponse: false}),
    createManyCatchError<DndSpellDomainLevel>(actions),
    repeat()
  ));

  editRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditRequest),
    editCall<DndSpellDomainLevel>(this.service),
    editResponse<DndSpellDomainLevel>(actions, {dispatchResponse: false}),
    editCatchError<DndSpellDomainLevel>(actions),
    repeat()
  ));

  editManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditManyRequest),
    editManyCall<DndSpellDomainLevel>(this.service),
    editManyResponse<DndSpellDomainLevel>(actions, {dispatchResponse: false}),
    editManyCatchError<DndSpellDomainLevel>(actions),
    repeat()
  ));

  selectRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.SelectRequest),
    selectCall<DndSpellDomainLevel>(this.service),
    selectResponse<DndSpellDomainLevel>(actions, {dispatchResponse: false}),
    selectCatchError<DndSpellDomainLevel>(actions),
    repeat()
  ));

}
