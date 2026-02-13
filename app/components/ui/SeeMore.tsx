import Image from "next/image"
import NextLink from "@/public/icons/next-link.svg"
type SeeMoreProps = {
    label: string
    className?: string
    url?: string
}
export default function SeeMore(props: SeeMoreProps) {
    return (
        <a href={props.url} className={` cursor-pointer ${props.className} flex  gap-[13px] hover:text-panto-orange/80 text-panto-orange items-center `}>
            <span className="gilroy-medium  leading-none">{props.label}</span>
            <Image
                src={NextLink}
                alt="next-link"
                width={48}
                height={24}
                priority
            />
        </a>)
}
