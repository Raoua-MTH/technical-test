import Image from 'next/image'

import { SectionDetails } from '../../ui/SectionDetails'
import MatImage1 from '@/public/images/mat1.png'
import MatImage2 from '@/public/images/mat2.png'
import MatImage3 from '@/public/images/mat3.png'
export default function MaterialSection() {
    return (
        <div className='lg:mt-[353px] flex lg:flex-row flex-col lg:pl-8 '>
            <div className=' lg:w-[46.2%] lg:mt-[122px] lg:ml-12 lg:p-0 p-4 mt-4  '>
                <SectionDetails title="MATERIALS"
                    classNameContent='w-10/12'
                    subTitle='Very Serious Materials For Making Furniture'
                    content='Because panto was very serious about designing furniture for our environment, using a very expensive and famous capital but at a relatively low price'
                    url='#'
                />
            </div>
            <div className='relative flex flex-2 flex-row gap-10'>
                <div className='flex flex-col gap-12'>
                    <div>
                        <Image
                            height={229}
                            width={223}
                            src={MatImage1}
                            alt="Hero"
                            className="  h-full w-full z-20 
                            object-cover rounded-[15px] 
                            shadow-[0_20px_60px_rgba(59,130,246,0.15)]"
                            priority
                        />
                    </div>
                    <div>
                        <Image
                        height={317}
                        width={223}
                            src={MatImage2}
                            alt="Hero"
                            className="   z-20 
                            object-cover rounded-[15px] 
                            shadow-[0_20px_60px_rgba(59,130,246,0.15)]"
                            priority
                        />
                    </div>

                </div>
                <div className='relative flex-1 flex items-end'>
                    <Image
                        src={MatImage3}
                        height={455}
                        alt="Hero"
                        className=" mt-16 mb-[10px]   z-20 
                        object-cover rounded-l-[20px] 
                            shadow-[0_40px_30px_rgba(120,72,32,0.25)]"
                        priority
                    />
                    <div className='absolute bottom-25 lg:block right-0 hidden -z-10 h-[422px] w-[275px] bg-panto-gray rounded-l-[20px]'>
                    </div>
                </div>
            </div>

        </div>
    )
}
