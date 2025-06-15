import React, { useState } from 'react';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';

import Button from './Button';
import SideMenu from './SideMenu';

interface NavbarProps {
  activeMenu?: string;
}

export default function Navbar({activeMenu = ""}: NavbarProps) {
  const [openSideMenu, setOpenSideMenu] = useState(false);
  return (
    <div className='flex justify-between item-center gap-5 bg-white border-b border-gray-200/50 backdrop-blur-[2px] py-5 px-7 sticky top-0 z-30'>
      <h2 className='text-xl font-semibold text-black'>Logo</h2> 
      <Button className='block lg:hidden text-black cursor-pointer' onClick={() => setOpenSideMenu(!openSideMenu)}>
        {openSideMenu ? (
          <HiOutlineX className='text-2xl' />
        ) : (
          <HiOutlineMenu className='text-2xl' />
        )}
      </Button>
      {openSideMenu && (
        <div className='fixed top-[61px] -ml-4 bg-gray-50'>
          <SideMenu activeMenu={activeMenu} />
        </div>
      )}
    </div>
  );
}
