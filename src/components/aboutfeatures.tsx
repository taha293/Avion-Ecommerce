import Image from "next/image"
import Link from "next/link"
function AboutFeatures() {
    return (
        <div>
            <div className="w-full sm:p-3 md:p-4 lg:p-5">
                <div className="w-[100%] lg:h-[584px] py-8 px-6 flex justify-center flex-col gap-6 lg:flex-row lg:px-16 xl:px-20 lg:py-[52] xl:py-[60px] ">
                    <div className="lg:w-[59.375%] px-6 pb-6 md:pb-8 pt-10 w-full h-[100%] bg-[#2A254B] lg:p-[60px]">
                        <div className="text-white flex flex-col  h-full gap-3 lg:gap-0">
                            <div className="flex flex-col lg:gap-0 gap-[41px] lg:w-[513px] lg:pb-3  top-[60px] left-[60px]">
                                <h2 className="leading-[44.8px] text-[20px] sm:text-[24px] lg:text-[28px] xl:text-[32px] ">It started with a small idea</h2>
                                <Link href="/listings"><button className="leading-[24px] py-4 px-8 bg-[#F9F9F926] w-[170px] font-[Satoshi-Regular] hidden  hover:bg-lightgrey hover:text-[#2a254b]">View collection</button></Link>
                            </div>
                            <div className="w-full  left-[60px] bottom-[60px]   flex gap-14 flex-col lg:h-full lg:justify-between">
                                <p className="leading-[27px] font-[Satoshi-Regular] w-full text-[16px] lg:text-[18px] ">A global brand with local beginnings, our story begain in a small studio in South London in early 2014</p>
                                <Link href="/listings"><button className="leading-[24px] py-4 px-8 bg-[#F9F9F926] font-[Satoshi-Regular] w-full  hover:bg-lightgrey lg:w-fit hover:text-[#2a254b] ">View collection</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-[520px] h-[100%] flex sm:hidden lg:flex">
                        <Image className="w-full" src='/assets/ImageBlock.png' alt="ChairHero" width={520} height={582} /></div>

                </div>
            </div>
        </div>
    )
}
export default AboutFeatures