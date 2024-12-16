import Image from "next/image"

function ProductDetails() {
    return (
        <div className="flex text-[#2A254B] flex-col lg:flex-row">
            <div className="lg:w-[50%] px-6 pt-12 pb-[38px] xl:py-[72px] xl:pl-[84px] xl:pr-[100px] lg:py-[60px] lg:pl-[68px] lg:pr-[82px] order-2 flex flex-col gap-7 lg:gap-14 xl:gap-16">
                <div className="flex flex-col gap-3">
                    <h3 className="leading-[33.6px] xl:text-h1 lg:text-[28px]">The Dandy Chair</h3>
                    <h4 className="leading-7 lg:text-[22px] xl:text-h3 ">£250</h4>
                </div>
                <div className="flex flex-col gap-3 ">
                    <h5>Product description</h5>
                    <h6 className="font-[Satoshi-Regular] lg:text-h5">A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.</h6>
                    <h6 className="font-[Satoshi-Regular] lg:text-h5">
                        <li>Premium material</li>
                        <li>Handmade upholstery</li>
                        <li>Quality timeless classic</li>
                    </h6>
                </div>
                <div className="flex flex-col gap-4">
                    <h5>Dimensions</h5>
                    <div className=" flex justify-between">
                        <div className="flex flex-col gap-[15px]">
                        <h6>Height</h6>
                        <h6 className="font-[Satoshi-Regular]">110 cm</h6>
                        </div>
                        <div className="flex flex-col gap-[15px]">
                        <h6>Width</h6>
                        <h6 className="font-[Satoshi-Regular]">75 cm</h6>
                        </div>
                        <div className="flex flex-col gap-[15px]">
                        <h6>Depth</h6>
                        <h6 className="font-[Satoshi-Regular]">50 cm</h6>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4 lg:flex-row lg:justify-between ">
                     <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:w-[50%] xl:w-[60%]">
                        <h5>Quantitity</h5>
                        <input type="number" value={1} className="border-none outline-none text-center px-4 py-3 bg-lightgrey lg:w-[40%]" readOnly/>
                     </div>
                     <button className="py-4 px-8 hover:text-darkprimary hover:bg-lightgrey font-[Satoshi-Regular] leading-6 text-[16px] w-full md:w-auto bg-[#2A254B] text-white">Add to Cart</button>
                </div>
            </div>
            <div className="lg:w-[50%] lg:h-[inherit] w-[100%] order-1">
                <Image src='/assets/productImage.png' alt="searchbar" width={1024} height={759} className="lg:h-full"/>
            </div>
        </div>
    )
}
export default ProductDetails