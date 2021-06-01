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
import {InfoStoreSelectors} from '@root-store/info-store/index';
import {Info} from '@models/vo/info';

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

// const isEqualCheck = (a: any, b: any): boolean => {
//   return a === b; // this is what is currently isEqualCheck is doing anyway.
// }
//
// function isArgumentsChanged(
//   args: IArguments,
//   lastArguments: IArguments,
//   comparator: any
// ) {
//   for (let i = 0; i < args.length; i++) {
//     if (!comparator(args[i], lastArguments[i])) {
//       return true;
//     }
//   }
//   return false;
// }
//
// export function customMemoize(
//   projectionFn: any,
//   isArgumentsEqual = isEqualCheck,
//   isResultEqual = isEqualCheck
// ): MemoizedProjection {
//   let lastArguments: null | IArguments = null;
//   // tslint:disable-next-line:no-any anything could be the result.
//   let lastResult: any = null;
//   let overrideResult: any;
//
//   function reset() {
//     lastArguments = null;
//     lastResult = null;
//   }
//
//   function setResult(result: any = undefined) {
//     overrideResult = {result};
//   }
//
//   function clearResult() {
//     overrideResult = undefined;
//   }
//
//   // tslint:disable-next-line:no-any anything could be the result.
//   function memoized(): any {
//     if (overrideResult !== undefined) {
//       return overrideResult.result;
//     }
//
//     if (!lastArguments) {
//
//       // eslint-disable-next-line prefer-spread,prefer-rest-params
//       lastResult = projectionFn.apply(null, arguments as any);
//       // eslint-disable-next-line prefer-rest-params
//       lastArguments = arguments;
//       return lastResult;
//     }
//
//     // eslint-disable-next-line prefer-rest-params
//     if (!isArgumentsChanged(arguments, lastArguments, isArgumentsEqual)) {
//       return lastResult;
//     }
//
//     // eslint-disable-next-line prefer-spread,prefer-rest-params
//     const newResult = projectionFn.apply(null, arguments as any);
//     // eslint-disable-next-line prefer-rest-params
//     lastArguments = arguments;
//
//     if (isResultEqual(lastResult, newResult)) {
//       return lastResult;
//     }
//
//     const keys = Object.keys(newResult)
//     lastResult = newResult;
//
//     return newResult;
//   }
//
//   return {memoized, reset, setResult, clearResult};
// }

export const selectEntitiesDenorm: MemoizedSelector<any, Dictionary<Spell>> = createSelector(
  selectEntities,
  SpellsInventoryStoreSelectors.selectAll,
  InfoStoreSelectors.selectAll,
  (
    spells: Dictionary<Spell>,
    inventorys: SpellsInventory[],
    info: Info[]
  ): Dictionary<Spell> => {
    const keys = Object.keys(spells);
    const spellsInventorys = inventorys.reduce((prev, curr) => {
      prev[curr.spellsDictionaryId] = curr;
      return prev;
    }, {})

    const infInventorys = info.reduce((prev, curr) => {
      prev[curr.spellsDictionaryId] = curr;
      return prev;
    }, {})

    return keys.reduce((prev, key) => {
      const spell = spells[key];
      const id = spell.id;

      if (spellsInventorys[id]) {
        prev[key] = {
          ...spell,
          spells: spellsInventorys[id]
        }
      } else {
        prev[key] = spell;
      }

      if (infInventorys[id]) {
        prev[key] = {
          ...spell,
          info: infInventorys[id]
        }
      } else {
        prev[key] = spell;
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

export const selectAllClassLevel = createSelector(
  selectAll,
  values => {
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

  }
);

export const selectAllDomainLevels = createSelector(
  selectAll,
  values => {
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

  }
);

export const selectAllRulebooks = createSelector(
  selectAll,
  values => {
    const result = values.reduce((prev, curr) => {
      if (curr.source) {
        prev[curr.source.rulebook] = curr.source.rulebook;
      }
      return prev;
    }, {})

    // ordino la lista in ordine alfabetico e numerico.
    return Object.keys(result);
  }
);

export const selectAllSchools = createSelector(
  selectAll,
  (values) => {
    const result = values.reduce((prev, curr) => {
      const result2 = curr.schools.reduce((prev2, curr2) => {
        return {...prev2, [curr2]: curr2}
      }, {})
      return {...prev, ...result2}
    }, {})
    return Object.keys(result);
  }
)
