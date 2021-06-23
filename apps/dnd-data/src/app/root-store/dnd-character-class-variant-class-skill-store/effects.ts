import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import * as actions from './actions';
import {DndCharacterClassVariantClassSkill} from '@models/vo/dnd-character-class-variant-class-skill';
import {DndCharacterClassVariantClassSkillService} from '@services/dnd-character-class-variant-class-skill.service';
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
export class DndCharacterClassVariantClassSkillStoreEffects {
    constructor(private readonly actions$: Actions, private readonly service: DndCharacterClassVariantClassSkillService) {
    }

  searchRequestEffect$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(actions.SearchRequest, LoadAppData),
    searchCall<DndCharacterClassVariantClassSkill>(this.service),
    searchResponse<DndCharacterClassVariantClassSkill>(actions, {dispatchResponse: false}),
    searchCatchError<DndCharacterClassVariantClassSkill>(actions),
    repeat()
  ));

  deleteRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteRequest),
    deleteCall<DndCharacterClassVariantClassSkill>(this.service),
    deleteResponse<DndCharacterClassVariantClassSkill>(actions, DndCharacterClassVariantClassSkill, {dispatchResponse: false}),
    deleteCatchError<DndCharacterClassVariantClassSkill>(actions),
    repeat()
  ));

  deleteManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteManyRequest),
    deleteManyCall<DndCharacterClassVariantClassSkill>(this.service),
    deleteManyResponse<DndCharacterClassVariantClassSkill>(actions, DndCharacterClassVariantClassSkill, {dispatchResponse: false}),
    deleteManyCatchError<DndCharacterClassVariantClassSkill>(actions),
    repeat()
  ));

  createRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateRequest),
    createCall<DndCharacterClassVariantClassSkill>(this.service),
    createResponse<DndCharacterClassVariantClassSkill>(actions, {dispatchResponse: false}),
    createCatchError<DndCharacterClassVariantClassSkill>(actions),
    repeat()
  ));

  createManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateManyRequest),
    createManyCall<DndCharacterClassVariantClassSkill>(this.service),
    createManyResponse<DndCharacterClassVariantClassSkill>(actions, {dispatchResponse: false}),
    createManyCatchError<DndCharacterClassVariantClassSkill>(actions),
    repeat()
  ));

  editRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditRequest),
    editCall<DndCharacterClassVariantClassSkill>(this.service),
    editResponse<DndCharacterClassVariantClassSkill>(actions, {dispatchResponse: false}),
    editCatchError<DndCharacterClassVariantClassSkill>(actions),
    repeat()
  ));

  editManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditManyRequest),
    editManyCall<DndCharacterClassVariantClassSkill>(this.service),
    editManyResponse<DndCharacterClassVariantClassSkill>(actions, {dispatchResponse: false}),
    editManyCatchError<DndCharacterClassVariantClassSkill>(actions),
    repeat()
  ));

  selectRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.SelectRequest),
    selectCall<DndCharacterClassVariantClassSkill>(this.service),
    selectResponse<DndCharacterClassVariantClassSkill>(actions, {dispatchResponse: false}),
    selectCatchError<DndCharacterClassVariantClassSkill>(actions),
    repeat()
  ));

}
