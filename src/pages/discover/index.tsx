import React, { useState } from 'react'
import { PullToRefresh, List, InfiniteScroll } from 'antd-mobile'
import { sleep } from 'antd-mobile/es/utils/sleep'
import DiscoverList from './components/List'

// https://open.weixin.qq.com/connect/oauth2/authorize?appid=APPID&redirect_uri=REDIRECT_URI&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect

function getNextData() {
  const ret: string[] = []
  for (let i = 0; i < 4; i++) {
    ret.unshift('i')
  }
  return ret
}

const Discover: React.FC = () => {
  const [data, setData] = useState(() => getNextData())
  const [hasMore, setHasMore] = useState(true)
  async function loadMore() {
    const append = await mockRequest()
    setData(val => [...val, ...append])
    setHasMore(append.length > 0)
  }



  return <div
    className="discover-container "
  >    
    {/* <NavBar
      back={null}
    >
      主页面
    </NavBar> */}
   <div className="discover-container">
      <PullToRefresh
        onRefresh={async () => {
          await sleep(1000)
          setData([...getNextData(), ...data])
        }}
      >
        <List style={{ minHeight: '100vh' }}>
          {data.map((item: any, index: number) => (
            <DiscoverList data={index} ></DiscoverList>
          ))}
        </List>
        <InfiniteScroll loadMore={loadMore} hasMore={hasMore} />
      </PullToRefresh>
   </div>
  </div>
}


export default Discover


function mockRequest() {
  let randomNumbers: string[] = [];
  for (let i = 0; i < 10; i++) {
    randomNumbers.push(String(Math.floor(Math.random() * 100))); // 随机生成0-99之间的正整数
  }
  return randomNumbers;
}

