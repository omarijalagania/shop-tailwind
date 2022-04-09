import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { locales } from '../locale/locales'
import { locale } from '../config/storage'
export default function useTranslation() {
  const lang = localStorage.getItem(locale)
  const { localeObj, activeLanguage } = useSelector((state) => state.language)

  const [localeLang, setLocaleLang] = useState(activeLanguage)

  useEffect(() => {
    if (!lang) {
      setLocaleLang(activeLanguage)
      localStorage.setItem(locale, activeLanguage)
    } else {
      setLocaleLang(lang)
    }
  }, [lang])

  function t(key) {
    if (localeObj) {
      if (!localeObj[key]) {
        console.warn(`No string '${key}' for locale '${locale}'`)
      }
      return localeObj[key]
    }
    localStorage.setItem(locale, locales?.[0].prefix)
    // window.location.reload();
    return localeObj[key]
  }

  return { t, localeLang, setLocaleLang }
}
