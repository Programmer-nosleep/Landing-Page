import React, { useEffect } from 'react';

import Navbar from '../componenets/Navbar.tsx';
import Menu from '../componenets/Menu.tsx';
import Footer from '../componenets/Footer.tsx';

export default function Contact() {
  useEffect(() => {
    document.title = 'Contact | Sistem Pengajuan Proposal Mahasiswa';
  }, []);
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <Menu />
      <Footer />
    </div>
  );
}