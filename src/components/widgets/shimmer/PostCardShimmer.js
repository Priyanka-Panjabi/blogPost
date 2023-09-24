import React from 'react'
import "./PostCardShimmer.css"

const PostCardShimmer = () => {
  return (
    <>
     <div className='shimmer-postcard-parent'>
    {Array(9).fill(0).map(()=>(
       
            <div className='shimmer-card'>
                <div className='shimmer-card-img'></div>
                <div className='shimmer-card-text'></div>
            </div>
      
    ))}
         </div>
    </>
  )
}

export default PostCardShimmer