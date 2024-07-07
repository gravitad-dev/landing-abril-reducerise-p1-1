import { BsJustify, BsXLg } from 'react-icons/bs';

import useNav from '../hooks/useNav';

import MenuDesktop from './MenuDesktop';
import MenuMobile from './MenuMobile';
import Logo from './ui/Logo';

const NavBar = () => {
  const { isOpen, handleIsOpen, hasScrolled } = useNav();

  return (
    <header
      className={`
 
      
      fixed top-0 left-0 w-full z-50
      px-5 flex justify-center items-center  
      h-header  
        
      text-apple-50
        bg-secondary
       `}
    >
      <div className='flex justify-between items-center w-full max-w-[1200px] h-[72px]'>
      <Logo />
      <button
        className='
        text-apple-50
        text-2xl cursor-pointer z-50  flex items-center justify-center md:hidden'
        onClick={handleIsOpen}
      >
        {isOpen ? <BsXLg /> : <BsJustify />}
      </button>
      <MenuMobile isOpen={isOpen} onClick={handleIsOpen} />
      <MenuDesktop />
      </div>
    </header>
  );
};
export default NavBar;
