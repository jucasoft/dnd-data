import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import * as actions from './actions';
import {DndFeatRequiresSkill} from '@models/vo/dnd-feat-requires-skill';
import {DndFeatRequiresSkillService} from '@services/dnd-feat-requires-skill.service';
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
export class DndFeatRequiresSkillStoreEffects {
    constructor(private readonly actions$: Actions, private readonly service: DndFeatRequiresSkillService) {
    }

  searchRequestEffect$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(actions.SearchRequest, LoadAppData),
    searchCall<DndFeatRequiresSkill>(this.service),
    searchResponse<DndFeatRequiresSkill>(actions, {dispatchResponse: false}),
    searchCatchError<DndFeatRequiresSkill>(actions),
    repeat()
  ));

  deleteRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteRequest),
    deleteCall<DndFeatRequiresSkill>(this.service),
    deleteResponse<DndFeatRequiresSkill>(actions, DndFeatRequiresSkill, {dispatchResponse: false}),
    deleteCatchError<DndFeatRequiresSkill>(actions),
    repeat()
  ));

  deleteManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteManyRequest),
    deleteManyCall<DndFeatRequiresSkill>(this.service),
    deleteManyResponse<DndFeatRequiresSkill>(actions, DndFeatRequiresSkill, {dispatchResponse: false}),
    deleteManyCatchError<DndFeatRequiresSkill>(actions),
    repeat()
  ));

  createRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateRequest),
    createCall<DndFeatRequiresSkill>(this.service),
    createResponse<DndFeatRequiresSkill>(actions, {dispatchResponse: false}),
    createCatchError<DndFeatRequiresSkill>(actions),
    repeat()
  ));

  createManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateManyRequest),
    createManyCall<DndFeatRequiresSkill>(this.service),
    createManyResponse<DndFeatRequiresSkill>(actions, {dispatchResponse: false}),
    createManyCatchError<DndFeatRequiresSkill>(actions),
    repeat()
  ));

  editRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditRequest),
    editCall<DndFeatRequiresSkill>(this.service),
    editResponse<DndFeatRequiresSkill>(actions, {dispatchResponse: false}),
    editCatchError<DndFeatRequiresSkill>(actions),
    repeat()
  ));

  editManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditManyRequest),
    editManyCall<DndFeatRequiresSkill>(this.service),
    editManyResponse<DndFeatRequiresSkill>(actions, {dispatchResponse: false}),
    editManyCatchError<DndFeatRequiresSkill>(actions),
    repeat()
  ));

  selectRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.SelectRequest),
    selectCall<DndFeatRequiresSkill>(this.service),
    selectResponse<DndFeatRequiresSkill>(actions, {dispatchResponse: false}),
    selectCatchError<DndFeatRequiresSkill>(actions),
    repeat()
  ));

}
