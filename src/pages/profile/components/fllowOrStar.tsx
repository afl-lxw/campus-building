import userImg from '@/assets/imgs/user.jpg'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const FllowComponents: React.FC = () => {
  return <>
    <div className="fllow-container flex items-center px-4 py-2 ">
      <div className='px-1 py-1 flex-1 flex flex-col items-center'>
        <div className='text-black font-semibold text-lg'>123</div>
        <div className='fllow-title text-gray-500 pt-2 text-xs'>关注</div>
      </div>
      <div className='px-1 py-1 flex-1 flex flex-col items-center'>
        <div className='text-black font-semibold text-lg'>123</div>
        <div className='fllow-title text-gray-500 pt-2 text-xs'>关注</div>
      </div>
      <div className='px-1 py-1 flex-1 flex flex-col items-center'>
        <div className='text-black font-semibold text-lg'>123</div>
        <div className='fllow-title text-gray-500 pt-2 text-xs'>关注</div>
      </div>

    </div>
  </>
}

export default FllowComponents