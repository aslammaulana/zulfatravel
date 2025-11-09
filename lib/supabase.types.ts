export type PaketUmroh = {
  id: number;
  title: string;
  price: number;
  date: string;
  duration: string;
  airline: string | null;
  imagesrc: string | null;
  link: string | null;
  created_at: string;
};

export type Database = {
  public: {
    Tables: {
      paket_umroh: {
        Row: PaketUmroh;
        Insert: {
          id?: number;
          title: string;
          price: number;
          date: string;
          duration: string;
          airline?: string | null;
          imagesrc?: string | null;
          link?: string | null;
          created_at?: string;
        };
        Update: {
          id?: number;
          title?: string;
          price?: number;
          date?: string;
          duration?: string;
          airline?: string | null;
          imagesrc?: string | null;
          link?: string | null;
          created_at?: string;
        };
      };
    };
  };
};
