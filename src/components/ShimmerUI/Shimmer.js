import React from 'react';
import "./shimmer.css"

const Shimmer = () => {
    return Array(20).fill(0).map((n,i)=> (
        <div key={i} className="main-container">
          <div className='shimmerJobCard'>
    
          </div>
        </div>
      ))
}

export default Shimmer
