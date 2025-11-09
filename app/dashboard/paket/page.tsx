'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import UmrohCard from '@/components/UmrohCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, Plus } from 'lucide-react';

interface UmrohPackage {
  id: string;
  title?: string;
  price: number;
  date?: string;
  duration?: string;
  airline?: string;
  imagesrc?: string;
  link?: string;
}

export default function PaketListPage() {
  const [paketList, setPaketList] = useState<UmrohPackage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchPaketList = async () => {
      try {
        const response = await fetch('/api/paket');
        if (!response.ok) {
          throw new Error('Failed to fetch package data');
        }
        const data = await response.json();
        setPaketList(data);
      } catch (err: any) {
        setError(err.message || 'An error occurred while fetching packages');
        console.error('Error fetching packages:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPaketList();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm('Apakah Anda yakin ingin menghapus paket ini?')) {
      return;
    }

    try {
      const response = await fetch(`/api/paket?id=${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to delete package');
      }

      // Update the local state to remove the deleted item
      setPaketList(prev => prev.filter(paket => paket.id !== id));
    } catch (err: any) {
      console.error('Error deleting package:', err);
      alert(err.message || 'An error occurred while deleting the package');
    }
  };

  // Filter packages based on search term
  const filteredPaket = paketList.filter(paket => {
    const title = paket.title || '';
    const airline = paket.airline || '';
    const duration = paket.duration || '';
    
    return (
      title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      airline.toLowerCase().includes(searchTerm.toLowerCase()) ||
      duration.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-gray-500">Memuat daftar paket...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <p className="text-red-500">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 text-sm text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
          >
            Coba Lagi
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">Daftar Paket Umroh</h1>
          <p className="mt-1 text-sm text-gray-500">
            Kelola paket umroh Anda
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <Link
            href="/dashboard/add"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <Plus className="w-4 h-4 mr-2" />
            Tambah Paket
          </Link>
        </div>
      </div>

      {/* Search */}
      <Card className="bg-white dark:bg-gray-800">
        <CardContent className="pt-6">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="w-5 h-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Cari paket umroh..."
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md leading-5 bg-white dark:bg-gray-700 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </CardContent>
      </Card>

      {/* Package List */}
      {filteredPaket.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500">
            {searchTerm ? 'Tidak ada paket yang cocok dengan pencarian Anda.' : 'Belum ada paket umroh yang ditambahkan.'}
          </p>
          {!searchTerm && (
            <div className="mt-6">
              <Link
                href="/dashboard/add"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Tambah Paket Pertama
              </Link>
            </div>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPaket.map((paket) => (
            <UmrohCard 
              key={paket.id} 
              paket={paket} 
              onEdit={(id) => {
                // Logic to handle edit action
                window.location.href = `/dashboard/edit/${id}`;
              }}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}

      {/* Package Count */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-700">
          Menampilkan <span className="font-medium">{filteredPaket.length}</span> dari{' '}
          <span className="font-medium">{paketList.length}</span> paket
        </p>
      </div>
    </div>
  );
}