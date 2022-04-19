export const SET_SEARCH = '@@controls/SET_SEARCH'
export const SET_REGION = '@@controls/SET_REGION'
export const CLEAR_CONTROLS = '@@controls/CLEAR_CONTROLS'

export const setSearchAC = (search) => ({
  type: SET_SEARCH,
  payload: search,
})

export const setRegionAC = (region) => ({
  type: SET_REGION,
  payload: region,
})

export const clearControlsAC = () => ({
  type: CLEAR_CONTROLS,
})