import {actions} from './actions';
import {adapter, initialState, State} from './state';
import {createCrudOns} from 'ngrx-entity-crud';
import {createReducer, on} from '@ngrx/store';


// example code
const loadingSearchSuccessOn = on(actions.SearchSuccess, (state: State, payload) => {
  console.log('loadingSearchSuccessOn');
  return Object.assign(
    {},
    state,
    {loadingSearch: false}
  );
});
const loadingSearchRequestOn = on(actions.SearchRequest, (state: State, payload) => {
  console.log('loadingSearchRequestOn');
  return Object.assign(
    {},
    state,
    {loadingSearch: true}
  );
});

// example code
const ons = createCrudOns(adapter, initialState, actions);
const onsB = {...ons, loadingSearchSuccessOn, loadingSearchRequestOn}
export const featureReducer = createReducer<State>(initialState, ...Object.values(onsB) as any);

