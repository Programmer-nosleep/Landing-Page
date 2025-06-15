import React from 'react';
import { Home, Settings, Users, Mail, HelpCircle } from 'lucide-react';
import { NavLink, useLocation } from 'react-router-dom';

interface SideMenuItem {
  label: string;
  icon: React.ReactNode;
  href: string;
}

interface SideMenuProps {
  activeMenu?: string;
}

const menuItems: SideMenuItem[] = [
  { label: 'Home', icon: <Home size={18} />, href: '/' },
  { label: 'Feature', icon: <Users size={18} />, href: '/feature' },
  { label: 'About Us', icon: <Settings size={18} />, href: '/about-us' },
  { label: 'Contact', icon: <Mail size={18} />, href: '/contact' },
  { label: 'FAQ', icon: <HelpCircle size={18} />, href: '/faq' },
];

export default function SideMenu({ activeMenu = "" }: SideMenuProps) {
  const location = useLocation();

  return (
    <aside className="w-64 h-[calc(100vh-61px)] bg-white border-l border-t border-gray-200/50 backdrop-blur-[2px] fixed top-[68px] right-0 z-30">
      <nav className="mt-15">
        <ul className="space-y-0">
          {menuItems.map((item, index) => {
            const isActive = location.pathname === item.href;
            return (
              <li key={index}>
                <NavLink
                  to={item.href}
                  className={`flex items-center gap-3 p-3 transition ${
                    isActive
                      ? 'bg-blue-100 text-blue-700 font-semibold'
                      : 'text-gray-700 hover:bg-blue-50'
                  }`}
                >
                  {item.icon}
                  {item.label}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
