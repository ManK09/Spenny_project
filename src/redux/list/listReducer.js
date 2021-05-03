import {FETCH_USERS_FAILURE,FETCH_USERS_SUCCESS,FETCH_USERS_REQUEST,
    FETCH_MORE_USERS_FAILURE,FETCH_MORE_USERS_SUCCESS,FETCH_MORE_USERS_REQUEST, CLEAR} from './listTypes'

const initialState = {
    loading: true,
    images: [],
    error: ''
}

const listReducer = (state = initialState, action) =>{
    switch(action.type){
        case FETCH_USERS_REQUEST:{
            return{
                ...state,
                loading:false
            }
        }
        case FETCH_USERS_SUCCESS:{
            let obj={...state};
            obj.error=''
            let x=[...action.payload]
            //console.log("ye bhi dekh",x);
            obj.images=x;
            //console.log("hoja yrr",obj.images)
            return obj;
            console.log("ye dekh",state.images);
            console.log("aur dekh",action.payload)
            return{
                ...state,
                images:action.payload,
                error:''
            }
        }
        case FETCH_USERS_FAILURE:{
            return{
                ...state,
                images:[],
                error:action.payload
            }
        }
        case FETCH_MORE_USERS_REQUEST:{
            return{
                ...state,
                loading:false
            }
        }
        case FETCH_MORE_USERS_SUCCESS:{
            let obj={...state};
            obj.error=''
            let x=[...obj.images,...action.payload]
            obj.images=x;
            return obj;
            // return{
            //     ...state,
            //     images:action.payload,
            //     error:''
            // }
        }
        case FETCH_MORE_USERS_FAILURE:{
            return{
                ...state,
                images:[],
                error:action.payload
            }
        }
        case CLEAR:{
            return{
                ...state,
                images:[]
            }
        }
        default: return state
    }
}

export default listReducer