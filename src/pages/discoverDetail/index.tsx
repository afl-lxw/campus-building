import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

type DetailsTypes = {
  data?: string|number
}

const DiscoverDetail: React.FC<DetailsTypes> = (props) => {
  const { id } = useParams();
  return <div
    className="details-container "
  >    
   <div className="details-container">
      详情{props.data}
   </div>
  </div>
}
export default DiscoverDetail
