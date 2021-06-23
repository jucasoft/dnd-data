import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import * as actions from './actions';
import {DndDomain} from '@models/vo/dnd-domain';
import {DndDomainService} from '@services/dnd-domain.service';
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
export class DndDomainStoreEffects {
    constructor(private readonly actions$: Actions, private readonly service: DndDomainService) {
    }

  searchRequestEffect$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(actions.SearchRequest, LoadAppData),
    searchCall<DndDomain>(this.service),
    searchResponse<DndDomain>(actions, {dispatchResponse: false}),
    searchCatchError<DndDomain>(actions),
    repeat()
  ));

  deleteRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteRequest),
    deleteCall<DndDomain>(this.service),
    deleteResponse<DndDomain>(actions, DndDomain, {dispatchResponse: false}),
    deleteCatchError<DndDomain>(actions),
    repeat()
  ));

  deleteManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteManyRequest),
    deleteManyCall<DndDomain>(this.service),
    deleteManyResponse<DndDomain>(actions, DndDomain, {dispatchResponse: false}),
    deleteManyCatchError<DndDomain>(actions),
    repeat()
  ));

  createRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateRequest),
    createCall<DndDomain>(this.service),
    createResponse<DndDomain>(actions, {dispatchResponse: false}),
    createCatchError<DndDomain>(actions),
    repeat()
  ));

  createManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateManyRequest),
    createManyCall<DndDomain>(this.service),
    createManyResponse<DndDomain>(actions, {dispatchResponse: false}),
    createManyCatchError<DndDomain>(actions),
    repeat()
  ));

  editRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditRequest),
    editCall<DndDomain>(this.service),
    editResponse<DndDomain>(actions, {dispatchResponse: false}),
    editCatchError<DndDomain>(actions),
    repeat()
  ));

  editManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditManyRequest),
    editManyCall<DndDomain>(this.service),
    editManyResponse<DndDomain>(actions, {dispatchResponse: false}),
    editManyCatchError<DndDomain>(actions),
    repeat()
  ));

  selectRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.SelectRequest),
    selectCall<DndDomain>(this.service),
    selectResponse<DndDomain>(actions, {dispatchResponse: false}),
    selectCatchError<DndDomain>(actions),
    repeat()
  ));

}
