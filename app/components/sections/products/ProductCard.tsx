import Image, { StaticImageData } from 'next/image'
import PlusIcon from '@/public/icons/plus.svg'
import Stars from '../../ui/Stars'

type ProductCardProps = {
    image: StaticImageData | string
}

export const ProductCard = ({ image }: ProductCardProps) => {
    return (
        <div className='hover:shadow-2xl hover:scale-[1.02] cursor-pointer h-[492px] rounded-[20px] mb-2 flex flex-col max-h-[492px] w-[268.09px] overflow-hidden relative'>
            <div className='absolute flex justify-center items-center w-full'>
                <Image
                    src={image}
                    alt="Chair"
                    width={217.9}
                    height={255.9}
                    className="object-cover"
                    priority
                />
            </div>

            <div className='h-[239.15px] min-h-[239.15px] flex-1 mt-[50.27px] rounded-t-[20px] bg-[#FAFAFA]'>
            </div>

            <div className='flex flex-col bg-white h-full rounded-b-[20px] pt-[14px] pb-[27px] px-[21px]'>
                <div>
                    <label htmlFor="chair" className='text-[#8D8D8D] font-sans text-[17px]'>Chair</label>
                </div>

                <div className='flex-1'>
                    <label className='text-[#0D1B39] font-sans text-[22px] font-semibold'>Anjay Chair</label>
                </div>

                <Stars />

                <div className="flex-1" />

                <div className='h-12 flex flex-row items-center'>
                    <div className='font-semibold flex-1'>
                        <sup className='text-[14px]'>$&nbsp;&nbsp;</sup>
                        <span className='text-[22px]'>299</span>
                    </div>

                    <div className="h-12 w-12 flex items-center justify-center rounded-full bg-[#0D1B39]">
                        <Image
                            src={PlusIcon}
                            alt="plus"
                            width={24}
                            height={24}
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}


