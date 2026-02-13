import Image, { StaticImageData } from 'next/image'
type ProfileCardProps={
    image:StaticImageData | string
}
export default function ProfileCard({ image }: ProfileCardProps) {
    return (
        <div className='bg-white w-[66px] h-[66px] flex items-center justify-center rounded-full'>
            <Image
                height={55}
                width={50}
                src={image}
                alt="pro-photofile"
                className=" object-cover rounded-full"
                priority
            />
        </div>
    )
}
