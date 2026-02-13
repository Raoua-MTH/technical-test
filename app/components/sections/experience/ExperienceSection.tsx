import Image from 'next/image'
import ExpImage from '@/public/images/exp.png'
import { SectionDetails } from '../../ui/SectionDetails'

export default function ExperienceSection() {
    return (
        <div className='lg:mt-[240px] flex lg:flex-row flex-col'>
            <div className='relative flex-1'>
                <div className='relative'>
                    <Image
                        height={445}
                        width={602}
                        src={ExpImage}
                        alt="Hero"
                        className="lg:absolute mt-16 w-[602px]  z-20 
                        object-cover rounded-r-[20px] 
                        shadow-[0_40px_30px_rgba(120,72,32,0.25)]"
                        priority
                    />
                    <div className='lg:block hidden z-10 h-[422px] w-[430px] bg-panto-gray rounded-r-[20px]'>
                    </div>
                    <div className='lg:block hidden absolute z-10 lg:mr-8 -bottom-4 right-0 h-[301px] w-full bg-panto-gray rounded-[20px]'>
                    </div>

                </div>
            </div>
            <div className='flex-1 lg:mt-[78px] lg:ml-12 lg:p-0 p-4 mt-4  '>
                <SectionDetails title="EXPERIENCES"
                    classNameContent="w-10/13"
                    subTitle='We Provide You The Best Experience'
                    content='You don’t have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and lucurious style and with premium quality materials'
                    url='#'
                />
            </div>
        </div>
    )
}
