import { CHANGE_LANGUAGE } from './LanguageReducer'
import { locale } from '../../config/storage'
export const changeLanguage = (key) => {
  return (dispatch) => {
    localStorage.setItem(locale, key)
    dispatch({
      type: CHANGE_LANGUAGE,
      payload: key,
    })
  }
}
