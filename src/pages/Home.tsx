import React, { useEffect } from 'react';

import Navbar from '../componenets/Navbar.tsx';
import Menu from '../componenets/Menu.tsx';
import HomeContent from '../componenets/content/HomeContent.tsx';
import Footer from '../componenets/Footer.tsx';

export default function Home() {
  useEffect(() => {
    document.title = 'Home | Sistem Pengajuan Proposal Mahasiswa';
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Menu />
      
      {/* HomeContent yang akan mengisi sisa tinggi */}
      <div className="flex-1">
        <HomeContent />
      </div>


    </div>
  );
}

