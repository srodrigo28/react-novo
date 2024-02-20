import { all } from 'redux-saga/effects';

import example from './exemple/sagas';

export default function* rootSaga() {
    return yield all([example]);
}
