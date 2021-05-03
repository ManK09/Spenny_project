import {combineReducers} from 'redux'
import searchReducer from './search/searchReducer'
import listReducer from './list/listReducer'

const rootReducer = combineReducers({
    searchReducer:searchReducer,
    listReducer:listReducer
})

export default rootReducer