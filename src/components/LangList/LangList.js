import React from 'react'
import { useDispatch } from 'react-redux'
import { changeLanguage } from '../store/Language/action'
import Icon from '../Icon'
const LangList = ({ setActiveLang }) => {
  const dispatch = useDispatch()

  const languageHandle = (lang) => {
    dispatch(changeLanguage(lang))
    setActiveLang(lang)
  }

  return (
    <div className='flex flex-col border-2 items-center rounded relative bg-white p-4 right-12 top-14'>
      <Icon
        className='mb-3'
        filename='ge'
        onClick={() => languageHandle('ge')}
      />
      <Icon filename='en' onClick={() => languageHandle('en')} />
    </div>
  )
}

export default LangList
