type HotspotProps = {
    outerClassname: string
    InnerClassname: string
}
export default function Hotspot(props: HotspotProps) {
    return (
        <div className={`${props.outerClassname} backdrop-blur-xs  rounded-full flex bg-white/20 border border-white/60 items-center justify-center`} >
            <div className={`${props.InnerClassname}  rounded-full flex bg-white`} >
            </div>
        </div>
    )
}
