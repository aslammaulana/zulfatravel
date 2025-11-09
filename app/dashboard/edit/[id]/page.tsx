'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import UmrohForm from '@/components/UmrohForm';

export default function UpdatePaketPage() {
  const { id } = useParams();
  const router = useRouter();
  interface UmrohPackage {
    id?: string;
    title: string;
    price: number;
    date: string;
    duration: string;
    airline: string;
    imagesrc: string;
    link: string;
  }

  const [paket, setPaket] = useState<UmrohPackage | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPaket = async () => {
      try {
        const response = await fetch(`/api/paket?id=${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch package data');
        }
        const data = await response.json();
        if (data.length > 0) {
          // Ensure all required fields have values
          const packageWithDefaults = {
            id: data[0].id || '',
            title: data[0].title || '',
            price: data[0].price || 0,
            date: data[0].date || '',
            duration: data[0].duration || '',
            airline: data[0].airline || '',
            imagesrc: data[0].imagesrc || '',
            link: data[0].link || '',
          };
          setPaket(packageWithDefaults);
        } else {
          setError('Package not found');
        }
      } catch (err: any) {
        setError(err.message || 'An error occurred while fetching package data');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchPaket();
    }
  }, [id]);

  const handleSubmit = async (data: any) => {
    try {
      const response = await fetch('/api/paket', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...data, id }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to update package');
      }

      // Redirect to the list page after successful update
      router.push('/dashboard/paket');
      router.refresh();
    } catch (err: any) {
      console.error('Error updating package:', err);
      alert(err.message || 'An error occurred while updating the package');
    }
  };

  const handleCancel = () => {
    router.push('/dashboard/paket');
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <p className="text-red-500">{error}</p>
          <button 
            onClick={() => router.push('/dashboard/paket')}
            className="mt-4 px-4 py-2 text-sm text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
          >
            Kembali ke Daftar Paket
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Edit Paket Umroh</h1>
        <p className="mt-1 text-sm text-gray-500">
          Perbarui informasi paket umroh
        </p>
      </div>

      {paket ? (
        <UmrohForm 
          initialData={paket} 
          onSubmit={handleSubmit} 
          onCancel={handleCancel} 
        />
      ) : (
        <div className="text-center py-10">
          <p className="text-gray-500 dark:text-gray-400">Paket tidak ditemukan</p>
        </div>
      )}
    </div>
  );
}