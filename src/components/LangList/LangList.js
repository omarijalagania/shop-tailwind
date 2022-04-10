import React, { Fragment } from 'react'
import { Menu } from '@headlessui/react'
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
    <div className='w-full max-w-xs px-4 fixed top-16'>
      <div className='relative'>
        <div className='absolute z-10 px-4 mt-1 -left-[4.7rem]  sm:px-0 lg:max-w-3xl'>
          <div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5'>
            <div className='relative grid bg-white p-7 grid-cols-1'>
              <Menu.Item>
                {({ active }) => (
                  <Icon
                    className={` ${
                      active ? 'bg-gray-400' : ''
                    } mb-3 cursor-pointer`}
                    filename='ge'
                    onClick={() => {
                      languageHandle('ge')
                    }}
                  />
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Icon
                    className={` ${active ? 'bg-gray-400' : ''} cursor-pointer`}
                    filename='en'
                    onClick={() => {
                      languageHandle('en')
                    }}
                  />
                )}
              </Menu.Item>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LangList
