import React from "react"
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
const { Search } = Input;


const SearchPage: React.FC = () => {
  return <>
    <div className="py-2 px-2">
      <Input
        variant="filled"
        suffix={<SearchOutlined />}
        placeholder="输入搜索..." />
    </div>
  </>
}


export default SearchPage
