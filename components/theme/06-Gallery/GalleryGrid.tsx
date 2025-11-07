"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaX } from "react-icons/fa6";

const images = [
  "/gallery/img1.jpeg",
  "/gallery/img2.jpeg",
  "/gallery/img3.jpeg",
  "/gallery/img4.jpeg",
  "/gallery/img5.jpeg",
  "/gallery/img6.jpeg",
  "/gallery/img7.jpeg",
];

export default function GalleryGrid() {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const nextImage = () => setIndex((prev) => (prev + 1) % images.length);
  const prevImage = () =>
    setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3 px-2">
      {images.map((src, i) => (
        <Dialog key={i} open={open && index === i} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <div
              onClick={() => {
                setIndex(i);
                setOpen(true);
              }}
              className="relative cursor-pointer overflow-hidden rounded-xl shadow hover:opacity-80 transition block break-inside-avoid"
            >
              <Image
                src={src}
                alt={`Gambar ${i + 1}`}
                width={600}
                height={400}
                className="w-full h-auto object-contain rounded-xl"
              />
            </div>
          </DialogTrigger>

          <DialogContent className="max-w-5xl bg-transparent border-none shadow-none flex justify-center items-center">
            <div className="relative w-full flex justify-center items-center">
              <button
                onClick={() => setOpen(false)}
                className="absolute top-2 right-2 bg-black/40 text-white p-2 rounded-full"
              >
                <FaX size={20} />
              </button>
              <button
                onClick={prevImage}
                className="absolute left-4 bg-black/40 text-white p-2 rounded-full"
              >
                <FaChevronLeft size={28} />
              </button>
              <AnimatePresence mode="wait">
                <motion.div
                  key={images[index]}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                >
                  <Image
                    src={images[index]}
                    alt="Preview"
                    width={1000}
                    height={1000}
                    className="w-auto h-[80vh] rounded-xl shadow-lg object-contain"
                  />
                </motion.div>
              </AnimatePresence>
              <button
                onClick={nextImage}
                className="absolute right-4 bg-black/40 text-white p-2 rounded-full"
              >
                <FaChevronRight size={28} />
              </button>
            </div>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
}
