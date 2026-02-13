import Image from "next/image"
import SearchIcon from "@/public/icons/Group.svg"
export default function HeroSearch() {
    return (
        <div className=" flex flex-row lg:w-[344px] w-[250px] md:h-[56px] h-[30px] rounded-[42px] border border-white/60 bg-white/15 backdrop-blur-xs px-[7px] items-center">

            <div className="flex-1">
                <input type="text" placeholder="Search furniture" className="placeholder:text-white/80 ml-3 placeholder:leading-[150%] gilroy-regular md:text-[18px]" />
            </div>
            <div className="flex items-center justify-center rounded-full bg-amber-600 w-[25px] h-[25px] md:w-[40px] md:h-[40px]">
                <Image
                    src={SearchIcon}
                    alt="arrow"
                    width={17}
                    height={17}
                    className="md:w-[17px] md:h-[17px] w-3 h-3"
                    priority

                />

            </div>
        </div>

    )
}