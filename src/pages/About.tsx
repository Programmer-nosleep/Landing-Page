import React, { useEffect } from 'react';

import Navbar from '../componenets/Navbar.tsx';
import Menu from '../componenets/Menu.tsx';
import Footer from '../componenets/Footer.tsx';

export default function About() {
  useEffect(() => {
    document.title = 'About | Sistem Pengajuan Proposal Mahasiswa';
  }, []);
  return (
    <div className=''>
      About
    </div>
  );
}