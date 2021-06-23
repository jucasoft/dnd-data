import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import * as actions from './actions';
import {DndSkillVariant} from '@models/vo/dnd-skill-variant';
import {DndSkillVariantService} from '@services/dnd-skill-variant.service';
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
export class DndSkillVariantStoreEffects {
    constructor(private readonly actions$: Actions, private readonly service: DndSkillVariantService) {
    }

  searchRequestEffect$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(actions.SearchRequest, LoadAppData),
    searchCall<DndSkillVariant>(this.service),
    searchResponse<DndSkillVariant>(actions, {dispatchResponse: false}),
    searchCatchError<DndSkillVariant>(actions),
    repeat()
  ));

  deleteRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteRequest),
    deleteCall<DndSkillVariant>(this.service),
    deleteResponse<DndSkillVariant>(actions, DndSkillVariant, {dispatchResponse: false}),
    deleteCatchError<DndSkillVariant>(actions),
    repeat()
  ));

  deleteManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteManyRequest),
    deleteManyCall<DndSkillVariant>(this.service),
    deleteManyResponse<DndSkillVariant>(actions, DndSkillVariant, {dispatchResponse: false}),
    deleteManyCatchError<DndSkillVariant>(actions),
    repeat()
  ));

  createRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateRequest),
    createCall<DndSkillVariant>(this.service),
    createResponse<DndSkillVariant>(actions, {dispatchResponse: false}),
    createCatchError<DndSkillVariant>(actions),
    repeat()
  ));

  createManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateManyRequest),
    createManyCall<DndSkillVariant>(this.service),
    createManyResponse<DndSkillVariant>(actions, {dispatchResponse: false}),
    createManyCatchError<DndSkillVariant>(actions),
    repeat()
  ));

  editRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditRequest),
    editCall<DndSkillVariant>(this.service),
    editResponse<DndSkillVariant>(actions, {dispatchResponse: false}),
    editCatchError<DndSkillVariant>(actions),
    repeat()
  ));

  editManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditManyRequest),
    editManyCall<DndSkillVariant>(this.service),
    editManyResponse<DndSkillVariant>(actions, {dispatchResponse: false}),
    editManyCatchError<DndSkillVariant>(actions),
    repeat()
  ));

  selectRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.SelectRequest),
    selectCall<DndSkillVariant>(this.service),
    selectResponse<DndSkillVariant>(actions, {dispatchResponse: false}),
    selectCatchError<DndSkillVariant>(actions),
    repeat()
  ));

}
