"use client"
import { useState, useEffect } from "react";
import { Bars2Icon, ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import ChartIcon from "@/public/icons/Bag.svg"
export default function Header() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`w-full text-white fixed top-0 left-0 z-50 transition-colors duration-300 ${scrolled ? "bg-black/10 backdrop-blur-xs  border-b border-white/20 lg:h-[90px] h-[60px]  " : "bg-transparent "
                }`}
        >
            <div className="max-w-[1440px] mx-auto lg:px-[80px] px-6 lg:mt-[43px] mt-[20px] h-[22px] flex items-center ">
                <div className={`flex-1 md:flex-initial`}>
                    <h1 className="gilroy-bold text-[28px] leading-none">Panto</h1>
                </div>

                <nav className="hidden md:flex gap-[72px] mx-auto items-center">
                    <div className="flex gap-[8px] items-center cursor-pointer ite">
                        <span className="gilroy-medium text-lg leading-none">Furniture</span>
                        <ChevronDownIcon width={16} className={` ${scrolled ? "" : ""}`} />
                    </div>
                    <a className="gilroy-medium text-lg leading-none">Shop</a>
                    <a className="gilroy-medium text-lg leading-none">About Us</a>
                    <a className="gilroy-medium text-lg leading-none">Contact</a>
                </nav>

                <div className="flex items-center gap-4 mt-2">
                    <div className="relative">
                        <Image
                            src={ChartIcon}
                            height={26}
                            width={26}
                            alt="Hero"
                            className=" 
                            object-cover 
                            priority"
                        />
                        <div className=" flex items-center font-gilroy font-bold text-[14px]  justify-center left-4 top-0 right-0 absolute bg-panto-orange text-white h-[25px] w-[20px] text-xs rounded-full px-2">
                            0
                        </div>
                    </div>
                    <button
                        className="md:hidden md:ml-0 ml-4"
                        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <div>{isMobileMenuOpen ? <XMarkIcon width={24} /> : <Bars2Icon width={24} />}</div>
                    </button>
                </div>
            </div>
            {
                isMobileMenuOpen && (
                    <div className="md:hidden bg-white w-full text-white mt-5 backdrop-blur-lg  p-6 flex flex-col gap-4">
                        <a className="gilroy-medium text-lg leading-none text-panto-orange">Furniture</a>
                        <a className="gilroy-medium text-lg leading-none text-panto-orange">Shop</a>
                        <a className="gilroy-medium text-lg leading-none text-panto-orange">About Us</a>
                        <a className="gilroy-medium text-lg leading-none text-panto-orange">Contact</a>
                    </div>
                )
            }
        </header >
    );
}
