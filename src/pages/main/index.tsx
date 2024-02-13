

import React, { useEffect } from 'react'
import {  SafeArea } from 'antd-mobile'
import {
  Route,
  Routes,
  useLocation,
} from 'react-router-dom'
import TabBarBottom from '@/components/navTabBar'
import Notice from '@/pages/notice'
import Search from '@/pages/search'
import Profile from '@/pages/profile'
import Discover  from '@/pages/discover'
import './main.less'
import queryString from 'query-string'
import config from '@/config'



const HomePage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const values = queryString.parse(location.search);

    if (!values.code) {
      const redirectUri = encodeURIComponent(window.location.href);  //snsapi_userinfo   snsapi_base
      window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${config.TestAppID}&redirect_uri=${redirectUri}&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect`;
    } else {
      console.log('Code:', values.code);
    }
  }, [location]);

  return (
    // <Router initialEntries={['/home']}>
    <div className="app">
      <div className="body">
        <Routes>
          <Route path="/discover" element={<Discover />} />
          <Route path="/search" element={<Search />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
      <div className='nav'>
        <div className="bottom">
          <TabBarBottom />
        </div>
        <div style={{ background: '#FFFFFF' }}>
          <SafeArea position='bottom' />
        </div>
      </div>
    </div>
    // </Router>
  )
}






export default HomePage