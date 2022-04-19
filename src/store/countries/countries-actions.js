import {ALL_COUNTRIES} from '../../config';

export const SET_COUNTRIES = '@@countries/SET_COUNTRIES'
export const SET_LOADING = '@@countries/SET_LOADING'
export const SET_ERROR = '@@countries/SET_ERROR'

export const setCountriesAC = (countries) => ({
  type: SET_COUNTRIES,
  payload: countries
})

export const setLoadingAC = () => ({
  type: SET_LOADING
})

export const setErrorAC = (err) => ({
  type: SET_ERROR,
  payload: err
})

export const loadCountries = () => (dispatch, _, {client, api}) => {
  dispatch(setLoadingAC)

  client.get(api.ALL_COUNTRIES)
    .then(({data}) => dispatch(setCountriesAC(data)))
    .catch((err) => dispatch(setErrorAC(err.message)))
}
