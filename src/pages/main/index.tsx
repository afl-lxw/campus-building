

import React from 'react'
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