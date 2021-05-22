import {createFeatureSelector, createSelector, MemoizedSelector} from '@ngrx/store';

import {adapter, State} from './state';
import {Names} from './names';
import {SpellsInventoryStoreSelectors} from '@root-store/spells-inventory-store/index';
import {Spell} from '@models/vo/spell';
import {SpellsInventory} from '@models/vo/spells-inventory';
import {Dictionary} from '@ngrx/entity';

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

// export const selectAllMerged: MemoizedSelector<any, Spell[]> = createSelector(
//   selectAll,
//   SpellsInventoryStoreSelectors.selectAll,
//   (values: Spell[], valuesB: SpellsInventory[]): Spell[] => {
//     const entities = valuesB.reduce((prev, curr) => {
//       prev[curr.spellsDictionaryId] = curr;
//       return prev;
//     }, {})
//     return values.map(value => {
//       const key = value.id;
//       const spells = entities[key] || empty;
//       return {...value, spells};
//     });
//   }
// );

export const selectEntitiesDenorm: MemoizedSelector<any, Dictionary<Spell>> = createSelector(
  selectEntities,
  SpellsInventoryStoreSelectors.selectEntities,
  (spells: Dictionary<Spell>, spellsInventorys: Dictionary<SpellsInventory>): Dictionary<Spell> => {
    const keys = Object.keys(spells);
    return keys.reduce((prev, key) => {
      const spell = spells[key];
      const id = spell.id;
      return {
        ...prev,
        [key]: {
          ...spell,
          spells: spellsInventorys[id]
        }
      }
    }, {})
  }
);


export const selectAllDenorm: MemoizedSelector<any, Spell[]> = createSelector(
  selectEntitiesDenorm,
  (spells: Dictionary<Spell>): Spell[] => {
    return Object.values(spells)
  }
);
