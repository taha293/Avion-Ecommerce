import Image from "next/image"
function Footer() {
    return (
        <div className=" bg-darkprimary px-[82px] pt-[58px] pb-[25px] text-white">
            <div className="flex justify-between">
                <div className="flex gap-3 flex-col">
                    <p className="leading-[19.68px] text-[16px]">Menu</p>
                    <p className="leading-[18.9px] text-[14px] font-[Satoshi-Regular]">New arrivals</p>
                    <p className="leading-[18.9px] text-[14px] font-[Satoshi-Regular]">Best sellers</p>
                    <p className="leading-[18.9px] text-[14px] font-[Satoshi-Regular]">Recently viewed</p>
                    <p className="leading-[18.9px] text-[14px] font-[Satoshi-Regular]">Popular this week</p>
                    <p className="leading-[18.9px] text-[14px] font-[Satoshi-Regular]">All products</p>
                </div>
                <div className="flex gap-3 flex-col">
                    <p className="leading-[19.68px] text-[16px]">Categories</p>
                    <p className="leading-[18.9px] text-[14px] font-[Satoshi-Regular]">Crockery</p>
                    <p className="leading-[18.9px] text-[14px] font-[Satoshi-Regular]">Furniture</p>
                    <p className="leading-[18.9px] text-[14px] font-[Satoshi-Regular]">Homeware</p>
                    <p className="leading-[18.9px] text-[14px] font-[Satoshi-Regular]">Plant pots</p>
                    <p className="leading-[18.9px] text-[14px] font-[Satoshi-Regular]">Chairs</p>
                    <p className="leading-[18.9px] text-[14px] font-[Satoshi-Regular]">Crockery</p>
                </div>
                <div className="flex gap-3 flex-col">
                    <p className="leading-[19.68px] text-[16px]">Our company</p>
                    <p className="leading-[18.9px] text-[14px] font-[Satoshi-Regular]">About us</p>
                    <p className="leading-[18.9px] text-[14px] font-[Satoshi-Regular]">Vacancies</p>
                    <p className="leading-[18.9px] text-[14px] font-[Satoshi-Regular]">Contact us</p>
                    <p className="leading-[18.9px] text-[14px] font-[Satoshi-Regular]">Privacy</p>
                    <p className="leading-[18.9px] text-[14px] font-[Satoshi-Regular]">Return policy</p>
                </div>
                <div className="flex gap-3 flex-col">
                    <p className="leading-[19.68px] text-[16px]">Join our mailing list</p>
                    <div className="flex justify-center">
                        <input type="text" placeholder="your@email.com" className="w-[509px] h-[56px] bg-[#FFFFFF26] text-white text-[16px] leading-[21.6px] font-[Satoshi-Regular] pl-8 outline-none placeholder-white" />
                        <button className="py-4 px-8 bg-white font-[  Satoshi-Regular] text-[16px] leading-6 text-[#2A254B]">Sign up</button>
                    </div>
                </div>
            </div>
            <div className="mt-[79px] w-full h-[1px] bg-[#4E4D93]"></div>
            <div className="mt-[25px] justify-between flex">
            <p className="leading-[18.9px] text-[14px] font-[Satoshi-Regular]">Copyright 2024 Avion LTD</p>
            <div className="flex gap-6">
            <a href="#"><Image src='/assets/link.png' alt="" width={24} height={24} /></a>
            <a href="#"><Image src='/assets/fb.png' alt="" width={24} height={24} /></a>
            <a href="#"><Image src='/assets/insta.png' alt="" width={24} height={24} /></a>
            <a href="#"><Image src='/assets/skype.png' alt="" width={24} height={24} /></a>
            <a href="#"><Image src='/assets/twitter.png' alt="" width={24} height={24} /></a>
            <a href="#"><Image src='/assets/pin.png' alt="" width={24} height={24} /></a>
          
            </div>
            </div>
        </div>
    )
}
export default Footer