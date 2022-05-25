import { put, call, takeEvery } from 'redux-saga/effects'
import { PayloadAction } from '@reduxjs/toolkit'
import {
  signUpFailure,
  SignUpPayload,
  signUpSuccess,
} from '../features/auth/authSlice'

const delay = (ms: number) => new Promise(res => setTimeout(res, ms))

export function* signUp(action: PayloadAction<SignUpPayload>) {
  try {
    yield call(delay, 2000)
    const data = {
      name: 'Evgeny',
      email: '1213@gmail.com',
      password: '123123123',
    }
    yield put(signUpSuccess(data))
  } catch (error: any) {
    yield put(signUpFailure(error.message))
  }
}

export function* signUpSaga() {
  yield takeEvery('auth/signUp', signUp)
}
