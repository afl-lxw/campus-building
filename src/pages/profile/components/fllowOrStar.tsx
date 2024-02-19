import userImg from '@/assets/imgs/user.jpg'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const FllowComponents: React.FC = () => {
  return <>
    <div className="fllow-container flex items-center px-4 py-2 bg-slate-200">
      <div className='px-1 py-1'>
        <div className='text-black font-semibold'>123</div>
        <div>关注</div>
      </div>
      <div className=''>
        粉丝
      </div>
      <div className=''>
        点赞
      </div>
      <div className=''></div>
    </div>
  </>
}

export default FllowComponents