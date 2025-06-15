import React, { useEffect } from "react";

import Navbar from '../componenets/Navbar.tsx';
import Menu from '../componenets/Menu.tsx';
import Footer from '../componenets/Footer.tsx';

export default function Faq() {
  useEffect(() => {
    document.title = 'FAQ | Sistem Pengajuan Proposal Mahasiswa';
  }, []);
  return (
    <div className=''>
      Faq
    </div>
  );
}