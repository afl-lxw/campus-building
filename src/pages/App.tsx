// App.tsx
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Main from '@/pages/main'
import Login from '@/pages/login'
import Notice from '@/pages/notice'
import Search from '@/pages/search'
import Publish from '@/pages/publish'
import Profile from '@/pages/profile'
import LoginPage from '@/pages/login'

import { useAuth } from '@/hooks' // <- 这是一个示例hooks，你可以在这里处理你的认证逻辑

const App: React.FC = () => {
  const isAuthenticated = useAuth() // <- 这会返回一个布尔值来决定用户是否已经认证

  if (isAuthenticated) {
    // 如果用户未认证，重定向他到登录页面
    return <Login>{/* 敬请自定义你的登录组件 */}</Login>
  }

  // 如果用户已认证，渲染你的路由组件
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        <Route path='*' element={<Main />}>
          {/* 在这里添加 'Home' 页面的子路由 */}
          <Route path='search' element={<Search />}>
            {/* 在这里添加 'NavTab' 页面的子路由 */}
          </Route>
          <Route path='profile' element={<Profile />}>
            {/* 在这里添加 'SearchNavTab' 页面的子路由 */}
          </Route>
          <Route path='notice' element={<Notice />}>
            {/* 在这里添加 'MessageNavTab' 页面的子路由 */}
          </Route>
          <Route path='publish' element={<Publish />}>
            {/* 在这里添加 'publish' 页面的子路由 */}
          </Route>
        </Route>

      </Routes>
    </Router>

 
  )
}

export default App