import React from "react"
import { NavBar, } from 'antd-mobile'

import DiscoverList from './components/List'

// https://open.weixin.qq.com/connect/oauth2/authorize?appid=APPID&redirect_uri=REDIRECT_URI&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect

const Discover: React.FC = () => {
  return <div
    className="discover-container "
  >    
    {/* <NavBar
      back={null}
    >
      主页面
    </NavBar> */}
   <div className="discover-container">
      {
        [1, 2, 3, 4, 5, 6, 7, 8, 9].map((item: number) => <DiscoverList data={item} /> )
      }
   </div>
  </div>
}


export default Discover
