import { createSelector } from 'reselect';

import { initialState } from './reducer';

const selectShowcasesDomain = state => state.showcases || initialState;

const selectShowcases = () => createSelector(selectShowcasesDomain, subState => subState);

export { selectShowcases, selectShowcasesDomain };
