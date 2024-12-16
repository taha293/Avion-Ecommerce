import Image from "next/image"

function CartItems(){
    return(
        <div className="text-darkprimary xl:px-[188px] xl:pt-16 xl:pb-8 px-6 py-9 sm:px-9 sm:py-11 md:px-14 md:py-14 lg:px-[130px]">
            <div>
                <h1 className="leading-[50.6px] text-[24px] sm:text-[26px] md:text-[28px] lg:text-[32px] xl:text-h1">Your shopping cart </h1>
            </div>
            <div className="mt-[48px] lg:flex flex-col gap-3 hidden">
                <div className="grid grid-cols-[3fr,2fr,0fr] ">
                    <h6>Product</h6>
                    <h6>Quantity</h6>
                    <h6>Total</h6>
                </div>
                <div className="w-full h-[1px] bg-bordergrey"></div>
            </div>
            <div className="py-5 flex flex-col gap-5">
                    <div className="grid lg:grid-cols-[3fr,2fr,0fr]">
                        <div className="flex  gap-5">
                            <div>
                                <Image className="cursor-pointer" src='/assets/cartimg.png' alt="" height={134} width={109}></Image>                            
                            </div>
                            <div className="w-[180px] flex flex-col justify-evenly">
                                <h4>Graystone vase</h4>
                                <p className="text-[14px] font-[Satoshi-Regular]">A timeless ceramic vase with 
                                a tri color grey glaze.</p>
                                <p className="text-[18px] font-[Satoshi-Regular]">£85</p>
                            </div>
                        </div>
                        <div><p className="text-[16px] lg:flex w-[13%] flex-row-reverse font-[Satoshi-Regular] h-full items-center hidden">1</p></div>
                        <div><p className="text-[18px] font-[Satoshi-Regular] h-full items-center lg:flex hidden">£85</p></div>
                    </div>
                    <div className="grid lg:grid-cols-[3fr,2fr,0fr]">
                        <div className="flex  gap-5">
                            <div>
                                <Image className="cursor-pointer" src='/assets/cartimg2.png' alt="" height={134} width={109}></Image>                            
                            </div>
                            <div className="w-[180px] flex flex-col justify-evenly">
                                <h4>Basic white vase</h4>
                                <p className="text-[14px] font-[Satoshi-Regular]">Beautiful and simple this is
                                one for the classics</p>
                                <p className="text-[18px] font-[Satoshi-Regular]">£85</p>
                            </div>
                        </div>
                        <div><p className="text-[16px] lg:flex w-[13%] flex-row-reverse font-[Satoshi-Regular] h-full items-center hidden">1</p></div>
                        <div><p className="text-[18px] font-[Satoshi-Regular] h-full items-center lg:flex hidden">£125</p></div>
                    </div>
                    <div className="w-full h-[1px] bg-bordergrey"></div>
            </div>
            <div className="flex flex-col gap-4 items-end">
                <div className="flex gap-4 items-center">
                    <h4 className="text-[#4E4D93]">Subtotal</h4>
                    <h3>£210</h3>
                </div>
                <p className="text-[14px] font-[Satoshi-Regular] text-[#4E4D93]">Taxes and shipping are calculated at checkout</p>
                <button className="py-4 px-8 hover:text-darkprimary hover:bg-lightgrey font-[Satoshi-Regular] leading-6 text-[16px] w-full lg:w-[172px] bg-[#2A254B] text-white">Go to Chekout</button>
                
            </div>
        </div>
    )
}
export default CartItems