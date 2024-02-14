
import React from "react"
import '@/pages/discover/styles/list.less'
import userImg from '@/assets/imgs/user.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faHeart, faStar, faShare } from '@fortawesome/free-solid-svg-icons';
import { Input } from 'antd';
import { Skeleton } from 'antd-mobile'

const ImgList : string[] = [
  'https://picsum.photos/id/1018/600/300',
  'https://picsum.photos/id/1015/300/300',
  'https://picsum.photos/id/1019/600/300',
  'https://picsum.photos/id/1010/400/300',
  'https://picsum.photos/id/1020/300/300',
  'https://picsum.photos/id/1013/300/300',
  'https://picsum.photos/id/1022/300/400',
  'https://picsum.photos/id/1012/300/300',
  'https://picsum.photos/id/1011/500/200',
]

const tagsList = [
  '#风景',
  '#乌托邦',
  '#人生笔记'
]

type ListTypeProps = {
  data: any
}

const DiscoverList: React.FC<ListTypeProps> = (props) => {
  return <div className="list-container w-full bg-white">
    <div className=" list-header" >
      <div className="user-img">
        <img className="img" src={userImg} alt="" />
      </div>
      <div className="user-desc">
        <div className="name">Mitchell Ryrie{props.data}</div>
        <div className="organization">中国传媒大学</div>
      </div>
      <div className="user-menu">
        <FontAwesomeIcon icon={faEllipsis} size="lg" />
      </div>
    </div>

    <div className="context">
      <div className="context-copywriting">
        Our lives are streams,flowing into the same river, towards whatever heaven lies in the mist beyond the falls…Close your eyes, let the waters take you home.
      </div>
      {/* <Skeleton.Paragraph lineCount={3} animated  /> */}
      <div className="context-img-list">
        {/* {
          ImgList.map((item: string, index: number) => {
            return <img className="context-img" src={item} key={index} alt="" />
          })
        } */}
        <img className="context-img-only" src={ImgList[0]}  alt="" />
      </div>
    </div>

    <div className="tags">
      {
        tagsList.map((item: string, index: number) => {
          return <div className="tag" key={index}>{item}</div>
        })
      }
    </div>

    <div className="list-menu">
      <div className="user-comment">
        <Input placeholder="说点什么..." />
      </div>
      <div className="user-havior px-1">
        <div className="havior user-like">
          <FontAwesomeIcon icon={faHeart} size="sm" />
          <span className="havior-num">11.1k</span>
        </div>
        <div className="havior user-star">
          <FontAwesomeIcon icon={faStar} size="sm" />
          <span className="havior-num">11.1k</span>
        </div>
        <div className="havior user-share">
          <FontAwesomeIcon icon={faShare} size="sm" />
          <span className="havior-num">11.1k</span>
        </div>
      </div>
    </div>
  </div>
}

export default DiscoverList

