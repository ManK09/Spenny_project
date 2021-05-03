import {SEARCH_IMAGE} from './searchType'

 export const searchImage = (videoQuery) =>{
    return{
        type:SEARCH_IMAGE,
        payload:videoQuery
    }
}

export default searchImage