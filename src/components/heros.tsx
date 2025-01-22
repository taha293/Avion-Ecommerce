import Image from "next/image"
import Link from "next/link"
function HeRo() {
    return (
        <div className="w-full sm:p-3 md:p-4 lg:p-5">
            <div className="w-[100%] lg:h-[584px] flex justify-center">
                <div className="lg:w-[59.375%] px-6 pb-6 md:pb-8 pt-10 w-full h-[100%] bg-[#2A254B] lg:p-[60px]">
                    <div className="text-white flex flex-col justify-between h-full gap-20 lg:gap-0">
                        <div className="flex flex-col gap-[41px] lg:w-[513px] lg:h-[187px]  top-[60px] left-[60px]">
                            <h2 className="leading-[44.8px]">The furniture brand for the future, with timeless designs</h2>
                            <Link href='/listings'><button className="leading-[24px] py-4 px-8 bg-[#F9F9F926] w-[170px] font-[Satoshi-Regular] hidden md:block hover:bg-lightgrey hover:text-[#2a254b]">View collection</button></Link>
                        </div>
                        <div className="w-full  left-[60px] bottom-[60px]  lg:pr-48 flex gap-8 flex-col">
                            <p className="leading-[27px] font-[Satoshi-Regular] w-full">A new era in eco friendly furniture with Avelon, the French luxury retail brand
                                with nice fonts, tasteful colors and a beautiful way to display things digitally using modern web technologies.</p>
                                <Link href="/listings"><button className="leading-[24px] py-4 px-8 bg-[#F9F9F926] font-[Satoshi-Regular] w-full md:hidden hover:bg-lightgrey hover:text-[#2a254b]">View collection</button></Link>
                        </div>
                    </div>
                </div>
                <div className="w-[520px] h-[100%] hidden lg:flex">
                    <Image className="object-cover" src='/assets/Chairhero.png' alt="ChairHero" width={520} height={582} /></div>

            </div>
        </div>
    )
}
export default HeRo