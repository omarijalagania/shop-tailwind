import React, { Fragment, useState } from 'react'
import { Popover, Transition, Menu } from '@headlessui/react'
import { Link } from 'react-router-dom'
import { Dialog, Tab } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import { MenuIcon, SearchIcon, ShoppingBagIcon } from '@heroicons/react/outline'
import LangList from '../../LangList/LangList'
import { navigation } from '../../utils/navigation'
import useTranslation from '../ ../../../hooks/useTranslation'
import Modal from '../../Modal/Modal'

function Nav() {
  const [open, setOpen] = useState(false)
  const { t, localeLang } = useTranslation()
  const [activeLang, setActiveLang] = useState(localeLang)
  const [isOpenModal, setIsOpenModal] = useState(false)

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  const openModal = () => {
    setIsOpenModal(true)
  }
  const closeModal = () => {
    setIsOpenModal(false)
  }

  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as='div'
          className='fixed inset-0 flex z-40 lg:hidden'
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter='transition-opacity ease-linear duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='transition-opacity ease-linear duration-300'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter='transition ease-in-out duration-300 transform'
            enterFrom='-translate-x-full'
            enterTo='translate-x-0'
            leave='transition ease-in-out duration-300 transform'
            leaveFrom='translate-x-0'
            leaveTo='-translate-x-full'
          >
            <div className='relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto'>
              <div className='px-4 pt-5 pb-2 flex'>
                <button
                  type='button'
                  className='-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400'
                  onClick={() => setOpen(false)}
                >
                  <span className='sr-only'>Close menu</span>
                  <XIcon className='h-6 w-6' aria-hidden='true' />
                </button>
              </div>

              {/* Links */}
              <Tab.Group as='div' className='mt-2'>
                <div className='border-b border-gray-200'>
                  <Tab.List className='-mb-px flex px-4 space-x-8'>
                    {navigation.categories.map((category) => (
                      <Tab
                        key={category.name}
                        className={({ selected }) =>
                          classNames(
                            selected
                              ? 'text-indigo-600 border-indigo-600'
                              : 'text-gray-900 border-transparent',
                            'flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium',
                          )
                        }
                      >
                        {category.name}
                      </Tab>
                    ))}
                  </Tab.List>
                </div>
                <Tab.Panels as={Fragment}>
                  {navigation.categories.map((category) => (
                    <Tab.Panel
                      key={category.name}
                      className='pt-10 pb-8 px-4 space-y-10'
                    >
                      <div className='grid grid-cols-2 gap-x-4'>
                        {category.featured.map((item) => (
                          <div
                            key={item.name}
                            className='group relative text-sm'
                          >
                            <div className='aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75'>
                              <img
                                src={item.imageSrc}
                                alt={item.imageAlt}
                                className='object-center object-cover'
                              />
                            </div>
                            <a
                              href={item.href}
                              className='mt-6 block font-medium text-gray-900'
                            >
                              <span
                                className='absolute z-10 inset-0'
                                aria-hidden='true'
                              />
                              {item.name}
                            </a>
                            <p aria-hidden='true' className='mt-1'>
                              ნახვა
                            </p>
                          </div>
                        ))}
                      </div>
                      {category.sections.map((section) => (
                        <div key={section.name}>
                          <p
                            id={`${category.id}-${section.id}-heading-mobile`}
                            className='font-medium text-gray-900'
                          >
                            {section.name}
                          </p>
                          <ul
                            role='list'
                            aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                            className='mt-6 flex flex-col space-y-6'
                          >
                            {section.items.map((item) => (
                              <li key={item.name} className='flow-root'>
                                <a
                                  href={item.href}
                                  className='-m-2 p-2 block text-gray-500'
                                >
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </Tab.Panel>
                  ))}
                </Tab.Panels>
              </Tab.Group>

              <div className='border-t border-gray-200 py-6 px-4 space-y-6'>
                {navigation.pages.map((page) => (
                  <div key={page.name} className='flow-root'>
                    <a
                      href={page.href}
                      className='-m-2 p-2 block font-medium text-gray-900'
                    >
                      {page.name}
                    </a>
                  </div>
                ))}
              </div>

              <div className='border-t border-gray-200 py-6 px-4 space-y-6'>
                <div className='flow-root'>
                  <a
                    href='#'
                    className='-m-2 p-2 block font-medium text-gray-900'
                  >
                    შესვლა
                  </a>
                </div>
                <div className='flow-root'>
                  <a
                    href='#'
                    className='-m-2 p-2 block font-medium text-gray-900'
                  >
                    რეგისტრაცია
                  </a>
                </div>
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>
      <nav
        aria-label='Top'
        className='z-20 bg-white bg-opacity-90 backdrop-filter backdrop-blur-xl fixed top-0 w-full'
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='h-16 flex items-center'>
            <button
              type='button'
              className='bg-white p-2 rounded-md text-gray-400 lg:hidden'
              onClick={() => setOpen(true)}
            >
              <span className='sr-only'>Open menu</span>
              <MenuIcon className='h-6 w-6' aria-hidden='true' />
            </button>

            {/* Logo */}
            <div className='ml-4 flex lg:ml-0'>
              <Link to='/'>
                <img className='h-8 w-auto' src='/images/logo.png' alt='' />
              </Link>
            </div>

            {/* Flyout menus */}
            <Popover.Group className='hidden lg:ml-8 lg:block lg:self-stretch'>
              <div className='h-full flex space-x-8'>
                {navigation.categories.map((category) => (
                  <Popover key={category.name} className='flex'>
                    {({ open }) => (
                      <>
                        <div className='relative flex'>
                          <Popover.Button
                            className={classNames(
                              open
                                ? 'border-indigo-600 text-indigo-600'
                                : 'border-transparent text-gray-700 hover:text-gray-800',
                              'relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px',
                            )}
                          >
                            {category.name}
                          </Popover.Button>
                        </div>

                        <Transition
                          as={Fragment}
                          enter='transition ease-out duration-200'
                          enterFrom='opacity-0'
                          enterTo='opacity-100'
                          leave='transition ease-in duration-150'
                          leaveFrom='opacity-100'
                          leaveTo='opacity-0'
                        >
                          <Popover.Panel className='absolute top-full inset-x-0 bg-white text-sm text-gray-500'>
                            {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                            <div
                              className='absolute inset-0 top-1/2 bg-white shadow'
                              aria-hidden='true'
                            />
                            {/* Fake border when menu is open */}
                            <div
                              className='absolute inset-0 top-0 h-px max-w-7xl mx-auto px-8'
                              aria-hidden='true'
                            >
                              <div
                                className={classNames(
                                  open ? 'bg-gray-200' : 'bg-transparent',
                                  'w-full h-px transition-colors ease-out duration-200',
                                )}
                              />
                            </div>

                            <div className='relative'>
                              <div className='max-w-7xl mx-auto px-8'>
                                <div className='grid grid-cols-2 gap-y-10 gap-x-8 py-16'>
                                  <div className='col-start-2 grid grid-cols-2 gap-x-8'>
                                    {category.featured.map((item) => (
                                      <div
                                        key={item.name}
                                        className='group relative text-base sm:text-sm'
                                      >
                                        <div className='aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75'>
                                          <img
                                            src={item.imageSrc}
                                            alt={item.imageAlt}
                                            className='object-center object-cover'
                                          />
                                        </div>
                                        <a
                                          href={item.href}
                                          className='mt-6 block font-medium text-gray-900'
                                        >
                                          <span
                                            className='absolute z-10 inset-0'
                                            aria-hidden='true'
                                          />
                                          {item.name}
                                        </a>
                                        <p aria-hidden='true' className='mt-1'>
                                          Shop now
                                        </p>
                                      </div>
                                    ))}
                                  </div>
                                  <div className='row-start-1 grid grid-cols-3 gap-y-10 gap-x-8 text-sm'>
                                    {category.sections.map((section) => (
                                      <div key={section.name}>
                                        <p
                                          id={`${section.name}-heading`}
                                          className='font-medium text-gray-900'
                                        >
                                          {section.name}
                                        </p>
                                        <ul
                                          role='list'
                                          aria-labelledby={`${section.name}-heading`}
                                          className='mt-6 space-y-6 sm:mt-4 sm:space-y-4'
                                        >
                                          {section.items.map((item) => (
                                            <li
                                              key={item.name}
                                              className='flex'
                                            >
                                              <a
                                                href={item.href}
                                                className='hover:text-gray-800'
                                              >
                                                {item.name}
                                              </a>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>
                ))}

                {/* {navigation.pages.map((page) => (
                  <a
                    key={page.name}
                    href={page.href}
                    className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    {page.name}
                  </a>
                ))} */}
              </div>
            </Popover.Group>

            <div className='ml-auto flex items-center'>
              <div className='hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6'>
                <a
                  href='#'
                  className='text-sm font-medium text-gray-700 hover:text-gray-800'
                >
                  {t('login')}
                </a>
                <span className='h-6 w-px bg-gray-200' aria-hidden='true' />
                <Link
                  to='/register'
                  className='text-sm font-medium text-gray-700 hover:text-gray-800'
                >
                  {t('register')}
                </Link>
              </div>

              {/* ################ LANGUAGE ################ */}

              <Menu as='div' className='hidden lg:ml-8 lg:flex'>
                <Menu.Button className='text-gray-700 hover:text-gray-800 flex items-center'>
                  <img
                    src={`/images/${activeLang}.png`}
                    alt=''
                    className='w-7 h-auto block flex-shrink-0'
                  />
                  <span className='sr-only'>, change currency</span>
                </Menu.Button>
                <button type='button' onClick={openModal} className='ml-3'>
                  Open
                </button>
                <Modal
                  title='Test Modal'
                  closeModal={closeModal}
                  isOpen={isOpenModal}
                >
                  <p>Content Goes Here!</p>
                </Modal>
                <Transition
                  as={Fragment}
                  enter='transition ease-out duration-100'
                  enterFrom='transform opacity-0 scale-95'
                  enterTo='transform opacity-100 scale-100'
                  leave='transition ease-in duration-55'
                  leaveFrom='transform opacity-100 scale-100'
                  leaveTo='transform opacity-0 scale-95'
                >
                  <Menu.Items>
                    <LangList setActiveLang={setActiveLang} />
                  </Menu.Items>
                </Transition>
              </Menu>

              {/* Search */}
              <div className='flex lg:ml-6'>
                <a href='#' className='p-2 text-gray-400 hover:text-gray-500'>
                  <span className='sr-only'>Search</span>
                  <SearchIcon className='w-6 h-6' aria-hidden='true' />
                </a>
              </div>

              {/* Cart */}
              <Menu as='div' className='ml-4 flow-root lg:ml-6'>
                <Menu.Button className='group -m-2 p-2 flex items-center'>
                  <ShoppingBagIcon
                    className='flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500'
                    aria-hidden='true'
                  />
                  <span className='ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800'>
                    0
                  </span>
                  <span className='sr-only'>items in cart, view bag</span>
                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter='transition ease-out duration-100'
                  enterFrom='transform opacity-0 scale-95'
                  enterTo='transform opacity-100 scale-100'
                  leave='transition ease-in duration-55'
                  leaveFrom='transform opacity-100 scale-100'
                  leaveTo='transform opacity-0 scale-95'
                >
                  <Menu.Items>
                    <div className='relative'>
                      <div className='absolute inset-0 -left-[9rem] top-6 max-w-full bg-white z-10'>
                        <div className='flex flex-col bg-white w-48 rounded-md p-4'>
                          <Menu.Item>
                            <div className='flex items-center justify-between'>
                              <div>1</div>
                              <p>One Item</p>
                              <div>remove</div>
                            </div>
                          </Menu.Item>
                          <Menu.Item>
                            <div className='flex items-center justify-between'>
                              <div>1</div>
                              <p>One Item</p>
                              <div>remove</div>
                            </div>
                          </Menu.Item>
                        </div>
                      </div>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Nav
