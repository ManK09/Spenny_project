import axios from 'axios'
import {FETCH_USERS_FAILURE,FETCH_USERS_SUCCESS,FETCH_USERS_REQUEST,
    FETCH_MORE_USERS_FAILURE,FETCH_MORE_USERS_SUCCESS,FETCH_MORE_USERS_REQUEST, CLEAR} from './listTypes'


export const fetchImageRequest= () =>{
    return{
        type:FETCH_USERS_REQUEST
    }
}

export const fetchImageSuccess = images =>{
    return{
        type:FETCH_USERS_SUCCESS,
        payload:images
    }
}

export const fetchImageFailure = error =>{
    return{
        type:FETCH_USERS_FAILURE,
        payload:error
    }
}

export const fetchImages = (searchQuery) =>{
    return (dispatch) =>{
        dispatch(fetchImageRequest())

        axios.get("https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=e52a287d86469bf01ea901dfd92cf8a5"+ 
        "&text=" +
        searchQuery +
        "&media=photos&per_page=12&page=1&format=json&nojsoncallback=1")
        .then(response =>{
            console.log("sahi")
            const images = response.data.photos.photo
            //console.log("ohh",images)
            dispatch(fetchImageSuccess(images))
           
        })
        .catch(error =>{
            const errorMsg = error.message
            dispatch(fetchImageFailure(errorMsg))
        })
    }
}


export const fetchMoreImageRequest= () =>{
    return{
        type:FETCH_MORE_USERS_REQUEST
    }
}

export const fetchMoreImageSuccess = videos =>{
    return{
        type:FETCH_MORE_USERS_SUCCESS,
        payload:videos
    }
}

export const fetchMoreImageFailure = error =>{
    return{
        type:FETCH_MORE_USERS_FAILURE,
        payload:error
    }
}

export const fetchMoreImages = (searchQuery) =>{
    return (dispatch) =>{
        dispatch(fetchMoreImageRequest())

        axios.get("https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=e52a287d86469bf01ea901dfd92cf8a5"+ 
        "&text=" +
        searchQuery +
        "&media=photos&per_page=12&page=1&format=json&nojsoncallback=1")
        .then(response =>{
            //console.log("sahi")
            const images = response.data.photos.photo
            //console.log("ohh",images)
            dispatch(fetchMoreImageSuccess(images))
           
        })
        .catch(error =>{
            const errorMsg = error.message
            dispatch(fetchMoreImageFailure(errorMsg))
        })
    }
}


export const cleanList = ()=>{
    return{
        type:CLEAR
    }
}

// axios.get("https://youtube.googleapis.com/youtube/v3/search?q=" +
        // searchQuery +
        // "&part=snippet" +
        // "&key=AIzaSyDHoeogaijfkf0GSX4NEG7vFuBq_840foE")