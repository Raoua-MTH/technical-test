import React from "react";
import { TestimonialsCard } from "./TestimonialsCard";
import UserProfile1 from "@/public/images/user1.png";
import UserProfile2 from "@/public/images/user2.png";
import UserProfile3 from "@/public/images/user3.png";
import bgImage1 from "@/public/images/tem1.png";
import bgImage2 from "@/public/images/tem2.png";
import bgImage3 from "@/public/images/tem3.png";
import Image, { StaticImageData } from "next/image";
import ArrowIcon from "@/public/icons/arrowDir.svg"

type Client = {
    name: string;
    title: string;
    message: string;
    rating: number;
    image: StaticImageData | string;
    bgImage: StaticImageData | string
    ;
};

const clients: Client[] = [
    {
        name: "Bang Upin",
        title: "Pedagang Asongan",
        message:
            "“Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal“",
        rating: 4,
        image: UserProfile1,
        bgImage: bgImage1
    },
    {
        name: "Ibuk Sukijan",
        title: "Ibu Rumah Tangga",
        message:
            "“Makasih Panto, aku sekarang berasa tinggal di apartment karena barang-barang yang terlihat mewah“",
        rating: 4,
        image: UserProfile2,
        bgImage: bgImage2

    },
    {
        name: "Mpok Ina",
        title: "Karyawan Swasta",
        message:
            "“Sangat terjangkau untuk kantong saya yang tidak terlalu banyak“",
        rating: 4,
        image: UserProfile3,
        bgImage: bgImage3

    },
];

export const TestimonialsSection = () => {
    return (
        <div className="lg:mt-[255px] mt-20 lg:px-0 px-8">
            <div className="flex flex-col items-center">
                <div className="-ml-5 font-gilroy font-semibold tracking-[0.175em] text-panto-orange text-center text-[18px]">
                    TESTIMONIALS
                </div>

                <div className="-ml-5  font-gilroy font-bold mt-2 lg:text-[42px] text-[30px] text-panto-black text-center">
                    Our Client Reviews
                </div>

                <div className="mt-15 flex gap-10 flex-wrap justify-center relative">
                    <div className="flex xl:flex-row flex-col h-full   gap-10  items-center relative w-full ">
                        <div className="xl:flex hidden absolute z-20 h-[50px] -left-7  w-[50px]  items-center justify-center rounded-full  bg-white shadow-2xl">
                            <Image
                                src={ArrowIcon}
                                alt="arrow"
                                width={24}
                                height={24}
                                className="object-cover"
                                priority
                            />
                        </div>
                        <div className=" xl:flex hidden  z-20 rotate-180 absolute h-[50px] -right-7 w-[50px]  items-center justify-center rounded-full  bg-white shadow-2xl">
                            <Image
                                src={ArrowIcon}
                                alt="arrow"
                                width={24}
                                height={24}
                                className="object-cover"
                                priority
                            />
                        </div>
                        <>
                            {clients.map((client, index) => (
                                <TestimonialsCard
                                    key={index}
                                    rating={client.rating}
                                    subTitle={client.title}
                                    message={client.message}
                                    title={client.name}
                                    image={client.image}
                                    bgImage={client.bgImage}

                                />
                            ))}
                        </>
                    </div>
                </div>
            </div>
        </div>
    );
};
