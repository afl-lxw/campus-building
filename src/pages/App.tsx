// App.tsx
import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom'
import Main from '@/pages/main'
import Login from '@/pages/login'
import Notice from '@/pages/notice'
import Search from '@/pages/search'
import Publish from '@/pages/publish'
import Profile from '@/pages/profile'
import LoginPage from '@/pages/login'
import Discover from '@/pages/discover'
import DiscoverDetail from '@/pages/discoverDetail'
import { useAuth } from '@/hooks' // <- 这是一个示例hooks，你可以在这里处理你的认证逻辑

const App: React.FC = () => {
  const isAuthenticated = useAuth() // <- 这会返回一个布尔值来决定用户是否已经认证

  if (!isAuthenticated) {
    // 如果用户未认证，重定向他到登录页面
    return <Login>{/* 敬请自定义你的登录组件 */}</Login>
  }

  // 如果用户已认证，渲染你的路由组件
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path='discover/:id' element={<DiscoverDetail />} />  // 设置为顶级路由
        <Route path='*' element={<Main />}>
          <Route path='search' element={<Search />}>
          </Route>
          <Route path='profile' element={<Profile />}>
          </Route>
          <Route path='notice' element={<Notice />}>
          </Route>
          <Route path='publish' element={<Publish />}>
          </Route>
          <Route path='discover' element={<Discover />}>
          </Route>
        </Route>
      </Routes>
    </Router>
  )
}

export default App