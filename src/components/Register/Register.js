import React, { useContext } from 'react'
import { ProductContext } from '../../context/productContext'
import useFormValidation from '../hooks/useFormValidation'
import useTranslation from '../hooks/useTranslation'
import formValidate from '../utils/formValidate'
import { useDebounce } from '../hooks/useDebounce'
export default function Register() {
  const [state, dispatch] = useContext(ProductContext)

  const initialState = {
    email: '',
    password: '',
    phone: '',
  }

  const {
    values,
    handleChange,
    handleSubmit,
    handleBlur,
    errors,
    isSubmitting,
  } = useFormValidation(initialState, formValidate)

  const { t } = useTranslation()

  const debouncedValue = useDebounce(values.email, 500)

  console.log('debouncedValue', debouncedValue)

  return (
    <div className='min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
      <div className='sm:mx-auto sm:w-full sm:max-w-md'>
        <img
          className='mx-auto h-12 w-auto'
          src='/images/logo.png'
          alt='Workflow'
        />
        <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
          {t('register')}
        </h2>
        <p className='mt-2 text-center text-sm text-gray-600'>
          Or{' '}
          <a
            href='#'
            className='font-medium text-indigo-600 hover:text-indigo-500'
          >
            Log In
          </a>
        </p>
      </div>

      <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
        <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
          <form onSubmit={handleSubmit} className='space-y-6'>
            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium text-gray-700'
              >
                Email address
              </label>
              <div className='mt-1'>
                <input
                  id='email'
                  name='email'
                  type='email'
                  value={state.email}
                  autoComplete='email'
                  onChange={(e) => {
                    handleChange(e)

                    dispatch({ type: 'SET_EMAIL', payload: e.target.value })
                  }}
                  onBlur={handleBlur}
                  className={`appearance-none ${
                    errors.email && 'border-red-500'
                  } block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                />
                {errors.email && <p className='text-red-500'>{errors.email}</p>}
              </div>
            </div>

            <div>
              <label
                htmlFor='password'
                className='block text-sm font-medium text-gray-700'
              >
                Password
              </label>
              <div className='mt-1'>
                <input
                  id='password'
                  name='password'
                  type='password'
                  value={values.password}
                  autoComplete='current-password'
                  onChange={(e) => {
                    handleChange(e)
                    dispatch({ type: 'SET_PASSWORD', payload: e.target.value })
                  }}
                  onBlur={handleBlur}
                  className={`appearance-none ${
                    errors.password && 'border-red-500'
                  } block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                />
                {errors.password && (
                  <p className='text-red-500'>{errors.password}</p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor='phone'
                className='block text-sm font-medium text-gray-700'
              >
                Phone
              </label>
              <div className='mt-1'>
                <input
                  id='phone'
                  name='phone'
                  placeholder='599-xx-xx-xx'
                  type='phone'
                  value={values.phone}
                  onChange={(e) => {
                    handleChange(e)
                    // dispatch({ type: 'SET_PASSWORD', payload: e.target.value })
                  }}
                  onBlur={handleBlur}
                  className={`appearance-none ${
                    errors.phone && 'border-red-500'
                  } block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                />
                {errors.phone && <p className='text-red-500'>{errors.phone}</p>}
              </div>
            </div>

            <div>
              <button
                disabled={isSubmitting}
                type='submit'
                className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                  isSubmitting ? 'bg-red-500 ' : 'bg-indigo-600'
                } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
              >
                {t('register')}
              </button>
            </div>
          </form>
          <div className='mt-6'>
            <div className='relative'>
              <div className='absolute inset-0 flex items-center'>
                <div className='w-full border-t border-gray-300' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
