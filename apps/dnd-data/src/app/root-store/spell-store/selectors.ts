import {createFeatureSelector, createSelector, MemoizedSelector} from '@ngrx/store';

import {adapter, State} from './state';
import {Names} from './names';
import {SpellsInventoryStoreSelectors} from '@root-store/spells-inventory-store/index';
import {Spell} from '@models/vo/spell';
import {SpellsInventory} from '@models/vo/spells-inventory';

export const selectState: MemoizedSelector<any, State> = createFeatureSelector<State>(Names.NAME);
export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
  selectItemSelected,
  selectItemsSelected,
  selectLastCriteria,
  selectError,
  selectIsLoading,
  selectIsLoaded,
  selectFilters,
  selectFilteredItems,
  selectIdSelected,
  selectIdsSelected,
  selectResponses,
  selectEntitiesSelected,
  selectItemSelectedOrigin,
  selectItemsSelectedOrigin
} = adapter.getCrudSelectors(selectState);

export const selectAllMerged: MemoizedSelector<any, Spell[]> = createSelector(
  selectAll,
  SpellsInventoryStoreSelectors.selectAll,
  (values: Spell[], valuesB: SpellsInventory[]): Spell[] => {
    const entities = valuesB.reduce((prev, curr) => {
      prev[curr.spellsDictionaryId] = curr;
      return prev;
    }, {})
    return values.map(value => {
      const key = value.id;
      return entities[key] ? {...value, spells: entities[key]} : value
    });
  }
);
