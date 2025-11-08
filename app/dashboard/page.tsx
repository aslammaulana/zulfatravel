"use client";

import { useState, useEffect } from "react";

type Paket = {
  id: number;
  title: string;
  price: number;
  date: string;
  duration: string;
  airline: string;
  imageSrc: string;
  link: string;
};

export default function Dashboard() {
  const [form, setForm] = useState({
    title: "",
    price: "",
    date: "",
    duration: "",
    airline: "",
    imageSrc: "",
    link: "",
  });

  const [loading, setLoading] = useState(false);
  const [paketList, setPaketList] = useState<Paket[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);

  // Ambil data paket
  const fetchPaket = async () => {
    const res = await fetch("/api/paket");
    const data = await res.json();
    setPaketList(data.data || []);
  };

  useEffect(() => {
    fetchPaket();
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    const method = editingId ? "PUT" : "POST";
    const url = editingId ? `/api/paket/${editingId}` : "/api/paket";

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const result = await res.json();
    setLoading(false);

    if (!result.success) {
      alert("Gagal menyimpan data: " + result.error);
    } else {
      alert("Data berhasil disimpan!");
      setForm({
        title: "",
        price: "",
        date: "",
        duration: "",
        airline: "",
        imageSrc: "",
        link: "",
      });
      setEditingId(null);
      fetchPaket();
    }
  }

  const handleEdit = (paket: Paket) => {
    setForm({
      title: paket.title,
      price: paket.price.toString(),
      date: paket.date,
      duration: paket.duration,
      airline: paket.airline,
      imageSrc: paket.imageSrc,
      link: paket.link,
    });
    setEditingId(paket.id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Apakah Anda yakin ingin menghapus paket ini?")) return;
    const res = await fetch(`/api/paket/${id}`, { method: "DELETE" });
    const result = await res.json();
    if (result.success) {
      alert("Data berhasil dihapus");
      fetchPaket();
    } else {
      alert("Gagal menghapus: " + result.error);
    }
  };

  return (
    <main className="p-6 max-w-3xl mx-auto bg-white rounded-lg shadow space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-4 text-center">
          {editingId ? "Edit Paket Umroh" : "Tambah Paket Umroh"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            placeholder="Judul Paket"
            className="w-full border p-2 rounded"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />
          <input
            type="number"
            placeholder="Harga"
            className="w-full border p-2 rounded"
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
          />
          <input
            type="text"
            placeholder="Tanggal"
            className="w-full border p-2 rounded"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
          />
          <input
            type="text"
            placeholder="Durasi"
            className="w-full border p-2 rounded"
            value={form.duration}
            onChange={(e) => setForm({ ...form, duration: e.target.value })}
          />
          <input
            type="text"
            placeholder="Maskapai"
            className="w-full border p-2 rounded"
            value={form.airline}
            onChange={(e) => setForm({ ...form, airline: e.target.value })}
          />
          <input
            type="text"
            placeholder="Link Gambar"
            className="w-full border p-2 rounded"
            value={form.imageSrc}
            onChange={(e) => setForm({ ...form, imageSrc: e.target.value })}
          />
          <input
            type="text"
            placeholder="Slug Link"
            className="w-full border p-2 rounded"
            value={form.link}
            onChange={(e) => setForm({ ...form, link: e.target.value })}
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700"
          >
            {loading ? "Menyimpan..." : editingId ? "Update" : "Simpan"}
          </button>
        </form>
      </div>

      {/* List paket */}
      <div>
        <h2 className="text-xl font-bold mb-3">Daftar Paket Umroh</h2>
        {paketList.length === 0 && <p className="text-center text-gray-500">Belum ada paket.</p>}
        <div className="space-y-3">
          {paketList.map((paket) => (
            <div
              key={paket.id}
              className="flex items-center justify-between border p-3 rounded shadow-sm"
            >
              <div>
                <p className="font-semibold">{paket.title}</p>
                <p className="text-sm text-gray-600">
                  {paket.date} | {paket.duration} | {paket.airline}
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(paket)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 text-sm"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(paket.id)}
                  className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 text-sm"
                >
                  Hapus
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
