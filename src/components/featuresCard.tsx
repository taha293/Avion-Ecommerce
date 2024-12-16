import Image from "next/image"
interface props {
    img : string
    heading : string
    para : string
}

function FeaturesCard(props:props){
    const { img, heading, para} = props
    return(
        <div className="sm:w-[270px] h-[124px] flex flex-col justify-between">
                    <Image src={img} alt="" width={24} height={24} />
                    <div className="flex flex-col gap-2">
                        <h4 className="leading-[28px] text-[16px] sm:text-[20px] ">{heading}</h4>
                        <h4 className="leading-[24px] font-[Satoshi-Regular] text-[14px] sm:text-[16px]">{para}</h4>
                    </div>
                </div>
    )
}
export default FeaturesCard