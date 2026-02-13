import React from 'react'
import WhyChooseUsTitle from './WhyChooseUsTitle'
import WhyChooseUsCard from './WhyChooseUsCard'



export default function WhyChooseUsSection() {
    return (
        <div className="flex lg:h-[400px]  xl:flex-nowrap flex-wrap w-full lg:flex-row flex-col lg:px-[80px] px-6 items-center ">
            <div className='lg:w-[76%] w-full lg:mb-0 mb-8'>
                <WhyChooseUsTitle />
            </div>
            <div className="flex  lg:flex-row flex-col items-center gap-[25px]">

                <div className='flex-1'>
                    <WhyChooseUsCard url='#' title='Luxury facilities' content='The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.' />
                </div>
                <div className='flex-1'>
                    <WhyChooseUsCard url='#' title='Affordable Price' content='You can get a workspace of the highst quality at an affordable price and still enjoy the facilities that are oly here.' />
                </div>
                <div className='flex-1'>
                    <WhyChooseUsCard url='#' title='Many Choices' content='We provide many unique work space choices so that you can choose the workspace to your liking.' />
                </div>
            </div>
        </div>
    )
}