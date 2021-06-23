import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import * as actions from './actions';
import {DndSkill} from '@models/vo/dnd-skill';
import {DndSkillService} from '@services/dnd-skill.service';
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
export class DndSkillStoreEffects {
    constructor(private readonly actions$: Actions, private readonly service: DndSkillService) {
    }

  searchRequestEffect$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(actions.SearchRequest, LoadAppData),
    searchCall<DndSkill>(this.service),
    searchResponse<DndSkill>(actions, {dispatchResponse: false}),
    searchCatchError<DndSkill>(actions),
    repeat()
  ));

  deleteRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteRequest),
    deleteCall<DndSkill>(this.service),
    deleteResponse<DndSkill>(actions, DndSkill, {dispatchResponse: false}),
    deleteCatchError<DndSkill>(actions),
    repeat()
  ));

  deleteManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteManyRequest),
    deleteManyCall<DndSkill>(this.service),
    deleteManyResponse<DndSkill>(actions, DndSkill, {dispatchResponse: false}),
    deleteManyCatchError<DndSkill>(actions),
    repeat()
  ));

  createRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateRequest),
    createCall<DndSkill>(this.service),
    createResponse<DndSkill>(actions, {dispatchResponse: false}),
    createCatchError<DndSkill>(actions),
    repeat()
  ));

  createManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateManyRequest),
    createManyCall<DndSkill>(this.service),
    createManyResponse<DndSkill>(actions, {dispatchResponse: false}),
    createManyCatchError<DndSkill>(actions),
    repeat()
  ));

  editRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditRequest),
    editCall<DndSkill>(this.service),
    editResponse<DndSkill>(actions, {dispatchResponse: false}),
    editCatchError<DndSkill>(actions),
    repeat()
  ));

  editManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditManyRequest),
    editManyCall<DndSkill>(this.service),
    editManyResponse<DndSkill>(actions, {dispatchResponse: false}),
    editManyCatchError<DndSkill>(actions),
    repeat()
  ));

  selectRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.SelectRequest),
    selectCall<DndSkill>(this.service),
    selectResponse<DndSkill>(actions, {dispatchResponse: false}),
    selectCatchError<DndSkill>(actions),
    repeat()
  ));

}
