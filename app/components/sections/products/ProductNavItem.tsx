import React from 'react'

type ProductNavItemProps = {
    isActive: boolean,
    name: string,

}

export const ProductNavItem = (props: ProductNavItemProps) => {
    return (
        <div className={`cursor-pointer hover:bg-white/60 font-gilroy ${props.isActive ? "bg-white font-medium":"font-normal"}  w-[84px] h-[45px] flex items-center justify-center  rounded-full`}>
            <label htmlFor="name" className='cursor-pointer text-panto-black/80 text-lg'>{props.name}</label>
        </div>
    )
}
