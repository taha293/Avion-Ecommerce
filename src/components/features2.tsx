import Image from "next/image"

function Features2() {
    return (
        <div className="flex text-[#2A254B]">
            <div className="w-[50%]  py-[72px] pl-[84px] pr-[44px]">
                <div className="flex flex-col justify-between h-full">
                    <div className="w-[536px] flex flex-col gap-[25px]">
                        <h3 className="leading-[33.6px]">From a studio in London to a global brand with
                            over 400 outlets</h3>
                        <p className=" text-[#505977] font-[Satoshi-Regular] text-[16px] leading-[21.6px] pr-1">When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market. <br /><br />Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p>
                    </div>
                    <div>
                    <button className="py-4 px-8 bg-lightgrey font-[Satoshi-Regular] leading-6 text-[16px]">Get in touch</button>
        
                    </div>
                </div>
            </div>
            <div className="w-[50%]">
                <Image src='/assets/features.png' alt="searchbar" width={720} height={603} />
            </div>
        </div>
    )
}
export default Features2 