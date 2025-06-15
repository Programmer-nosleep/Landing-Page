import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Users, Settings, Mail, HelpCircle } from "lucide-react";

import Logo from '../assets/react.svg';

interface SideMenuItem {
  label: string;
  icon?: React.ReactNode;
  href: string;
}

const menuItems: SideMenuItem[] = [
  { label: 'Home', icon: <Home size={18} />, href: '/' },
  { label: 'Feature', icon: <Users size={18} />, href: '/feature' },
  { label: 'About Us', icon: <Settings size={18} />, href: '/about-us' },
  { label: 'Contact', icon: <Mail size={18} />, href: '/contact' },
  { label: 'FAQ', icon: <HelpCircle size={18} />, href: '/faq' },
];

export default function Footer() {
  const location = useLocation();

  return (
    <footer className="bg-gray-100 border-t border-gray-300 py-10 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Kolom 1: Menu Navigasi */}
        <div>
          <h3 className="text-lg font-semibold text-blue-600 mb-4">Menu</h3>
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.href}
                  className={`flex items-center gap-2 text-sm hover:text-blue-600 transition ${
                    location.pathname === item.href ? 'text-blue-600 font-semibold' : 'text-gray-700'
                  }`}
                >
                  {item.icon}
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Kolom 2: Visi */}
        <div>
          <h3 className="text-lg font-semibold text-blue-600 mb-2">Visi</h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            Menjadi platform unggulan dalam mendukung digitalisasi administrasi kemahasiswaan
            yang efisien, transparan, dan mudah diakses oleh seluruh civitas akademika.
          </p>
        </div>

        {/* Kolom 3: Misi */}
        <div>
          <h3 className="text-lg font-semibold text-blue-600 mb-2">Misi</h3>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            <li>Menyediakan sistem pengajuan proposal yang user-friendly.</li>
            <li>Mempermudah proses persetujuan dan pelacakan.</li>
            <li>Mendukung pengurangan penggunaan dokumen fisik.</li>
            <li>Menjamin transparansi setiap tahap pengajuan.</li>
          </ul>
        </div>

        {/* Kolom 4: Logo dan Judul */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img src={Logo} alt="Logo" className="w-16 h-16 mb-2" />
          <h2 className="text-xl font-bold text-gray-800">
            Sistem Pengajuan Proposal
          </h2>
          <p className="text-gray-600 text-sm mt-1">
            Digitalisasi proses pengajuan proposal mahasiswa.
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Sistem Pengajuan Proposal Mahasiswa. All rights reserved.
      </div>
    </footer>
  );
}
