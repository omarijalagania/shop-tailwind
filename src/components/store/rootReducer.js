import { combineReducers } from 'redux'
import { LanguageReducer } from './Language/LanguageReducer'

export const rootReducer = combineReducers({
  language: LanguageReducer,
})
