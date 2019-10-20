import { put, takeLatest } from 'redux-saga/effects';

import { getShowcases } from 'containers/Home/actions';

import dataShowcases, { getShowcasesRequest } from '../saga';

describe('getShowcasesRequest Saga', () => {
  let mainSaga;

  beforeEach(() => {
    mainSaga = dataShowcases();
  });

  it('Should get list of showcases TRIGGER', () => {
    const takeLatestDescriptor = mainSaga.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(getShowcases.TRIGGER, getShowcasesRequest));
  });

  describe('getShowcases actions', () => {
    let getShowcasesGenerate;

    const response = [
      {
        title: 'First title',
      },
      {
        title: 'Second title',
      },
    ];

    beforeEach(() => {
      getShowcasesGenerate = getShowcasesRequest();

      const selectDescriptor = getShowcasesGenerate.next().value;
      expect(selectDescriptor).toMatchSnapshot();
    });

    it('Should getShowcasesRequest be success', () => {
      getShowcasesGenerate.next(response);
      const putShowcasesSuccess = getShowcasesGenerate.next(response).value;
      getShowcasesGenerate.next(response);

      expect(putShowcasesSuccess).toEqual(put(getShowcases.success(response)));
    });

    it('Should getShowcasesRequest be failure', () => {
      const response = new Error('Some error');
      const putShowcasesFailure = getShowcasesGenerate.throw(response).value;

      expect(putShowcasesFailure).toEqual(put(getShowcases.failure(response)));
    });
  });
});
