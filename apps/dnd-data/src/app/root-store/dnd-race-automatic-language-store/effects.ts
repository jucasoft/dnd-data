import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import * as actions from './actions';
import {DndRaceAutomaticLanguage} from '@models/vo/dnd-race-automatic-language';
import {DndRaceAutomaticLanguageService} from '@services/dnd-race-automatic-language.service';
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
export class DndRaceAutomaticLanguageStoreEffects {
    constructor(private readonly actions$: Actions, private readonly service: DndRaceAutomaticLanguageService) {
    }

  searchRequestEffect$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(actions.SearchRequest, LoadAppData),
    searchCall<DndRaceAutomaticLanguage>(this.service),
    searchResponse<DndRaceAutomaticLanguage>(actions, {dispatchResponse: false}),
    searchCatchError<DndRaceAutomaticLanguage>(actions),
    repeat()
  ));

  deleteRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteRequest),
    deleteCall<DndRaceAutomaticLanguage>(this.service),
    deleteResponse<DndRaceAutomaticLanguage>(actions, DndRaceAutomaticLanguage, {dispatchResponse: false}),
    deleteCatchError<DndRaceAutomaticLanguage>(actions),
    repeat()
  ));

  deleteManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteManyRequest),
    deleteManyCall<DndRaceAutomaticLanguage>(this.service),
    deleteManyResponse<DndRaceAutomaticLanguage>(actions, DndRaceAutomaticLanguage, {dispatchResponse: false}),
    deleteManyCatchError<DndRaceAutomaticLanguage>(actions),
    repeat()
  ));

  createRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateRequest),
    createCall<DndRaceAutomaticLanguage>(this.service),
    createResponse<DndRaceAutomaticLanguage>(actions, {dispatchResponse: false}),
    createCatchError<DndRaceAutomaticLanguage>(actions),
    repeat()
  ));

  createManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateManyRequest),
    createManyCall<DndRaceAutomaticLanguage>(this.service),
    createManyResponse<DndRaceAutomaticLanguage>(actions, {dispatchResponse: false}),
    createManyCatchError<DndRaceAutomaticLanguage>(actions),
    repeat()
  ));

  editRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditRequest),
    editCall<DndRaceAutomaticLanguage>(this.service),
    editResponse<DndRaceAutomaticLanguage>(actions, {dispatchResponse: false}),
    editCatchError<DndRaceAutomaticLanguage>(actions),
    repeat()
  ));

  editManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditManyRequest),
    editManyCall<DndRaceAutomaticLanguage>(this.service),
    editManyResponse<DndRaceAutomaticLanguage>(actions, {dispatchResponse: false}),
    editManyCatchError<DndRaceAutomaticLanguage>(actions),
    repeat()
  ));

  selectRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.SelectRequest),
    selectCall<DndRaceAutomaticLanguage>(this.service),
    selectResponse<DndRaceAutomaticLanguage>(actions, {dispatchResponse: false}),
    selectCatchError<DndRaceAutomaticLanguage>(actions),
    repeat()
  ));

}
