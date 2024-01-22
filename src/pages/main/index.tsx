

import React, { useEffect } from 'react'
import type { FC } from 'react'
import { TabBar, SafeArea } from 'antd-mobile'
import {
  Route,
  Routes,
  useNavigate,
  useLocation,
} from 'react-router-dom'
import {
  AppOutline,
  MessageOutline,
  UnorderedListOutline,
  UserOutline,
} from 'antd-mobile-icons'
import Notice from '@/pages/notice'
import Search from '@/pages/search'
import Publish from '@/pages/publish'
import Profile from '@/pages/profile'
import './main.less'
import queryString from 'query-string'
import config from '@/config'

const Bottom: FC = () => {
  const history = useNavigate()
  const location = useLocation()
  const { pathname } = location

  const setRouteActive = (value: string) => {
    history(value);
  }

  const tabs = [
    {
      key: '/publish',
      title: '首页',
      icon: <AppOutline />,
    },
    {
      key: '/search',
      title: '搜索',
      icon: <UnorderedListOutline />,
    },
    {
      key: '/notice',
      title: '消息',
      icon: <MessageOutline />,
    },
    {
      key: '/profile',
      title: '我的',
      icon: <UserOutline />,
    },
  ]

  return (
    <TabBar activeKey={pathname} onChange={value => setRouteActive(value)}>
      {tabs.map(item => (
        <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
      ))}
    </TabBar>
  )
}

const HomePage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // 检查 URL 中是否包含 code 参数
    const values = queryString.parse(location.search);
    console.log('values:', values);

    if (!values.code) {
      // 如果没有 code，重定向到微信授权 URL
      const redirectUri = encodeURIComponent(window.location.href);  //snsapi_userinfo
      window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${config.TestAppID}&redirect_uri=${redirectUri}&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect`;
    } else {
      // 如果有 code，你可以在这里添加获取 access_token 和 openid 的代码
      console.log('Code:', values.code);
      // ...
    }
  }, [location]);

  return (
    // <Router initialEntries={['/home']}>
    <div className="app">
      <div className="body">
        <Routes>
          <Route path="/publish" element={<Publish />} />
          <Route path="/search" element={<Search />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
      <div className="bottom">
        <Bottom />
      </div>
      <div style={{ background: '#ffcfac' }}>
        <SafeArea position='bottom' />
      </div>
    </div>
    // </Router>
  )
}






export default HomePage