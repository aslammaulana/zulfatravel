'use client';

import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Edit3, Trash2, Eye, Clock, MapPin } from 'lucide-react';

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

interface UmrohCardProps {
  paket: UmrohPackage;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
}

export default function UmrohCard({ paket, onEdit, onDelete }: UmrohCardProps) {
  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  // Format date
  const formatDate = (dateString?: string) => {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  return (
    <Card className="overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-bold text-gray-900 dark:text-white">
            {paket.title || 'Paket Umroh'}
          </CardTitle>
        </div>
      </CardHeader>
      
      <CardContent className="pb-3">
        <div className="space-y-2">
          <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
            {formatCurrency(paket.price)}
          </div>
          <div className="flex items-center text-gray-600 dark:text-gray-300">
            <Clock className="w-4 h-4 mr-2" />
            <span>{paket.duration || 'Durasi belum ditentukan'}</span>
          </div>
          <div className="flex items-center text-gray-600 dark:text-gray-300">
            <MapPin className="w-4 h-4 mr-2" />
            <span>{formatDate(paket.date)}</span>
          </div>
          {paket.airline && (
            <div className="flex items-center text-gray-600 dark:text-gray-300">
              {/* Airline icon can be added here */}
              <span>Maskapai: {paket.airline}</span>
            </div>
          )}
        </div>
        
        {paket.imagesrc && (
          <div className="mt-4">
            <img 
              src={paket.imagesrc} 
              alt={paket.title || 'Paket Umroh'} 
              className="w-full h-40 object-cover rounded-md"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
          </div>
        )}
      </CardContent>
      
      <CardFooter className="flex justify-between pt-3 border-t border-gray-200 dark:border-gray-700">
        <Link href={`/umroh/${paket.id}`} className="mr-2">
          <Button variant="outline" size="sm">
            <Eye className="w-4 h-4 mr-1" />
            Lihat
          </Button>
        </Link>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={() => onEdit && onEdit(paket.id)}
          className="mr-2"
        >
          <Edit3 className="w-4 h-4 mr-1" />
          Edit
        </Button>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={() => onDelete && onDelete(paket.id)}
          className="text-red-600 border-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
        >
          <Trash2 className="w-4 h-4 mr-1" />
          Hapus
        </Button>
      </CardFooter>
    </Card>
  );
}