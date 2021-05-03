import React from 'react';

import { ImageList } from '@material-ui/core';
import {ImageListItem} from '@material-ui/core';
import InfiniteScroll from "react-infinite-scroll-component";
import {useSelector,useDispatch} from 'react-redux'
import {fetchMoreImages,fetchImages} from '../redux/list/listAction'

function srcset(image, size, rows = 1, cols = 1) {
    return `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format 1x,
    ${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`;
  }


const ImageItem = () =>{

    const imageData=useSelector(state => state.listReducer.images);
    const getsearchQuery= useSelector(state => state.searchReducer.searchQuery);
    const fetchedimage=useSelector(state =>state.listReducer.images)
    console.log("suuun",fetchedimage)
    const dispatch= useDispatch()

    const fetchMoreData = ()=>{
        dispatch(fetchMoreImages(getsearchQuery))
    }
    //console.log(fetchedimage)
    return (
        <InfiniteScroll
          dataLength={imageData.length}
          next={fetchMoreData}
          hasMore={true}
          loader={<h1 style={{textAlign:"center"}}>Loading...</h1>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
        <ImageList
            sx={{ width:'100%', height: "100%" }}
            variant="quilted"
            cols={4}
            rowHeight={121}
        >
        {fetchedimage.map((item) => {
            //console.log(item)
            const url=`https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`
            let x=Math.floor(Math.random() * (2) ) + 1;
            let y=Math.floor(Math.random() * (2) ) + 1;
            //console.log("abe yrr",x,y)
            return(
            <ImageListItem key={url} cols={y} rows={x}>
            <img
                srcSet={srcset(url, 121, x, y)}
                alt={item.title}
                loading="lazy"
            />
            </ImageListItem>
        )})}
    </ImageList>
    </InfiniteScroll>
      );
}

export default ImageItem