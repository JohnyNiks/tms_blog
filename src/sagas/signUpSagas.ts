import { put, call, takeEvery } from 'redux-saga/effects'
import { PayloadAction } from '@reduxjs/toolkit'
import {
  signUpFailure,
  SignUpPayload,
  signUpSuccess,
  SignUpSuccessPayload,
} from '../features/auth/authSlice'

const signUpRequest = async (
  payload: SignUpPayload
): Promise<SignUpSuccessPayload> => {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json;charset=utf-8',
  }
  const response = await fetch('https://studapi.teachmeskills.by/auth/users/', {
    method: 'POST',
    body: JSON.stringify(payload),
    headers,
  })

  const data = await response.json()

  if (!response.ok) {
    return Promise.reject(data)
  }

  return data as SignUpSuccessPayload
}

export function* signUp(action: PayloadAction<SignUpPayload>) {
  try {
    const data: SignUpSuccessPayload = yield call(signUpRequest, action.payload)
    yield put(signUpSuccess(data))
  } catch (error: any) {
    yield put(signUpFailure(error))
  }
}

export function* signUpSaga() {
  yield takeEvery('auth/signUp', signUp)
}
