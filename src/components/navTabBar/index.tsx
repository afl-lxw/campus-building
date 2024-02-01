
import {
  AppOutline,
  MessageOutline,
  SearchOutline,
  UserOutline,
} from 'antd-mobile-icons'
import {
  useNavigate,
  useLocation,
} from 'react-router-dom'
import type { FC } from 'react'
import { TabBar,  } from 'antd-mobile'

const TabBarBottom: FC = () => {
  const history = useNavigate()
  const location = useLocation()
  const { pathname } = location

  const setRouteActive = (value: string) => {
    history(value);
  }

  const tabs = [
    {
      key: '/discover',
      title: '首页',
      icon: <AppOutline />,
    },
    {
      key: '/search',
      title: '搜索',
      icon: <SearchOutline />,
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


export default TabBarBottom