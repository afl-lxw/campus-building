import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.tsx'
import './index.css'
import { ConfigProvider } from "antd-mobile";
import zhCN from 'antd-mobile/es/locales/zh-CN'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider locale={zhCN}>
      <App />
    </ConfigProvider>
  </React.StrictMode>,

)
