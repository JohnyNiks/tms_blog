import { put, call, takeEvery } from 'redux-saga/effects'
import { PayloadAction } from '@reduxjs/toolkit'
import {
  type SignInSuccessPayload,
  type SignInPayload,
  type SignInError,
  signInFailure,
  signInSuccess,
} from '../features/signIn'

const signInRequest = async (
  payload: SignInPayload
): Promise<SignInSuccessPayload> => {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json;charset=utf-8',
  }
  const response = await fetch(
    'https://studapi.teachmeskills.by/auth/jwt/create/',
    {
      method: 'POST',
      body: JSON.stringify(payload),
      headers,
    }
  )

  const data = await response.json()

  if (!response.ok) {
    return Promise.reject(data as SignInError)
  }

  localStorage.setItem('access', JSON.stringify(data.access))
  localStorage.setItem('refresh', JSON.stringify(data.refresh))

  return data as SignInSuccessPayload
}

export function* signIn(action: PayloadAction<SignInPayload>) {
  try {
    const data: SignInSuccessPayload = yield call(signInRequest, action.payload)
    yield put(signInSuccess(data))
  } catch (error: any) {
    yield put(signInFailure(error))
  }
}

export function* signInSaga() {
  yield takeEvery('signIn/signIn', signIn)
}
