import Image from "next/image"

function HeRo() {
    return (
        <div className="w-full p-5">
            <div className="w-[100%] h-[584px] flex justify-center">
                <div className="w-[59.375%] h-[100%] bg-[#2A254B]">
                    <div className="text-white flex flex-col justify-between h-full ">
                        <div className="flex flex-col gap-[41px] w-[513px] h-[187px] relative top-[60px] left-[60px]">
                            <h2 className="leading-[44.8px]">The furniture brand for the future, with timeless designs</h2>
                            <button className="leading-[24px] py-4 px-8 bg-[#F9F9F926] w-[170px] font-[Satoshi-Regular]">View collection</button>
                        </div>
                        <div className="w-full  relative left-[60px] bottom-[60px]  pr-48 ">
                            <p className="leading-[27px] font-[Satoshi-Regular]">A new era in eco friendly furniture with Avelon, the French luxury retail brand
                                with nice fonts, tasteful colors and a beautiful way to display things digitally using modern web technologies.</p>
                        </div>
                    </div>
                </div>
                <div className="w-[520px] h-[100%] flex">
                    <Image src='/assets/Chairhero.png' alt="ChairHero" width={520} height={582} /></div>

            </div>
        </div>
    )
}
export default HeRo