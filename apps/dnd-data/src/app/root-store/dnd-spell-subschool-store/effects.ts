import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import * as actions from './actions';
import {DndSpellSubschool} from '@models/vo/dnd-spell-subschool';
import {DndSpellSubschoolService} from '@services/dnd-spell-subschool.service';
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
export class DndSpellSubschoolStoreEffects {
    constructor(private readonly actions$: Actions, private readonly service: DndSpellSubschoolService) {
    }

  searchRequestEffect$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(actions.SearchRequest, LoadAppData),
    searchCall<DndSpellSubschool>(this.service),
    searchResponse<DndSpellSubschool>(actions, {dispatchResponse: false}),
    searchCatchError<DndSpellSubschool>(actions),
    repeat()
  ));

  deleteRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteRequest),
    deleteCall<DndSpellSubschool>(this.service),
    deleteResponse<DndSpellSubschool>(actions, DndSpellSubschool, {dispatchResponse: false}),
    deleteCatchError<DndSpellSubschool>(actions),
    repeat()
  ));

  deleteManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteManyRequest),
    deleteManyCall<DndSpellSubschool>(this.service),
    deleteManyResponse<DndSpellSubschool>(actions, DndSpellSubschool, {dispatchResponse: false}),
    deleteManyCatchError<DndSpellSubschool>(actions),
    repeat()
  ));

  createRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateRequest),
    createCall<DndSpellSubschool>(this.service),
    createResponse<DndSpellSubschool>(actions, {dispatchResponse: false}),
    createCatchError<DndSpellSubschool>(actions),
    repeat()
  ));

  createManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateManyRequest),
    createManyCall<DndSpellSubschool>(this.service),
    createManyResponse<DndSpellSubschool>(actions, {dispatchResponse: false}),
    createManyCatchError<DndSpellSubschool>(actions),
    repeat()
  ));

  editRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditRequest),
    editCall<DndSpellSubschool>(this.service),
    editResponse<DndSpellSubschool>(actions, {dispatchResponse: false}),
    editCatchError<DndSpellSubschool>(actions),
    repeat()
  ));

  editManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditManyRequest),
    editManyCall<DndSpellSubschool>(this.service),
    editManyResponse<DndSpellSubschool>(actions, {dispatchResponse: false}),
    editManyCatchError<DndSpellSubschool>(actions),
    repeat()
  ));

  selectRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.SelectRequest),
    selectCall<DndSpellSubschool>(this.service),
    selectResponse<DndSpellSubschool>(actions, {dispatchResponse: false}),
    selectCatchError<DndSpellSubschool>(actions),
    repeat()
  ));

}
