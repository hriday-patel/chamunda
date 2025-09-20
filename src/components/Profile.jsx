import Button from './Button';
import Navdropper from './Navdropper';
import Photo from './Photo';
import Profiledropper from './Profiledropper';

const Profile = () => {
  return (
    <div className="flex justify-center items-center gap-[10px]">
            <div className="flex justify-center items-center gap-[4px]">
              <button className="leading-normal tracking-normal text-slate-300 font-semibold bg-hriday/85 cursor-pointer hover:opacity-90 mt-2 px-2 py-1 rounded-sm shadow-md shadow-hriday hover:shadow-2xl transition-all">
                <span className="truncate">Get Started</span>
              </button>
              <div className="relative">
                <Button />
                <Navdropper />
              </div>
            </div>
              <div className='relative'>
                <Photo />
                <Profiledropper />
              </div>
          </div>
  )
}
export default Profile