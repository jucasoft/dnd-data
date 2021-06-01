import {InfoStoreSelectors} from '@root-store/info-store';
import {PgStoreSelectors} from '@root-store/pg-store';
import {SpellsInventoryStoreSelectors} from '@root-store/spells-inventory-store';
import {SpellStoreSelectors} from '@root-store/spell-store';
import {createSelectorFactory, defaultMemoize} from '@ngrx/store';

const customMemoizer = (aFn) => defaultMemoize(aFn, (a: any, b: any) => a === b);

export const selectError = createSelectorFactory(customMemoizer)(
  InfoStoreSelectors.selectError,
  PgStoreSelectors.selectError,
  SpellsInventoryStoreSelectors.selectError,
  SpellStoreSelectors.selectError,
  (...args: string[]) => {
    console.log('selectError.args', args);
    return args.join('');
  }
);

export const selectIsLoading = createSelectorFactory(customMemoizer)(
  InfoStoreSelectors.selectIsLoading,
  PgStoreSelectors.selectIsLoading,
  SpellsInventoryStoreSelectors.selectIsLoading,
  SpellStoreSelectors.selectIsLoading,
  (...args: boolean[]) => {
    return args.find((value => value));
  }
);
