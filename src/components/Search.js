import React,{useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { cleanList, fetchImages } from '../redux/list/listAction'
import {searchImage} from '../redux/search/searchAction'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
//import {fetchVideos} from './listActions'

const Search = () =>{

    const getsearchQuery= useSelector(state => state.searchReducer.searchQuery)
    const dispatch= useDispatch()

    const [searchQuery,setSearchQuery]=useState(getsearchQuery)

    const handleChange = (event)=>{
        setSearchQuery(event.target.value)
      }

      const handleClick = event =>{
          event.preventDefault()
          dispatch(cleanList());
          dispatch(searchImage(searchQuery))
          dispatch(fetchImages(searchQuery))
      }

    return(
        <div>
      <form>
      <TextField
          id="filled-full-width"
          label="Search here"
          style={{ margin: 8,paddingTop:"10px"}}
          placeholder="Search Something"
          helperText={searchQuery}
          fullWidth
          margin="normal"
          variant="filled"
          onChange={handleChange}
        />
        <Button variant="contained" color="primary" onClick={handleClick} style={{margin:8}}>
          Search
        </Button>
        {/* <input
          type="text"
          onChange={handleChange}
          placeholder="search"
        /> */}
        {/* <button onClick={handleClick}>Search</button> */}
      </form>
      {/* {searchQuery && <div>Latest For : {searchQuery}</div>} */}
    </div>
    )
    
}

export default Search