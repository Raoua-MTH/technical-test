import Image from 'next/image';
import FbIcon from "@/public/icons/fb.svg"
import TwIcon from "@/public/icons/tw.svg"
import InstIcon from "@/public/icons/inst.svg"

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-panto-gray lg:mt-[245px] mt-[20px] pt-28  pb-15 md:px-46 px-5 font-sans">
            <div className="max-w-7xl mx-auto">

                <div className="flex flex-col md:flex-row flex-wrap justify-between lg:gap-33 gap-10 mb-20">
                    <div className="flex-1 ">
                        <h2 className="text-[28px] font-gilroy tracking-[0.01em] font-bold text-panto-black mb-6">Panto</h2>
                        <p className="text-panto-black/80 font-gilroy font-medium text-[15px] leading-[160%] w-[95%]">
                            The advantage of hiring a workspace with us is that gives you
                            comfortable service and all-around facilities.
                        </p>
                    </div>
                    <div className="flex flex-2 lg:flex-row flex-col lg:gap-0 gap-8  justify-between ">
                        <div className=''>
                            <h3 className="text-panto-orange font-gilroy  mb-4 mt-1 text-[17px] ">Services</h3>
                            <ul className=" text-black/80 font-gilroy font-medium text-[15px] space-y-4">
                                <li><a href="#" className="hover:text-panto-orange transition">Email Marketing</a></li>
                                <li><a href="#" className="hover:text-panto-orange transition">Campaigns</a></li>
                                <li><a href="#" className="hover:text-panto-orange transition ">Branding</a></li>
                            </ul>
                        </div>
                        <div className='w-[16.8%] '>
                            <h3 className="text-panto-orange    font-gilroy mb-4 mt-1 text-[17px]">Furniture</h3>
                            <ul className="space-y-4 text-black/80 font-gilroy font-medium text-[15px]">
                                <li><a href="#" className="hover:text-panto-orange transition">Beds</a></li>
                                <li><a href="#" className="hover:text-panto-orange transition">Chair</a></li>
                                <li><a href="#" className="hover:text-panto-orange transition">All</a></li>
                            </ul>
                        </div>
                        <div className='w-[22.5%] '>
                            <h3 className="text-panto-orange font-gilroy   mb-4 mt-1 text-[17px]">Follow Us</h3>
                            <ul className="space-y-4 text-black/80 font-gilroy font-medium text-[15px]">
                                <li className="flex items-center gap-4 ml-1 group cursor-pointer">
                                    <Image
                                        src={FbIcon}
                                        height={19}
                                        width={9}
                                        alt="facebook"
                                        className=" 
                                        object-cover 
                                        priority"
                                    />

                                    <a href="#" className="hover:text-[#f6973f] transition">Facebook</a>
                                </li>
                                <li className="flex items-center gap-3 group cursor-pointer">
                                    <Image
                                        src={TwIcon}
                                        height={15}
                                        width={19}
                                        alt="twitter"
                                        className=" 
                                        object-cover 
                                        priority"
                                    />
                                    <a href="#" className="hover:text-[#f6973f] transition">Twitter</a>
                                </li>
                                <li className="flex items-center gap-3 group cursor-pointer">
                                    <Image
                                        src={InstIcon}
                                        height={20}
                                        width={20}
                                        alt="instagram"
                                        className=" 
                                        object-cover 
                                        priority"
                                    />                                    
                                    <a href="#" className="hover:text-[#f6973f] transition">Instagram</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row  items-center lg:pt-11 pt-2  md:mr-0 mr-3   ">
                    <p className="text-[15px]  text-[#1E2833]/60 tracking-[-0.2px] flex-1">Copyright ©{currentYear}</p>
                    <div className="flex gap-13 text-sm text-panto-black font-gilroy font-medium text-[14px]">
                        <a href="#" className="hover:underline">Terms & Conditions</a>
                        <a href="#" className="hover:underline">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}