// data/umrohList.ts
export type UmrohPackage = {
  title: string;
  price: number;
  date: string;
  duration: string;
  airline: string;
  imageSrc: string;
  link: string;
};

export const umrohList: UmrohPackage[] = [
  {
    title: "Umroh Qurani Paket Firdaus 2025",
    price: 29800000,
    date: "10 November 2024",
    duration: "Durasi 12 Hari",
    airline: "Batik Air",
    imageSrc: "/images/flyer1.jpg",
    link: "/umroh/umroh-qurani-november",
  },
  {
    title: "Umroh Keluarga Spesial November 2025",
    price: 31500000,
    date: "5 Desember 2024",
    duration: "Durasi 10 Hari",
    airline: "Garuda Indonesia",
    imageSrc: "/images/flyer2.jpg",
    link: "/umroh/umroh-desember",
  },
  {
    title: "Umroh Awal Tahun 2026",
    price: 31500000,
    date: "5 Desember 2024",
    duration: "Durasi 10 Hari",
    airline: "Garuda Indonesia",
    imageSrc: "/images/flyer2.jpg",
    link: "/umroh/umroh-desember",
  },
 
];
