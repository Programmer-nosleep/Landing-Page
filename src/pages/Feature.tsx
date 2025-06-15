import React, { useEffect } from 'react';

import Navbar from '../componenets/Navbar.tsx';
import Menu from '../componenets/Menu.tsx';
import Footer from '../componenets/Footer.tsx';

export default function Feature() {
  useEffect(() => {
    document.title = 'Home | Sistem Pengajuan Proposal Mahasiswa';
  }, []);
  return (
    <div className=''>
      
    </div>
  );
}