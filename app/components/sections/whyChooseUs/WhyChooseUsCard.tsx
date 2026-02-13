
import SeeMore from "../../ui/SeeMore"
type WhyChooseUsCardProps = {
    title: string,
    content: string,
    url: string
}
export default function WhyChooseUsCard({ title, content }: WhyChooseUsCardProps) {
    return (
        <div className="flex  w-full flex-col gap-[18px]">
            <label htmlFor="" className="gilroy-bold text-[24px] text-panto-black/90">{title}</label>
            <p className="gilroy-regular text-8 text-shadow-panto-black/80 leading-[185%]">
                {content}
            </p>
           <SeeMore label="More Info" className="-mt-1 text-[14px]"/>
        </div>
    )
}
