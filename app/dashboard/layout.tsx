'use client';

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import DashboardThemeProvider from './providers';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <DashboardThemeProvider>
      <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
        {/* Mobile sidebar */}
        <div className={`fixed inset-0 z-40 bg-gray-900/20 dark:bg-gray-900/70 transition-opacity md:hidden ${
          sidebarOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`} 
          onClick={() => setSidebarOpen(false)}
        />
        
        {/* Sidebar */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        
        {/* Main content */}
        <div className="flex flex-col flex-1 w-full overflow-hidden">
          <Navbar onMenuClick={() => setSidebarOpen(true)} />
          <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-gray-50 dark:bg-gray-900">
            {children}
          </main>
        </div>
      </div>
    </DashboardThemeProvider>
  );
}