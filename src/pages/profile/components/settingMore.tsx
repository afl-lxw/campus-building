import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faShieldHalved, 
  faGear, 
  faMobilePhone,
  faBell,
  faCompass
} from '@fortawesome/free-solid-svg-icons';

const SettingData = [
  {
    name: '更多设置',
    icon: <FontAwesomeIcon icon={faGear} size="lg" />,
    path: '/setting/more',
  },
  {
    name: '高级认证',
    icon: <FontAwesomeIcon icon={faShieldHalved} size="lg" />,
    path: '/setting/more',
  },
  {
    name: '联系客服',
    icon: <FontAwesomeIcon icon={faMobilePhone} size="lg" />,
    path: '/setting/more',
  },
  {
    name: '联系我们',
    icon: <FontAwesomeIcon icon={faBell} size="lg" />,
    path: '/setting/more',
  },
  {
    name: '关于我们',
    icon: <FontAwesomeIcon icon={faCompass} size="lg" />,
    path: '/setting/more',
  },
]


const SettingMore: React.FC = () => {
  return <>
    <div>
      {
        SettingData.map((item, index) => {
          return <div
             key={index} 
             className="flex items-center p-3 hover:bg-gray-100 rounded-lg">
              {item.icon}
              <span className="ml-3 text-sm font-medium text-gray-700">{item.name}</span>
          </div>
        })
      }
    </div>
  </>
}




export default SettingMore;