import React from "react"
import { NavBar, } from 'antd-mobile'

// https://open.weixin.qq.com/connect/oauth2/authorize?appid=APPID&redirect_uri=REDIRECT_URI&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect

const Discover: React.FC = () => {
  return <div
    className="discover-container "
  >    
    <NavBar
      back={null}
    >
      主页面
    </NavBar>
    <h1>Discover</h1>
  </div>
}


export default Discover
