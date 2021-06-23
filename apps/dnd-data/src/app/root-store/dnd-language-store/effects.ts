import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import * as actions from './actions';
import {DndLanguage} from '@models/vo/dnd-language';
import {DndLanguageService} from '@services/dnd-language.service';
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
export class DndLanguageStoreEffects {
    constructor(private readonly actions$: Actions, private readonly service: DndLanguageService) {
    }

  searchRequestEffect$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(actions.SearchRequest, LoadAppData),
    searchCall<DndLanguage>(this.service),
    searchResponse<DndLanguage>(actions, {dispatchResponse: false}),
    searchCatchError<DndLanguage>(actions),
    repeat()
  ));

  deleteRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteRequest),
    deleteCall<DndLanguage>(this.service),
    deleteResponse<DndLanguage>(actions, DndLanguage, {dispatchResponse: false}),
    deleteCatchError<DndLanguage>(actions),
    repeat()
  ));

  deleteManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteManyRequest),
    deleteManyCall<DndLanguage>(this.service),
    deleteManyResponse<DndLanguage>(actions, DndLanguage, {dispatchResponse: false}),
    deleteManyCatchError<DndLanguage>(actions),
    repeat()
  ));

  createRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateRequest),
    createCall<DndLanguage>(this.service),
    createResponse<DndLanguage>(actions, {dispatchResponse: false}),
    createCatchError<DndLanguage>(actions),
    repeat()
  ));

  createManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateManyRequest),
    createManyCall<DndLanguage>(this.service),
    createManyResponse<DndLanguage>(actions, {dispatchResponse: false}),
    createManyCatchError<DndLanguage>(actions),
    repeat()
  ));

  editRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditRequest),
    editCall<DndLanguage>(this.service),
    editResponse<DndLanguage>(actions, {dispatchResponse: false}),
    editCatchError<DndLanguage>(actions),
    repeat()
  ));

  editManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditManyRequest),
    editManyCall<DndLanguage>(this.service),
    editManyResponse<DndLanguage>(actions, {dispatchResponse: false}),
    editManyCatchError<DndLanguage>(actions),
    repeat()
  ));

  selectRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.SelectRequest),
    selectCall<DndLanguage>(this.service),
    selectResponse<DndLanguage>(actions, {dispatchResponse: false}),
    selectCatchError<DndLanguage>(actions),
    repeat()
  ));

}
