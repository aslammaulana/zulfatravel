'use client';

import React from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';

type NavbarProps = {
  onMenuClick: () => void;
};

export default function Navbar({ onMenuClick }: NavbarProps) {
  return (
    <header className="sticky top-0 z-10 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between h-16 px-4 sm:px-6">
        {/* Mobile menu button */}
        <div className="flex items-center">
          <button
            onClick={onMenuClick}
            className="p-2 mr-4 text-gray-500 rounded-md lg:hidden hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none"
          >
            <span className="sr-only">Open sidebar</span>
            <Menu className="w-6 h-6" aria-hidden="true" />
          </button>
          <Link href="/dashboard" className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
            ZulfaTravel
          </Link>
        </div>

        {/* Right section */}
        <div className="flex items-center space-x-4">
          {/* In dashboard, theme toggle is not needed as it's always dark */}
          
          <div className="relative">
            <button className="p-1 text-gray-500 rounded-full hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none">
              <span className="sr-only">View notifications</span>
              {/* Notification icon can be added here */}
            </button>
          </div>
          
          <div className="relative">
            <button className="flex items-center max-w-xs text-sm rounded-full focus:outline-none">
              <span className="sr-only">Open user menu</span>
              <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-indigo-800 dark:text-indigo-200 font-medium">
                U
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}