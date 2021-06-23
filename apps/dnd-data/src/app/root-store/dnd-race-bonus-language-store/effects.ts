import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import * as actions from './actions';
import {DndRaceBonusLanguage} from '@models/vo/dnd-race-bonus-language';
import {DndRaceBonusLanguageService} from '@services/dnd-race-bonus-language.service';
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
export class DndRaceBonusLanguageStoreEffects {
    constructor(private readonly actions$: Actions, private readonly service: DndRaceBonusLanguageService) {
    }

  searchRequestEffect$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(actions.SearchRequest, LoadAppData),
    searchCall<DndRaceBonusLanguage>(this.service),
    searchResponse<DndRaceBonusLanguage>(actions, {dispatchResponse: false}),
    searchCatchError<DndRaceBonusLanguage>(actions),
    repeat()
  ));

  deleteRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteRequest),
    deleteCall<DndRaceBonusLanguage>(this.service),
    deleteResponse<DndRaceBonusLanguage>(actions, DndRaceBonusLanguage, {dispatchResponse: false}),
    deleteCatchError<DndRaceBonusLanguage>(actions),
    repeat()
  ));

  deleteManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteManyRequest),
    deleteManyCall<DndRaceBonusLanguage>(this.service),
    deleteManyResponse<DndRaceBonusLanguage>(actions, DndRaceBonusLanguage, {dispatchResponse: false}),
    deleteManyCatchError<DndRaceBonusLanguage>(actions),
    repeat()
  ));

  createRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateRequest),
    createCall<DndRaceBonusLanguage>(this.service),
    createResponse<DndRaceBonusLanguage>(actions, {dispatchResponse: false}),
    createCatchError<DndRaceBonusLanguage>(actions),
    repeat()
  ));

  createManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateManyRequest),
    createManyCall<DndRaceBonusLanguage>(this.service),
    createManyResponse<DndRaceBonusLanguage>(actions, {dispatchResponse: false}),
    createManyCatchError<DndRaceBonusLanguage>(actions),
    repeat()
  ));

  editRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditRequest),
    editCall<DndRaceBonusLanguage>(this.service),
    editResponse<DndRaceBonusLanguage>(actions, {dispatchResponse: false}),
    editCatchError<DndRaceBonusLanguage>(actions),
    repeat()
  ));

  editManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditManyRequest),
    editManyCall<DndRaceBonusLanguage>(this.service),
    editManyResponse<DndRaceBonusLanguage>(actions, {dispatchResponse: false}),
    editManyCatchError<DndRaceBonusLanguage>(actions),
    repeat()
  ));

  selectRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.SelectRequest),
    selectCall<DndRaceBonusLanguage>(this.service),
    selectResponse<DndRaceBonusLanguage>(actions, {dispatchResponse: false}),
    selectCatchError<DndRaceBonusLanguage>(actions),
    repeat()
  ));

}
