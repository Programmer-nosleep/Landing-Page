import React, { useEffect } from "react";

import Navbar from '../componenets/Navbar.tsx';
import Menu from '../componenets/Menu.tsx';
import Footer from '../componenets/Footer.tsx';

import FAQContent from "../componenets/content/FAQContent.tsx";

export default function Faq() {
  useEffect(() => {
    document.title = 'FAQ | Sistem Pengajuan Proposal Mahasiswa';
  }, []);
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <Menu />
      <div className="flex-1">
        <FAQContent />
      </div>
    </div>
  );
}