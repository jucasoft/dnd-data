import {createFeatureSelector, createSelector, MemoizedSelector} from '@ngrx/store';

import {adapter, State} from './state';
import {Names} from './names';

export const selectState: MemoizedSelector<object, State> = createFeatureSelector<State>(Names.NAME);
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
  selectItemSelectedOrigin,
  selectEntitiesSelected,
  selectItemsSelectedOrigin,
  selectResponses,
} = adapter.getCrudSelectors(selectState);

export const selectLoadingSearch: MemoizedSelector<any, boolean> = createSelector(
  selectState,
  (state: State) => state.loadingSearch
);
