import React, { Fragment } from 'react'
import { Transition, Menu } from '@headlessui/react'
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
    <div className='w-56 text-right fixed top-16'>
      <div className='relative inline-block'>
        <div className='absolute right-48 -top-10 w-10 py-4 px-2 flex flex-col items-center mt-2  bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
          <Icon
            className='mb-3'
            filename='ge'
            onClick={() => languageHandle('ge')}
          />

          <Icon filename='en' onClick={() => languageHandle('en')} />
        </div>
      </div>
    </div>
  )
}

export default LangList
