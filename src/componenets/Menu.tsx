import React from 'react';
import { Home, Settings, Users, Mail, HelpCircle } from 'lucide-react';
import { NavLink, useLocation } from 'react-router-dom';

interface SideMenuItem {
  label: string;
  icon: React.ReactNode;
  href: string;
}

const menuItems: SideMenuItem[] = [
  { label: 'Home', icon: <Home size={18} />, href: '/' },
  { label: 'Feature', icon: <Users size={18} />, href: '/feature' },
  { label: 'About Us', icon: <Settings size={18} />, href: '/about-us' },
  { label: 'Contact', icon: <Mail size={18} />, href: '/contact' },
  { label: 'FAQ', icon: <HelpCircle size={18} />, href: '/faq' },
];

export default function Menu() {
  const location = useLocation();

  return (
    <div className="hidden lg:flex justify-center border-b border-gray-200/50 bg-white w-full">
      <div className='flex justify-center border-b border-gray-200/50 bg-white lg:space-x-10 sm:display-none'>
        {menuItems.map((item, index) => {
          const isActive = location.pathname === item.href;
          return (
            <li key={index} className='list-none'>
              <NavLink
                to={item.href}
                className={`flex items-center gap-2 p-3 transition ${
                  isActive
                    ? 'border-b-2 border-blue-500 text-blue-700 font-semibold'
                    : 'text-gray-700 hover:bg-blue-50'
                }`}
              >
                {item.icon}
                {item.label}
              </NavLink>
            </li>
          );
        })}
      </div>
    </div>
  );
}
