import React from "react"
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import './styles/search.less'

const { Search } = Input;

const history = [
  'react',
  'angular',
  'vue',
  'node',
  'antd',
  'typescript',
  'webpack',
  'babel',
  'es6',
  'eslint',
]

const SearchPage: React.FC = () => {
  return <>
    <div className="search-container py-2 px-2">
      <div className="search-input">
        <Input
          variant="filled"
          suffix={<SearchOutlined />}
          placeholder="输入搜索..." />
      </div>
      <div className="search-context">
        <div className="sear-recommend text-sm text-gray-600 font-semibold mt-2">推荐搜索</div>
        <div className="sear-history p-1 flex flex-wrap">
          {
            history.map((item, index) => {
              return <div className="sear-item text-sm text-gray-600 px-2  mt-2" key={index}>{item}</div>
            })
          }
        </div>

        <div className="sear-content">
          {
            history.map((item, index) => {
              return <div className="sear-content-item sear-item text-base text-gray-800 py-1 font-semibold px-2  mt-2" key={index}>{item}</div>
            })
          }
        </div>
      </div>
    </div>
  </>
}


export default SearchPage
