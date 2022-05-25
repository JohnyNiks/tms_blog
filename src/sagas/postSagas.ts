import { put, call, takeEvery } from 'redux-saga/effects'
import { PayloadAction } from '@reduxjs/toolkit'
import { getPostFailure, getPostSuccess, Post } from '../features/posts'

export function* getPost(action: PayloadAction<number>) {
  try {
    const response: Response = yield call(() =>
      fetch(`https://studapi.teachmeskills.by/blog/posts/${action.payload}`)
    )
    const data: Post = yield response.json()
    yield put(getPostSuccess(data))
  } catch (error: any) {
    yield put(getPostFailure(error.message))
  }
}

export function* postSaga() {
  yield takeEvery('posts/getPost', getPost)
}
