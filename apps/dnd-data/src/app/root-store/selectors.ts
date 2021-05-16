import {SpellMetaInfoStoreSelectors} from '@root-store/spell-meta-info-store';
import {SpellBoardStoreSelectors} from '@root-store/spell-board-store';
import {SpellStoreSelectors} from '@root-store/spell-store';
import {createSelectorFactory, defaultMemoize} from '@ngrx/store';

const customMemoizer = (aFn) => defaultMemoize(aFn, (a: any, b: any) => a === b);

export const selectError = createSelectorFactory(customMemoizer)(
  SpellMetaInfoStoreSelectors.selectError,
  SpellBoardStoreSelectors.selectError,
  SpellStoreSelectors.selectError,
  (...args: string[]) => {
    console.log('selectError.args', args);
    return args.join('');
  }
);

export const selectIsLoading = createSelectorFactory(customMemoizer)(
  SpellMetaInfoStoreSelectors.selectIsLoading,
  SpellBoardStoreSelectors.selectIsLoading,
  SpellStoreSelectors.selectIsLoading,
  (...args: boolean[]) => {
    console.log('selectIsLoading.args', args);
    return args.find((value => value));
  }
);
