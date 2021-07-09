import { createReducer } from 'typesafe-actions';
import { GithubState, GithubAction } from './types';
import {
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_REQEUST,
  GET_USER_PROFILE_ERROR,
  getUserProfileAsync,
} from './actions';
import { asyncState, createAsyncReducer } from '../../lib/reducerUtils';

const initialState: GithubState = {
  userProfile: asyncState.initial(),
};

// const github = createReducer<GithubState, GithubAction>(initialState, {
//   [GET_USER_PROFILE_REQEUST]: state => ({
//     ...state,
//     userProfile: asyncState.load(),
//   }),
//   [GET_USER_PROFILE_SUCCESS]: (state, action) => ({
//     ...state,
//     userProfile: asyncState.success(action.payload),
//   }),
//   [GET_USER_PROFILE_ERROR]: (state, action) => ({
//     ...state,
//     userProfile: asyncState.error(action.payload),
//   }),
// });

const github = createReducer<GithubState, GithubAction>(
  initialState,
).handleAction(
  [
    getUserProfileAsync.request,
    getUserProfileAsync.success,
    getUserProfileAsync.failure,
  ],
  createAsyncReducer(getUserProfileAsync, 'userProfile'),
);

export default github;
