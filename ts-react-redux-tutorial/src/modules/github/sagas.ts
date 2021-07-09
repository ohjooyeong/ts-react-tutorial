import { getUserProfileAsync, GET_USER_PROFILE_REQEUST } from '.';
import { getUserProfile, GithubProfile } from '../../api/github';
import { call, put, takeEvery } from 'redux-saga/effects';
import createAsyncSaga from '../../lib/createAsyncSaga';

// function* getUserProfileSaga(
//   action: ReturnType<typeof getUserProfileAsync.request>,
// ) {
//   try {
//     console.log(action);
//     const userProfile: GithubProfile = yield call(
//       getUserProfile,
//       action.payload,
//     );
//     console.log(userProfile);
//     yield put(getUserProfileAsync.success(userProfile));
//   } catch (e) {
//     yield put(getUserProfileAsync.failure(e));
//   }
// }

const getUserProfileSaga = createAsyncSaga(getUserProfileAsync, getUserProfile);

export function* githubSaga() {
  yield takeEvery(GET_USER_PROFILE_REQEUST, getUserProfileSaga);
}
