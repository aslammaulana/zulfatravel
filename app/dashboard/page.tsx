'use client';

import React from 'react';
import Link from 'next/link';
import { Package, Users, CreditCard, Calendar, BarChart3 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CiSettings } from 'react-icons/ci';
import { BiBarChart } from 'react-icons/bi';

export default function DashboardPage() {
  // Mock data for dashboard statistics
  const stats = [
    {
      title: 'Total Paket',
      value: '24',
      icon: Package,
      color: 'text-blue-500',
      bgColor: 'bg-blue-100 dark:bg-blue-900/30',
    },
    {
      title: 'Pemesanan',
      value: '142',
      icon: Users,
      color: 'text-green-500',
      bgColor: 'bg-green-100 dark:bg-green-900/30',
    },
    {
      title: 'Pendapatan',
      value: 'Rp 2.4M',
      icon: CreditCard,
      color: 'text-purple-500',
      bgColor: 'bg-purple-100 dark:bg-purple-900/30',
    },
    {
      title: 'Jadwal Bulan Ini',
      value: '5',
      icon: Calendar,
      color: 'text-orange-500',
      bgColor: 'bg-orange-100 dark:bg-orange-900/30',
    },
  ];

  return (
    <div className="space-y-6 text-white">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">Dashboard</h1>
          <p className="mt-1 text-sm text-gray-500">
            Selamat datang di panel administrasi ZulfaTravel
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <Link
            href="/dashboard/add"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Tambah Paket Baru
          </Link>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="bg-white dark:bg-gray-800">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardDescription className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  {stat.title}
                </CardDescription>
                <div className={`${stat.bgColor} p-3 rounded-full`}>
                  <Icon className={`h-6 w-6 ${stat.color}`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Recent Activity Section */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card className="bg-white dark:bg-gray-800">
          <CardHeader>
            <CardTitle className="text-lg font-medium text-gray-900">Paket Terbaru</CardTitle>
            <CardDescription className="text-sm text-gray-500">
              Daftar paket umroh terbaru yang telah ditambahkan
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Mock recent packages */}
              <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">Paket Umroh Reguler</p>
                  <p className="text-sm text-gray-500">Rp 25.000.000</p>
                </div>
                <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 rounded-full">
                  Aktif
                </span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">Paket Umroh VIP</p>
                  <p className="text-sm text-gray-500">Rp 35.000.000</p>
                </div>
                <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 rounded-full">
                  Aktif
                </span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">Paket Umroh Hemat</p>
                  <p className="text-sm text-gray-500">Rp 18.000.000</p>
                </div>
                <span className="px-2 py-1 text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300 rounded-full">
                  Tidak Aktif
                </span>
              </div>
            </div>
            <div className="mt-4">
              <Link
                href="/dashboard/paket"
                className="text-sm font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
              >
                Lihat semua paket →
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-gray-800">
          <CardHeader>
            <CardTitle className="text-lg font-medium text-gray-900">Aktivitas Terbaru</CardTitle>
            <CardDescription className="text-sm text-gray-500">
              Aktivitas pemesanan dan pembayaran terbaru
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Mock recent activities */}
              <div className="flex items-start">
                <div className="flex-shrink-0 pt-1">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">
                    Paket Umroh Reguler dipesan oleh Bapak Ahmad
                  </p>
                  <p className="text-xs text-gray-500">2 menit yang lalu</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 pt-1">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">
                    Pembayaran paket VIP sebesar Rp 35.000.000 diterima
                  </p>
                  <p className="text-xs text-gray-500">1 jam yang lalu</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 pt-1">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">
                    Paket Umroh Hemat diperbarui
                  </p>
                  <p className="text-xs text-gray-500">3 jam yang lalu</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions Section */}
      <Card className="bg-white dark:bg-gray-800">
        <CardHeader>
          <CardTitle className="text-lg font-medium text-gray-900">Aksi Cepat</CardTitle>
          <CardDescription className="text-sm text-gray-500">
            Akses cepat ke fitur utama
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <Link
              href="/dashboard/add"
              className="flex flex-col items-center justify-center p-4 text-center bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <Package className="w-8 h-8 text-indigo-600 dark:text-indigo-400 mb-2" />
              <span className="text-sm font-medium text-gray-900">Tambah Paket</span>
            </Link>
            <Link
              href="/dashboard/paket"
              className="flex flex-col items-center justify-center p-4 text-center bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <Users className="w-8 h-8 text-indigo-600 dark:text-indigo-400 mb-2" />
              <span className="text-sm font-medium text-gray-900">List Paket</span>
            </Link>
            <Link
              href="/dashboard/reports"
              className="flex flex-col items-center justify-center p-4 text-center bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <BiBarChart className="w-8 h-8 text-indigo-600 dark:text-indigo-400 mb-2" />
              <span className="text-sm font-medium text-gray-900">Laporan</span>
            </Link>
            <Link
              href="/dashboard/settings"
              className="flex flex-col items-center justify-center p-4 text-center bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <CiSettings className="w-8 h-8 text-indigo-600 dark:text-indigo-400 mb-2" />
              <span className="text-sm font-medium text-gray-900">Pengaturan</span>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}