import React, { useEffect } from 'react';

import Navbar from '../componenets/Navbar.tsx';
import Menu from '../componenets/Menu.tsx';
import Footer from '../componenets/Footer.tsx';

import AboutUsContent from '../componenets/content/AboutUsContent.tsx';

export default function About() {
  useEffect(() => {
    document.title = 'About | Sistem Pengajuan Proposal Mahasiswa';
  }, []);
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <Menu />

      <div className='flex-1'>
        <AboutUsContent />
      </div>


    </div>
  );
}