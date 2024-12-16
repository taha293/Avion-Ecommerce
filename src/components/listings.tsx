import Image from "next/image"

function Listings() {
    return (
        <div>
            <div className="text-[#2A254B] px-6 pt-12 pb-10 gap-x-4 gap-y-5 flex flex-col sm:px-7 md:p-11 lg:p-16 xl:p-20">
                <div className="">
                    <h2 className="leading[39.36px] text-[20px] sm:text-[22px] md:text-[24px] lg:-[28px] xl:text-[32px] ">New ceramics</h2>
                </div>
                <div className="grid grid-cols-[1fr,1fr] md:grid-cols-4 gap-5 ">
                    <div className="">
                        <Image className="cursor-pointer" src='/assets/listing1.png' alt="" height={375} width={305}></Image>
                        <div className="flex flex-col gap-2 mt-6">
                            <h4 className="leading-7">The Dandy chair</h4>
                            <p className="font-[Satoshi-Regular] leading-[27px]">£250</p>
                        </div>
                    </div>
                    <div className="">
                        <Image className="cursor-pointer" src='/assets/listing2.png' alt="" height={375} width={305}></Image>
                        <div className="flex flex-col gap-2 mt-6">
                            <h4 className="leading-7">Rustic Vase Set</h4>
                            <p className="font-[Satoshi-Regular] leading-[27px]">£155</p>
                        </div>
                    </div>
                    <div className="">
                        <Image className="cursor-pointer" src='/assets/listing3.png' alt="" height={375} width={305}></Image>
                        <div className="flex flex-col gap-2 mt-6">
                            <h4 className="leading-7">The Silky Vase</h4>
                            <p className="font-[Satoshi-Regular] leading-[27px]">£125</p>
                        </div>
                    </div>
                    <div className="">
                        <Image className="cursor-pointer" src='/assets/listing4.png' alt="" height={375} width={305}></Image>
                        <div className="flex flex-col gap-2 mt-6">
                            <h4 className="leading-7">The Lucy Lamp</h4>
                            <p className="font-[Satoshi-Regular] leading-[27px]">£399</p>
                        </div>
                    </div>
                </div>
                <div className="flex w-full justify-center mb-14">
                    <button className="py-4 px-8 bg-lightgrey font-[Satoshi-Regular] leading-6 text-[16px] w-full md:w-auto hover:bg-[#2A254B] hover:text-white">View collection</button>
                </div>
            </div>
            <div className="text-[#2A254B] px-6  gap-x-4 gap-y-5 flex flex-col sm:px-7 md:px-11 lg:px-16 xl:px-20">
                <div>
                    <h2 className="leading[39.36px] text-[20px] sm:text-[22px] md:text-[24px] lg:-[28px] xl:text-[32px] ">Our popular products</h2>
                </div>
                <div className="flex grid-rows-1 whitespace-nowrap overflow-x-auto md:grid-cols-4 gap-5 scrollbar-hide scroll-smooth ">
                    <div className="hidden xl:block">
                        <Image className="cursor-pointer" src='/assets/listing6.png' alt="" height={375} width={630}></Image>
                        <div className="flex flex-col gap-2 mt-6">
                            <h4 className="leading-7">The Poplar suede sofa</h4>
                            <p className="font-[Satoshi-Regular] leading-[27px]">£980</p>
                        </div>
                    </div>
                    <div className="">
                        <Image className="cursor-pointer" src='/assets/listing1.png' alt="" height={375} width={305}></Image>
                        <div className="flex flex-col gap-2 mt-6">
                            <h4 className="leading-7">The Dandy chair</h4>
                            <p className="font-[Satoshi-Regular] leading-[27px]">£250</p>
                        </div>
                    </div><div className="">
                        <Image className="cursor-pointer" src='/assets/listing5.png' alt="" height={375} width={305}></Image>
                        <div className="flex flex-col gap-2 mt-6">
                            <h4 className="leading-7">The Dandy chair</h4>
                            <p className="font-[Satoshi-Regular] leading-[27px]">£250</p>
                        </div>
                    </div>
                    <div className="xl:hidden">
                        <Image className="cursor-pointer" src='/assets/listing1.png' alt="" height={375} width={305}></Image>
                        <div className="flex flex-col gap-2 mt-6">
                            <h4 className="leading-7">The Dandy chair</h4>
                            <p className="font-[Satoshi-Regular] leading-[27px]">£250</p>
                        </div>
                    </div><div className="xl:hidden">
                        <Image className="cursor-pointer" src='/assets/listing5.png' alt="" height={375} width={305}></Image>
                        <div className="flex flex-col gap-2 mt-6">
                            <h4 className="leading-7">The Dandy chair</h4>
                            <p className="font-[Satoshi-Regular] leading-[27px]">£250</p>
                        </div>
                    </div>
                </div>
                <div className="flex w-full justify-center mb-14">
                    <button className="py-4 px-8 bg-lightgrey font-[Satoshi-Regular] leading-6 text-[16px] w-full lg:w-auto hover:bg-[#2A254B] hover:text-white">View collection</button>
                </div>
            </div>
        </div>

    )
}
export default Listings