import React, { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
const PopOver = (props) => {
  return (
    <div className='w-full max-w-sm px-4 fixed top-16'>
      <Popover className='relative'>
        {({ open }) => (
          <>
            <Transition
              as={Fragment}
              enter='transition ease-out duration-200'
              enterFrom='opacity-0 translate-y-1'
              enterTo='opacity-100 translate-y-0'
              leave='transition ease-in duration-150'
              leaveFrom='opacity-100 translate-y-0'
              leaveTo='opacity-0 translate-y-1'
            >
              <Popover.Panel className='absolute z-10 w-screen max-w-sm px-4 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0 lg:max-w-3xl'>
                <div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5'>
                  <div className='relative grid gap-8 bg-white p-7 lg:grid-cols-2'>
                    {props.children}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  )
}

export default PopOver
