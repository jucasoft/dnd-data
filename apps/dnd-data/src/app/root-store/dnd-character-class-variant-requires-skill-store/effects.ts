import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import * as actions from './actions';
import {DndCharacterClassVariantRequiresSkill} from '@models/vo/dnd-character-class-variant-requires-skill';
import {DndCharacterClassVariantRequiresSkillService} from '@services/dnd-character-class-variant-requires-skill.service';
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
export class DndCharacterClassVariantRequiresSkillStoreEffects {
    constructor(private readonly actions$: Actions, private readonly service: DndCharacterClassVariantRequiresSkillService) {
    }

  searchRequestEffect$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(actions.SearchRequest, LoadAppData),
    searchCall<DndCharacterClassVariantRequiresSkill>(this.service),
    searchResponse<DndCharacterClassVariantRequiresSkill>(actions, {dispatchResponse: false}),
    searchCatchError<DndCharacterClassVariantRequiresSkill>(actions),
    repeat()
  ));

  deleteRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteRequest),
    deleteCall<DndCharacterClassVariantRequiresSkill>(this.service),
    deleteResponse<DndCharacterClassVariantRequiresSkill>(actions, DndCharacterClassVariantRequiresSkill, {dispatchResponse: false}),
    deleteCatchError<DndCharacterClassVariantRequiresSkill>(actions),
    repeat()
  ));

  deleteManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteManyRequest),
    deleteManyCall<DndCharacterClassVariantRequiresSkill>(this.service),
    deleteManyResponse<DndCharacterClassVariantRequiresSkill>(actions, DndCharacterClassVariantRequiresSkill, {dispatchResponse: false}),
    deleteManyCatchError<DndCharacterClassVariantRequiresSkill>(actions),
    repeat()
  ));

  createRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateRequest),
    createCall<DndCharacterClassVariantRequiresSkill>(this.service),
    createResponse<DndCharacterClassVariantRequiresSkill>(actions, {dispatchResponse: false}),
    createCatchError<DndCharacterClassVariantRequiresSkill>(actions),
    repeat()
  ));

  createManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateManyRequest),
    createManyCall<DndCharacterClassVariantRequiresSkill>(this.service),
    createManyResponse<DndCharacterClassVariantRequiresSkill>(actions, {dispatchResponse: false}),
    createManyCatchError<DndCharacterClassVariantRequiresSkill>(actions),
    repeat()
  ));

  editRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditRequest),
    editCall<DndCharacterClassVariantRequiresSkill>(this.service),
    editResponse<DndCharacterClassVariantRequiresSkill>(actions, {dispatchResponse: false}),
    editCatchError<DndCharacterClassVariantRequiresSkill>(actions),
    repeat()
  ));

  editManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditManyRequest),
    editManyCall<DndCharacterClassVariantRequiresSkill>(this.service),
    editManyResponse<DndCharacterClassVariantRequiresSkill>(actions, {dispatchResponse: false}),
    editManyCatchError<DndCharacterClassVariantRequiresSkill>(actions),
    repeat()
  ));

  selectRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.SelectRequest),
    selectCall<DndCharacterClassVariantRequiresSkill>(this.service),
    selectResponse<DndCharacterClassVariantRequiresSkill>(actions, {dispatchResponse: false}),
    selectCatchError<DndCharacterClassVariantRequiresSkill>(actions),
    repeat()
  ));

}
