import {createFeatureSelector, createSelector, MemoizedSelector, select} from '@ngrx/store';
import {adapter, State} from './state';
import {Names} from './names';
import {SpellsInventoryStoreSelectors} from '@root-store/spells-inventory-store/index';
import {Spell} from '@models/vo/spell';
import {SpellsInventory} from '@models/vo/spells-inventory';
import {pipe} from 'rxjs';
import {map, scan} from 'rxjs/operators';
import {Dictionary} from '@ngrx/entity';
import {evalData} from '@core/utils/j-utils';

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

// const createImmutableSelector = createSelectorFactory(projectionFunction => {
//   const cache = {};
//
//   function memoized() {
//     const hashedArguments = ObjectHash.sha1([...arguments]);
//     if (cache[hashedArguments] == null) {
//       cache[hashedArguments] = projectionFunction.apply(null, arguments);
//     }
//     return cloneDeep(cache[hashedArguments]);
//   }
//   return {
//     memoized,
//     reset: () => {},
//     setResult: () => {},
//     clearResult: () => {}
//   };
// });
//
// const agf = projectionFunction => {
//   const cache = {};
//
//   function memoized() {
//     const hashedArguments = ObjectHash.sha1([...arguments]);
//     if (cache[hashedArguments] == null) {
//       cache[hashedArguments] = projectionFunction.apply(null, arguments);
//     }
//     return cloneDeep(cache[hashedArguments]);
//   }
//
//   return {
//     memoized,
//     reset: () => {},
//     setResult: () => {},
//     clearResult: () => {}
//   };
// };
//
// const isArgumentsEqual = (a: any, b: any): boolean => {
//   return a === b; // this is what is currently isEqualCheck is doing anyway.
// }
//
// const isResultEqual = (a: any, b: any): boolean => {
//   if (a) {
//     const keys = Object.keys(a);
//     keys.forEach((key: string) => {
//       if (b[key] !== a[key]) {
//         console.log('diversi');
//       }
//     })
//   }
//   return a === b; // this is what is currently isEqualCheck is doing anyway.
// }
//
// const customMemoizer = (aFn) => defaultMemoize(aFn, isResultEqual, isArgumentsEqual);

export const selectEntitiesDenorm: MemoizedSelector<any, Dictionary<Spell>> = createSelector(
  selectEntities,
  SpellsInventoryStoreSelectors.selectAll,
  (spells: Dictionary<Spell>, inventorys: SpellsInventory[]): Dictionary<Spell> => {
    const keys = Object.keys(spells);
    const spellsInventorys = inventorys.reduce((prev, curr) => {
      prev[curr.spellsDictionaryId] = curr;
      return prev;
    }, {})
    return keys.reduce((prev, key) => {
      const spell = spells[key];
      const id = spell.id;
      prev[key] = {
        ...spell,
        spells: spellsInventorys[id]
      }
      return prev
    }, {})
  }
);

export const selectAllDenorm = () => {
  return pipe(
    select(selectEntitiesDenorm),
    scan((acc, value) => {
      const keys = Object.keys(acc);
      const keysTemp = Object.keys(value);
      if (keys.length === 0) {
        return value;
      }
      return keys.reduce((prev: any, key: string) => {

        const prevIten = acc[key];
        const newIten = value[key];
        if (evalData(() => prevIten.spells === newIten.spells || prevIten.spells.qt === newIten.spells.qt, false)) {
          prev[key] = prevIten
        } else {
          prev[key] = {...newIten}
        }
        return prev
      }, {})
    }, {} as Dictionary<Spell>),
    map(value => Object.values(value) as Spell[])
  )
};

// export const selectAllDenorm: MemoizedSelector<any, Spell[]> = createSelector(
//   selectEntitiesDenorm,
//   (spells: Dictionary<Spell>): Spell[] => {
//     return Object.values(spells)
//   }
// );


export const selectAllClassLevel = () => pipe(
  selectAllDenorm(),
  map(values => {
    const result = values.reduce((prev, curr) => {
      const result2 = curr.classLevels.reduce((prev2, curr2) => {
        return {...prev2, [`${curr2.class}-${curr2.level}`]: curr2}
      }, {})
      return {...prev, ...result2}
    }, {})

    // ordino la lista in ordine alfabetico e numerico.
    return Object.keys(result).sort((a, b) => {
      const nameA = a.toUpperCase(); // ignore upper and lowercase
      const nameB = b.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    }).map(key => result[key]);

  })
);

export const selectAllDomainLevels = () => pipe(
  selectAllDenorm(),
  map(values => {
    const result = values.reduce((prev, curr) => {
      const result2 = curr.domainLevels.reduce((prev2, curr2) => {
        return {...prev2, [`${curr2.domain}-${curr2.level}`]: curr2}
      }, {})
      return {...prev, ...result2}
    }, {})

    // ordino la lista in ordine alfabetico e numerico.
    return Object.keys(result).sort((a, b) => {
      const nameA = a.toUpperCase(); // ignore upper and lowercase
      const nameB = b.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    }).map(key => result[key]);

  })
);
