import Image, { StaticImageData } from 'next/image'
import ProfileCard from './ProfileCard'
import Stars from '../../ui/Stars'
type TestimonialsCardProps = {
    image: StaticImageData | string,
    title: string,
    subTitle: string,
    message: string
    rating: number
    bgImage: StaticImageData | string
}
export const TestimonialsCard = (props: TestimonialsCardProps) => {
    return (
        <div className=' relative md:h-[476px] md:w-[370px] '>
            <div className=" flex flex-col h-full absolute w-full px-[18px] pb-5">
                <div className="flex-1">

                </div>
                <div className='relative bg-white rounded-[20px] h-[205px] w-full '>
                    <div className='absolute  flex items-center w-full h-full flex-col'>
                        <div className='  absolute -top-8'>
                            <ProfileCard image={props.image} />
                        </div>
                        <div className='font-gilroy font-bold text-black text-[18px]  mt-[36px] '>
                            {props.title}
                        </div>
                        <div className='text-[12px] text-panto-black/60 font-gilroy'>
                            {props.subTitle}
                        </div>
                        <div className='flex-1 mt-[20px] leading-4  text-[14px] text-panto-black/80 font-gilroy mx-10 text-center'>
                            {props.message}
                        </div>
                        <div className='mb-3'>

                            <Stars rating={props.rating} width={18} height={18} />
                        </div>

                    </div>

                </div>
            </div>
            <Image
                height={476}
                width={370}
                src={props.bgImage}
                alt="Hero"
                className="  w-full h-full  z-20 
                            object-cover rounded-[15px] 
                            shadow-[0_40px_30px_rgba(120,72,32,0.15)]"
                priority
            />
        </div>

    )
}