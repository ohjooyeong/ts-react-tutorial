import { createAsyncAction } from 'typesafe-actions';
import { GithubProfile } from '../../api/github';
import { AxiosError } from 'axios';

export const GET_USER_PROFILE_REQEUST = 'github/GET_USER_PROFILE_REQUEST';
export const GET_USER_PROFILE_SUCCESS = 'github/GET_USER_PROFILE_SUCCESS';
export const GET_USER_PROFILE_ERROR = 'github/GET_USER_PROFILE_ERROR';

export const getUserProfileAsync = createAsyncAction(
  GET_USER_PROFILE_REQEUST,
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_ERROR,
)<undefined, GithubProfile, AxiosError>();
