'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, PlusCircle, List, BarChart3, Settings, X } from 'lucide-react';

type SidebarProps = {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
};

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: Home },
  { name: 'Tambah Paket', href: '/dashboard/add', icon: PlusCircle },
  { name: 'List Paket', href: '/dashboard/paket', icon: List },
  { name: 'Laporan', href: '/dashboard/reports', icon: BarChart3 },
  { name: 'Pengaturan', href: '/dashboard/settings', icon: Settings },
];

export default function Sidebar({ sidebarOpen, setSidebarOpen }: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Background overlay for mobile */}
      <div
        className={`fixed inset-0 z-20 bg-gray-600/75 transition-opacity lg:hidden ${
          sidebarOpen ? 'block' : 'hidden'
        }`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 z-30 w-64 bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 ease-in-out overflow-y-auto lg:translate-x-0 lg:static lg:inset-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Close button for mobile */}
        <div className="absolute top-4 right-4 lg:hidden">
          <button
            onClick={() => setSidebarOpen(false)}
            className="p-1 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex items-center h-16 px-4 border-b border-gray-200 dark:border-gray-700">
          <Link href="/dashboard" className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
            ZulfaTravel
          </Link>
        </div>
        
        <nav className="px-2 mt-5">
          <div className="space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group flex items-center px-4 py-3 text-sm font-medium rounded-md ${
                    item.href === pathname
                      ? 'bg-indigo-100 text-indigo-900 dark:bg-indigo-900/30 dark:text-indigo-100'
                      : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                  }`}
                  onClick={() => setSidebarOpen(false)}
                >
                  <Icon className={`mr-3 h-5 w-5 ${
                    item.href === pathname
                      ? 'text-indigo-500 dark:text-indigo-400'
                      : 'text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-300'
                  }`} />
                  {item.name}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </>
  );
}