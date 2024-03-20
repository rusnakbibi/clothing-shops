import { createAction, withMatcher } from 'utils/index';
import {
  UserData,
  AdditionalInformation,
  CheckUserSession,
  SetCurrentUser,
  GoogleSignInStart,
  EmailSignInStart,
  SignInSuccess,
  SignInFailed,
  SignUpStart,
  SignUpSuccess,
  SignUpFailed,
  SignOutStart,
  SignOutSuccess,
  SignOutFailed
} from 'types/index';
import { USER_ACTION_TYPES } from 'enum/userActionTypes';

export const checkUserSession = withMatcher((): CheckUserSession =>
  createAction(USER_ACTION_TYPES.CHECK_USER_SESSION));

export const setCurrentUser = withMatcher((user: UserData): SetCurrentUser =>
  createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));

export const googleSignInStart = withMatcher((): GoogleSignInStart =>
  createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START));

export const emailSignInStart = withMatcher((email: string, password: string): EmailSignInStart =>
  createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, { email, password }));

export const signInSuccess = withMatcher((user: UserData): SignInSuccess =>
  createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user));

export const signInFailed = withMatcher((error: Error): SignInFailed =>
  createAction(USER_ACTION_TYPES.SIGN_IN_FAILED, error));

export const signUpStart = withMatcher((email: string, password: string, displayName: string): SignUpStart =>
  createAction(USER_ACTION_TYPES.SIGN_UP_START, {
    email,
    password,
    displayName,
  }));

export const signUpSuccess = withMatcher((user: UserData, additionalDetails: AdditionalInformation): SignUpSuccess =>
  createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, { user, additionalDetails }));

export const signUpFailed = withMatcher((error: Error): SignUpFailed =>
  createAction(USER_ACTION_TYPES.SIGN_UP_FAILED, error));

export const signOutStart = withMatcher((): SignOutStart =>
  createAction(USER_ACTION_TYPES.SIGN_OUT_START));

export const signOutSuccess = withMatcher((): SignOutSuccess =>
  createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS));

export const signOutFailed = withMatcher((error: Error): SignOutFailed =>
  createAction(USER_ACTION_TYPES.SIGN_OUT_FAILED, error));
