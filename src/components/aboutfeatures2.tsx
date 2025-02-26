import Image from "next/image"
import Link from "next/link"
function Aboutfeatures2() {
    return (
        <div className="flex text-[#2A254B] flex-col lg:flex-row">
            <div className="lg:w-[50%] px-6 pt-12 pb-[38px] xl:py-[72px] xl:pl-[84px] xl:pr-[100px] order-2">
                <div className="flex flex-col justify-between h-full">
                    <div className="xl:w-[536px]  lg:w-auto flex flex-col gap-[25px]">
                        <h3 className="md:leading-[33.6px] leading-7 text-[20px] md:text-[24px] w-[72%] lg:w-auto">Our service isn’t just personal, it’s actually
                        hyper personally exquisite</h3>
                        <p className=" text-[#505977] font-[Satoshi-Regular] text-[14px] md:text-[18px]  leading-[21.6px] pr-1  xl:w-full">When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market. <br /> <br />Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p>
                    </div>
                    <div className="mt-16 lg:mt-0">
                   <Link href={'/about'}> <button className="py-4 px-8 bg-lightgrey font-[Satoshi-Regular] leading-6 text-[16px] w-full lg:w-auto hover:bg-[#2A254B] hover:text-white">Get in touch</button></Link>
        
                    </div>
                </div>
            </div>
            <div className="lg:w-[50%] w-[100%] order-1">
                <Image src='/assets/features.png' alt="searchbar" width={1024} height={603} />
            </div>
        </div>
    )
}
export default Aboutfeatures2 