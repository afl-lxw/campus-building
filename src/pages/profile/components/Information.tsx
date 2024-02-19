import userImg from '@/assets/imgs/user.jpg'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const Information: React.FC = () => {
  return <>
    <div className="information-container flex items-center px-4 py-2 ">
      <div className="user-img ">
        <img src={userImg} className='h-16 w-16 rounded-full' alt="" />
      </div>
      <div className="user-desc flex-1 ml-4 flex flex-col justify-between ">
        <div className='text-black text-base mb-2'>一缕暖阳照耀在身上</div>
        <div className='text-gray-400 text-sm'>河北大学北京分区之朝阳院校</div>
      </div>
      <div className="user-more">
        <FontAwesomeIcon icon={faAngleRight} size="lg" />
      </div>
    </div>
  </>
}

export default Information