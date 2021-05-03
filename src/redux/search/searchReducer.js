import {SEARCH_IMAGE} from './searchType'


const initialState={
    searchQuery:''
}

const searchReducer = (state=initialState,action) =>{
    switch(action.type)
    {
        case SEARCH_IMAGE:{
            return{
                ...state,
                searchQuery:action.payload
            }
        }
        default: return state
    }
}

export default searchReducer