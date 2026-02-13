import React from 'react'
import SeeMore from './SeeMore'

type Props = {
  title:string,
  subTitle:string,
  content:string,
  url?:string
  classNameContent?:string
}

export const SectionDetails = (props: Props) => {
  return (
    <>
      <div className="text-panto-orange h-[22px]  font-gilroy font-semibold tracking-[0.175em] text-[18px]">
        {props.title}
      </div>
      <div className='font-gilroy font-bold text-[42px] mt-4  max-w-[413px] text-panto-black leading-13'>
      {props.subTitle}
      </div>
      <p className={`${props.classNameContent} font-gilroy font-normal text-[18px] text-panto-black mt-6 leading-[185%] `}>
      {props.content}
      </p>
      <div className=' pt-[29px]'>
        <SeeMore url={props.url} label="More Info" className="-mt-1 text-[14px]" />
      </div>
    </>
  )
}