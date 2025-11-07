import Image from 'next/image'
import React from 'react'

const Profile = () => {

    const logoSrc = "/NawayaAssets/AcehNawaya.png";

    const listProduk1 = "/NawayaAssets/listproduk1.png";
    const listProduk2 = "/NawayaAssets/listproduk2.png";
    const listProduk3 = "/NawayaAssets/listproduk3.png";
    const listProduk4 = "/NawayaAssets/listproduk4.png";

    const data = [
        [
            { image: listProduk4, title: "Umroh" },
            { image: listProduk3, title: "Tour Ziarah" },
        ],
        [
            { image: listProduk4, title: "Umroh" },
            { image: listProduk3, title: "Tour Ziarah" },
        ],
    ];

    return (
        <div>
            <div className="relative w-[100%] md:w-[87%] p-2 md:p-0 mx-auto flex flex-col md:flex-row items-start justify-between gap-10 py-10 md:py-20 ">

                {/* Kolom kiri */}
                <div className="flex flex-col gap-6 text-center md:text-left basis-[40%]">
                    <div className="relative flex justify-center items-center w-full">
                        <Image
                            src={logoSrc}
                            alt="Logo Nawaya Haromain"
                            width={600}
                            height={600}
                            className="object-contain w-auto max-w-[100%] md:max-w-[95%] h-auto"
                            priority
                        />
                    </div>
                </div>

                {/* Kolom kanan */}
                <div className="flex flex-col justify-baseline items-start basis-[60%]  md:mb-0 ">
                    {/* 1 */}
                    <div className="flex flex-col
                     ">
                        <p className="text-[16px] font-medium my-[-10px]">
                            Pasti Berangkat-nya!
                        </p>
                        <h2 className="text-[30px] md:text-[45px] font-bold font-teko my-4">
                            NAWAYA HAROMAIN
                        </h2>
                    </div>

                    {/* 2 */}
                    <div className="flex flex-col justify-center gap-3 border-l-3 border-[#d19f4f] p-6 shadow-lg mb-[38px] ">
                        <p className="text-[16px] font-medium ">
                            Nawaya Haromain Travel sebagai biro layanan umroh di Kota Banda Aceh, memfasilitasi keberangkatan anda beserta keluarga menuju tanah suci
                        </p>
                        <p className="text-[16px] font-medium ">
                            Umroh Penuh Kesan dengan Tadabbur Al-Quran
                        </p>
                    </div>

                    {/* 3 */}
                    <div className="flex flex-col md:flex-row justify-start items-center  ">
                        {/* A1 */}
                        <div className=" flex flex-col justify-start items-center border-l-3 border-dashed border-[#c5913e8e] basis-[100%] md:basis-[50%] gap-[15px] pl-6 p-2">
                            {/* AB1 */}
                            <div className="flex justify-center items-center gap-4 ">
                                <div className="flex justify-center items-center bg-[#edf2fb] rounded-lg basis-[20%] md:basis-[26%]" >
                                    <Image
                                        src={listProduk4}
                                        alt="List2"
                                        width={600}
                                        height={600}
                                        className="object-contain w-auto max-w-[100%] md:max-w-[95%] h-auto"
                                        priority
                                    />
                                </div>
                                <p className="text-[16px] font-medium basis-[70%]">
                                    Umroh
                                </p>
                            </div>

                            {/* AB2 */}
                            <div className="flex justify-center items-center gap-4 ">
                                <div className="flex justify-center items-center bg-[#edf2fb] rounded-lg basis-[20%] md:basis-[26%]" >
                                    <Image
                                        src={listProduk3}
                                        alt="List2"
                                        width={600}
                                        height={600}
                                        className="object-contain w-auto max-w-[100%] md:max-w-[95%] h-auto"
                                        priority
                                    />
                                </div>
                                <p className="text-[16px] font-medium basis-[70%]">
                                    Tour Ziarah
                                </p>
                            </div>
                        </div>
                        {/* A1 */}
                        <div className=" flex flex-col justify-start items-center border-l-3 border-dashed border-[#c5913e8e] basis-[100%] md:basis-[50%] gap-[15px] pl-6 p-2">
                            {/* AB1 */}
                            <div className="flex justify-center items-center gap-4 ">
                                <div className="flex justify-center items-center bg-[#edf2fb] rounded-lg basis-[20%] md:basis-[26%]" >
                                    <Image
                                        src={listProduk2}
                                        alt="List2"
                                        width={600}
                                        height={600}
                                        className="object-contain w-auto max-w-[100%] md:max-w-[95%] h-auto"
                                        priority
                                    />
                                </div>
                                <p className="text-[16px] font-medium basis-[70%]">
                                    Pengurusan Visa
                                </p>
                            </div>

                            {/* AB2 */}
                            <div className="flex justify-center items-center gap-4 ">
                                <div className="flex justify-center items-center bg-[#edf2fb] rounded-lg basis-[20%] md:basis-[26%]" >
                                    <Image
                                        src={listProduk1}
                                        alt="List2"
                                        width={600}
                                        height={600}
                                        className="object-contain w-auto max-w-[100%] md:max-w-[95%] h-auto"
                                        priority
                                    />
                                </div>
                                <p className="text-[16px] font-medium basis-[70%]">
                                    Pemesanan Hotel
                                </p>
                            </div>
                        </div>



                    </div>

                </div>

            </div>
        </div>
    )
}

export default Profile