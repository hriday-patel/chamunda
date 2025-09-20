import Logo from './Logo';
import Navbar from './Navbar';
import Profile from './Profile';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-slate-400/20 whitespace-nowrap backdrop-blur-xl">
        <div className="container mx-auto flex justify-between items-center py-2 gap-[10px]">
          <Logo />
          <Navbar />
          <Profile />
        </div>
      </header>
  )
}
export default Header