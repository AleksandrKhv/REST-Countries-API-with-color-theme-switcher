import {filterByCode} from '../../config';
import {searchByCountry} from '../../config';

export const SET_LOADING = '@@details/SET_LOADING'
export const SET_ERROR = '@@details/SET_ERROR'
export const SET_COUNTRY = '@@details/SET_COUNTRY'
export const CLEAR_DETAILS = '@@details/CLEAR_DETAILS'
export const SET_NEIGHBORS = '@@details/SET_NEIGHBORS'

const setLoadingAC = () => ({
  type: SET_LOADING
})

const setErrorAC = (err) => ({
  type: SET_ERROR,
  payload: err
})

const setCountryAC = (country) => ({
  type: SET_COUNTRY,
  payload: country
})

const setNeighborsAC = (countries) => ({
  type: SET_NEIGHBORS,
  payload: countries
})

export const clearDetailsAC = () => ({
  type: CLEAR_DETAILS
})

export const loadCountryByNameThunk = (name) => (dispatch, _, {client, api}) => {
  dispatch(setLoadingAC())

  client.get(api.searchByCountry(name))
    .then(({data}) => dispatch(setCountryAC(data[0])))
    .catch((err) => dispatch(setErrorAC(err.message)))
}

export const loadNeighborsByBorderThunk = (borders) => (dispatch, _, {client, api}) => {
  client.get(api.filterByCode(borders))
    .then(({data})=> dispatch(setNeighborsAC(data.map((c)=> c.name))))
    .catch(console.error)
}