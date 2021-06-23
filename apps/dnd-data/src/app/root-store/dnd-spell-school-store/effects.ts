import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import * as actions from './actions';
import {DndSpellSchool} from '@models/vo/dnd-spell-school';
import {DndSpellSchoolService} from '@services/dnd-spell-school.service';
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
export class DndSpellSchoolStoreEffects {
    constructor(private readonly actions$: Actions, private readonly service: DndSpellSchoolService) {
    }

  searchRequestEffect$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(actions.SearchRequest, LoadAppData),
    searchCall<DndSpellSchool>(this.service),
    searchResponse<DndSpellSchool>(actions, {dispatchResponse: false}),
    searchCatchError<DndSpellSchool>(actions),
    repeat()
  ));

  deleteRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteRequest),
    deleteCall<DndSpellSchool>(this.service),
    deleteResponse<DndSpellSchool>(actions, DndSpellSchool, {dispatchResponse: false}),
    deleteCatchError<DndSpellSchool>(actions),
    repeat()
  ));

  deleteManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteManyRequest),
    deleteManyCall<DndSpellSchool>(this.service),
    deleteManyResponse<DndSpellSchool>(actions, DndSpellSchool, {dispatchResponse: false}),
    deleteManyCatchError<DndSpellSchool>(actions),
    repeat()
  ));

  createRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateRequest),
    createCall<DndSpellSchool>(this.service),
    createResponse<DndSpellSchool>(actions, {dispatchResponse: false}),
    createCatchError<DndSpellSchool>(actions),
    repeat()
  ));

  createManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateManyRequest),
    createManyCall<DndSpellSchool>(this.service),
    createManyResponse<DndSpellSchool>(actions, {dispatchResponse: false}),
    createManyCatchError<DndSpellSchool>(actions),
    repeat()
  ));

  editRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditRequest),
    editCall<DndSpellSchool>(this.service),
    editResponse<DndSpellSchool>(actions, {dispatchResponse: false}),
    editCatchError<DndSpellSchool>(actions),
    repeat()
  ));

  editManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditManyRequest),
    editManyCall<DndSpellSchool>(this.service),
    editManyResponse<DndSpellSchool>(actions, {dispatchResponse: false}),
    editManyCatchError<DndSpellSchool>(actions),
    repeat()
  ));

  selectRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.SelectRequest),
    selectCall<DndSpellSchool>(this.service),
    selectResponse<DndSpellSchool>(actions, {dispatchResponse: false}),
    selectCatchError<DndSpellSchool>(actions),
    repeat()
  ));

}
