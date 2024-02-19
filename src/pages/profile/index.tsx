import React from "react"
import Information from './components/Information';
import FllowComponents from './components/fllowOrStar'
import SettingMore from './components/settingMore';

const Profile: React.FC = () => {
  return <>
    <div className="py-3">
      <Information />
      <FllowComponents />
      <SettingMore />
    </div>
  </>
}


export default Profile
