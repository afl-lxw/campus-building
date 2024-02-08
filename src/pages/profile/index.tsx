import React from "react"
import Information from './components/Information';
import FllowComponents from './components/fllowOrStar'

const Profile: React.FC = () => {
  return <>
    <div>
      <Information />
      <FllowComponents />
    </div>
  </>
}


export default Profile
