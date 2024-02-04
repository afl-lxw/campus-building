
import React from "react"
import '@/pages/discover/styles/list.less'
import userImg from '@/assets/imgs/user.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faHeart, faStar, faShare } from '@fortawesome/free-solid-svg-icons';
import { Input } from 'antd';

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
      <div>
        Our lives are streams,flowing into the same river, towards whatever heaven lies in the mist beyond the falls…Close your eyes, let the waters take you home.
      </div>
    </div>

    <div className="list-menu">
      <div className="user-comment">
        <Input placeholder="说点什么..." />
      </div>
      <div className="user-havior">
        <div className="havior user-like">
          <FontAwesomeIcon icon={faHeart} size="lg" />
          <span className="havior-num">11.1k</span>
        </div>
        <div className="havior user-star">
          <FontAwesomeIcon icon={faStar} size="lg" />
          <span className="havior-num">11.1k</span>


        </div>
        <div className="havior user-share">
          <FontAwesomeIcon icon={faShare} size="lg" />
          <span className="havior-num">11.1k</span>

        </div>
      </div>
    </div>
  </div>
}

export default DiscoverList

