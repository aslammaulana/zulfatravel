import Image from "next/image";
import React from "react";
import ChooseCard from "./Choose";


const ChooseUs = () => {
    const woman = "/NawayaAssets/woman.png";

    return (
        <main className="w-full bg-[#f6f8fd] pt-[70px] pb-[50px]">
            <div className="w-full md:w-[87%] p-2 md:p-0 m-auto bg-[#f6f8fd] relative">
                {/* Title */}
                <div className="mb-5">
                    <p className="text-[16px] font-medium my-[-10px] text-center">
                        Why Choose Us
                    </p>
                    <h2 className="text-[30px] text-center md:text-[45px] font-bold font-teko my-4">
                        MENGAPA PARA JAMAAH MEMILIH KAMI?
                    </h2>
                </div>

                {/* Card */}
                <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-9 p-7">
                    <ChooseCard
                        image={woman}
                        title="Pembimbing Berpengalaman"
                        description="Kami bermitra dengan pembimbing berpengalaman untuk memastikan kenyamanan ibadah anda di Tanah Suci."
                    />
                    <ChooseCard
                        image={woman}
                        title="Perlengkapan Umroh Lengkap"
                        description="Kami Menyediakan semua perlengkapan umroh, mulai dari ihram, tas selempang, koper dan atribut lainnya."
                    />
                    <ChooseCard
                        image={woman}
                        title="Proses Cepat & Terjamin"
                        description="Semua proses pemesanan dapat dilakukakn lebih efisien dan efektif, baik melalui offline maupun online melalui gadget Anda."
                    />


                </div>
            </div>
        </main>
    );
};

export default ChooseUs;
