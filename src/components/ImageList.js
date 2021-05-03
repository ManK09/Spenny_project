import React from 'react'
import ImageItem from './ImageItem'

import {useSelector} from 'react-redux'

const ImageList = () =>{

    const fetchedImages=useSelector(state =>state.listReducer.images)
    //console.log(fetchedImages.length)

    return (
        <div>
          {/* {
            fetchedImages.map((image) => {
                //{console.log(video)}
              return (
                <ImageItem
                  fetchedimage={image}
                />
                
              );
            })
          } */}
          <ImageItem />
        </div>
    )
}
export default ImageList