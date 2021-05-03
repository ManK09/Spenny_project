import React,{useEffect} from 'react'
import Search from './components/Search'
import ImageList from './components/ImageList'
import {useSelector,useDispatch} from 'react-redux'
import { fetchImages } from './redux/list/listAction'
export default function HomePage() {

    const dispatch= useDispatch()
    const imageData=useSelector(state => state.listReducer)

    useEffect(()=>{
        dispatch(fetchImages(""))

    },[])

    return (
        <div>
            <Search />
            <ImageList />
        </div>
    )
}
