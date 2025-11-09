import { createClient } from "@supabase/supabase-js";
import Image from "next/image";
import { notFound } from "next/navigation";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

type PageProps = {
  params: { slug: string };
};

export default async function UmrohDetailPage({ params }: PageProps) {
  const { slug } = params;

  // Jika id di DB bertipe number, ubah slug ke number
  const id = Number(slug);

  const { data, error } = await supabase
    .from("paket_umroh")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !data) {
    notFound(); // redirect ke 404
  }

  return (
    <main className="w-full py-10 px-5 md:px-0 flex justify-center bg-[#f6f8fd]">
      <div className="max-w-3xl bg-white rounded-[15px] p-6 shadow-md">
        <div className="relative w-full h-[250px] md:h-[400px] mb-5">
          <Image
            src={data.imagesrc}
            alt={data.title}
            fill
            className="object-cover rounded-[15px]"
          />
        </div>

        <h1 className="text-2xl md:text-3xl font-bold mb-2">{data.title}</h1>
        <p className="text-[#c72a2a] font-semibold text-lg mb-3">
          Rp {data.price.toLocaleString("id-ID")},-
        </p>

        <div className="text-sm text-[#555] space-y-1 mb-5">
          <p>Tanggal Keberangkatan: {data.date}</p>
          <p>Durasi: {data.duration}</p>
          <p>Maskapai: {data.airline}</p>
        </div>

        <p className="text-gray-700 leading-relaxed">
          Nikmati pengalaman ibadah umroh dengan pelayanan terbaik dan bimbingan
          sesuai Al-Qur’an dan Sunnah. Hubungi kami untuk informasi lebih lanjut.
        </p>

        <a
          href="https://wa.me/6281234567890?text=Assalamualaikum,%20saya%20ingin%20mendaftar%20paket%20umroh%20ini"
          target="_blank"
          className="mt-6 inline-block bg-[#418064] hover:bg-[#2b5844] text-white font-semibold py-3 px-6 rounded-full text-sm"
        >
          Daftar Sekarang
        </a>
      </div>
    </main>
  );
}
