import {SpellsInventoryStoreSelectors} from '@root-store/spells-inventory-store';
import {SpellStoreSelectors} from '@root-store/spell-store';
import {createSelectorFactory, defaultMemoize} from '@ngrx/store';

const customMemoizer = (aFn) => defaultMemoize(aFn, (a: any, b: any) => a === b);

export const selectError = createSelectorFactory(customMemoizer)(
  SpellsInventoryStoreSelectors.selectError,
  SpellStoreSelectors.selectError,
  (...args: string[]) => {
    console.log('selectError.args', args);
    return args.join('');
  }
);

export const selectIsLoading = createSelectorFactory(customMemoizer)(
  SpellsInventoryStoreSelectors.selectIsLoading,
  SpellStoreSelectors.selectIsLoading,
  (...args: boolean[]) => {
    console.log('selectIsLoading.args', args);
    return args.find((value => value));
  }
);
