import React, { createContext, useState, useReducer } from 'react'

export const ProductContext = createContext()

const initialState = {
  products: [],
  email: '',
  password: '',
  product: [],
}

const Productreducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_PRODUCTS':
      return {
        ...state,
        products: action.payload,
      }
    case 'SET_EMAIL':
      return {
        ...state,
        email: action.payload,
      }
    case 'SET_PASSWORD': {
      return {
        ...state,
        password: action.payload,
      }
    }
    case 'FILTER_PRODUCT': {
      return {
        ...state,
        product: action.payload,
      }
    }

    default:
      return state
  }
}

export const ProductProvider = (props) => {
  // const [products, setProducts] = useState([]);
  const [state, dispatch] = useReducer(Productreducer, initialState)
  //wrap all children in ProductProvider
  return (
    <ProductContext.Provider value={[state, dispatch]}>
      {props.children}
    </ProductContext.Provider>
  )
}
