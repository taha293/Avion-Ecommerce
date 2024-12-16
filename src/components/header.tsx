import Link from "next/link"

function Header () {
    return (
        <div className="py-8 px-6 sm:py-11 sm:px-8 md:py-13 md:px-10">
            <div className="flex flex-col gap-10 lg:flex-row xl:py-[88px] xl:px-[128px] lg:py-16 lg:px-28 lg:justify-between ">
                <h2 className="leading-[44.8px] text-[#2A254B] xl:w-[60%] lg:w-[65%] ">A brand built on the love of craftmanship, quality and outstanding customer service</h2>
                <div>
                <Link href="/listings"><button className="leading-[24px] py-4 px-8 font-[Satoshi-Regular]  bg-lightgrey text-[#2a254b] hover:text-lightgrey hover:bg-[#2a254b] "> View our products</button></Link></div>

            </div>
        </div>
    )
}
export default Header