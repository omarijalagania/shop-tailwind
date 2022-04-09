import { languages } from '../../locale/languages'
import { locale } from '../../config/storage'
export const CHANGE_LANGUAGE = 'language/CHANGE_LANGUAGE'

const defLang = 'ge'
const storageLang =
  localStorage.getItem(locale) === null ? defLang : localStorage.getItem(locale)

const initialState = {
  activeLanguage: storageLang,
  localeObj: languages[storageLang],
}

console.log(languages[storageLang])

export const LanguageReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LANGUAGE: {
      return {
        ...state,
        activeLanguage: action.payload,
        localeObj: languages[action.payload],
      }
    }
    default:
      return state
  }
}
