import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// Inisialisasi Supabase dengan SERVICE ROLE KEY
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function GET() {
  try {
    const { data, error } = await supabase
      .from("paket_umroh")
      .select("*")
      .order("id", { ascending: true });

    if (error) return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    return NextResponse.json({ success: true, data });
  } catch (err) {
    console.error("GET /api/paket error:", err);
    return NextResponse.json({ success: false, error: "Terjadi kesalahan server." }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body: any = await req.json();
    const { title, price, date, duration, airline, imageSrc, link } = body;

    if (!title || !price || !date || !link) {
      return NextResponse.json(
        { success: false, error: "Field title, price, date, dan link wajib diisi." },
        { status: 400 }
      );
    }

    const { data, error } = await supabase.from("paket_umroh").insert([
      {
        title,
        price: Number(price),
        date,
        duration,
        airline,
        imagesrc: imageSrc || "",
        link,
      },
    ]);

    if (error) return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    return NextResponse.json({ success: true, data }, { status: 201 });
  } catch (err) {
    console.error("POST /api/paket error:", err);
    return NextResponse.json({ success: false, error: "Terjadi kesalahan server." }, { status: 500 });
  }
}

// Untuk PUT dan DELETE, gunakan route dinamis: /api/paket/[id]/route.ts
export async function PUT(req: Request) {
  try {
    const url = new URL(req.url);
    const id = url.pathname.split("/").pop();
    if (!id) return NextResponse.json({ success: false, error: "ID tidak ditemukan" }, { status: 400 });

    const body: any = await req.json();
    const { title, price, date, duration, airline, imageSrc, link } = body;

    const { data, error } = await supabase
      .from("paket_umroh")
      .update({
        title,
        price: Number(price),
        date,
        duration,
        airline,
        imagesrc: imageSrc || "",
        link,
      })
      .eq("id", Number(id));

    if (error) return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    return NextResponse.json({ success: true, data });
  } catch (err) {
    console.error("PUT /api/paket/[id] error:", err);
    return NextResponse.json({ success: false, error: "Terjadi kesalahan server." }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const url = new URL(req.url);
    const id = url.pathname.split("/").pop();
    if (!id) return NextResponse.json({ success: false, error: "ID tidak ditemukan" }, { status: 400 });

    const { data, error } = await supabase
      .from("paket_umroh")
      .delete()
      .eq("id", Number(id));

    if (error) return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    return NextResponse.json({ success: true, data });
  } catch (err) {
    console.error("DELETE /api/paket/[id] error:", err);
    return NextResponse.json({ success: false, error: "Terjadi kesalahan server." }, { status: 500 });
  }
}
