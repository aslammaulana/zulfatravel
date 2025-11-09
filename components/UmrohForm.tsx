'use client';

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface UmrohFormProps {
  initialData?: {
    id?: string;
    title: string;
    price: number;
    date: string;
    duration: string;
    airline: string;
    imagesrc: string;
    link: string;
  };
  onSubmit: (data: any) => void;
  onCancel: () => void;
}

export default function UmrohForm({ initialData, onSubmit, onCancel }: UmrohFormProps) {
  const [formData, setFormData] = useState({
    id: initialData?.id || '',
    title: initialData?.title || '',
    price: initialData?.price || 0,
    date: initialData?.date || '',
    duration: initialData?.duration || '',
    airline: initialData?.airline || '',
    imagesrc: initialData?.imagesrc || '',
    link: initialData?.link || '',
  });
  
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'price' ? Number(value) : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      await onSubmit(formData);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full bg-white dark:bg-gray-800">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
          {initialData ? 'Edit Paket Umroh' : 'Tambah Paket Umroh Baru'}
        </CardTitle>
        <CardDescription className="text-gray-500 dark:text-gray-400">
          {initialData 
            ? 'Perbarui informasi paket umroh' 
            : 'Tambahkan paket umroh baru ke sistem'}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="title">Judul Paket</Label>
              <Input
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                placeholder="Contoh: Paket Umroh Reguler"
                className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="price">Harga (Rp)</Label>
              <Input
                id="price"
                name="price"
                type="number"
                value={formData.price}
                onChange={handleChange}
                required
                min="0"
                placeholder="Contoh: 25000000"
                className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="date">Tanggal Keberangkatan</Label>
              <Input
                id="date"
                name="date"
                type="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="duration">Durasi</Label>
              <Input
                id="duration"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                required
                placeholder="Contoh: 9 Hari"
                className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="airline">Maskapai</Label>
              <Input
                id="airline"
                name="airline"
                value={formData.airline}
                onChange={handleChange}
                placeholder="Nama maskapai"
                className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="imagesrc">URL Gambar</Label>
              <Input
                id="imagesrc"
                name="imagesrc"
                value={formData.imagesrc}
                onChange={handleChange}
                placeholder="URL gambar paket"
                className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
              />
            </div>
            
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="link">Link Pemesanan</Label>
              <Input
                id="link"
                name="link"
                value={formData.link}
                onChange={handleChange}
                placeholder="Link untuk pemesanan paket"
                className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
              />
            </div>
          </div>
          
          <div className="flex justify-end space-x-3 pt-4">
            <Button 
              type="button" 
              variant="outline" 
              onClick={onCancel}
            >
              Batal
            </Button>
            <Button 
              type="submit" 
              disabled={loading}
            >
              {loading ? 'Menyimpan...' : (initialData ? 'Perbarui' : 'Simpan')}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}