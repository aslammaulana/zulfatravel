'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import UmrohForm from '@/components/UmrohForm';

export default function AddPaketPage() {
  const router = useRouter();

  const handleSubmit = async (data: any) => {
    try {
      const response = await fetch('/api/paket', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to add package');
      }

      // Redirect to the list page after successful addition
      router.push('/dashboard/paket');
      router.refresh();
    } catch (err: any) {
      console.error('Error adding package:', err);
      alert(err.message || 'An error occurred while adding the package');
    }
  };

  const handleCancel = () => {
    router.push('/dashboard/paket');
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Tambah Paket Umroh Baru</h1>
        <p className="mt-1 text-sm text-gray-500">
          Tambahkan paket umroh baru ke sistem
        </p>
      </div>

      <UmrohForm onSubmit={handleSubmit} onCancel={handleCancel} />
    </div>
  );
}