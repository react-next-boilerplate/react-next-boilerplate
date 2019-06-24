import { createSelector } from 'reselect';

export const selectUsersDomain = state => state.example;

export const makeSelectData = () =>
  createSelector(
    selectUsersDomain,
    subState => subState || {}
  );
