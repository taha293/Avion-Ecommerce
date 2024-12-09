import Image from "next/image"

function Listings(){
    return (
        <div>
      <div className="text-[#2A254B]">
        <div className="mt-20 ml-20">
            <h2 className="leading[39.36px]">New ceramics</h2>
        </div>
        <div className="flex gap-5 px-20 py-[34px]">
            <div className="">
                <Image src='/assets/listing1.png' alt="" height={375} width={305}></Image>
                <div className="flex flex-col gap-2 mt-6">
                    <h4 className="leading-7">The Dandy chair</h4>
                    <p className="font-[Satoshi-Regular] leading-[27px]">£250</p>
                </div>
            </div>
            <div className="">
                <Image src='/assets/listing2.png' alt="" height={375} width={305}></Image>
                <div className="flex flex-col gap-2 mt-6">
                    <h4 className="leading-7">Rustic Vase Set</h4>
                    <p className="font-[Satoshi-Regular] leading-[27px]">£155</p>
                </div>
            </div>
            <div className="">
                <Image src='/assets/listing3.png' alt="" height={375} width={305}></Image>
                <div className="flex flex-col gap-2 mt-6">
                    <h4 className="leading-7">The Silky Vase</h4>
                    <p className="font-[Satoshi-Regular] leading-[27px]">£125</p>
                </div>
            </div>
            <div className="">
                <Image src='/assets/listing4.png' alt="" height={375} width={305}></Image>
                <div className="flex flex-col gap-2 mt-6">
                    <h4 className="leading-7">The Lucy Lamp</h4>
                    <p className="font-[Satoshi-Regular] leading-[27px]">£399</p>
                </div>
            </div>
        </div>
        <div className="flex w-full justify-center mb-14">
            <button className="py-4 px-8 bg-lightgrey font-[Satoshi-Regular] leading-6 text-[16px]">View collection</button>
        </div>
      </div>
      <div className="text-[#2A254B]">
        <div className="mt-20 ml-20">
            <h2 className="leading[39.36px]">Our popular products</h2>
        </div>
        <div className="flex gap-5 px-20 py-[34px]">
            <div className="">
                <Image src='/assets/listing6.png' alt="" height={375} width={630}></Image>
                <div className="flex flex-col gap-2 mt-6">
                    <h4 className="leading-7">The Poplar suede sofa</h4>
                    <p className="font-[Satoshi-Regular] leading-[27px]">£980</p>
                </div>
            </div>
            <div className="">
                <Image src='/assets/listing1.png' alt="" height={375} width={305}></Image>
                <div className="flex flex-col gap-2 mt-6">
                    <h4 className="leading-7">The Dandy chair</h4>
                    <p className="font-[Satoshi-Regular] leading-[27px]">£250</p>
                </div>
            </div><div className="">
                <Image src='/assets/listing5.png' alt="" height={375} width={305}></Image>
                <div className="flex flex-col gap-2 mt-6">
                    <h4 className="leading-7">The Dandy chair</h4>
                    <p className="font-[Satoshi-Regular] leading-[27px]">£250</p>
                </div>
            </div>
        </div>
        <div className="flex w-full justify-center mb-14">
            <button className="py-4 px-8 bg-lightgrey font-[Satoshi-Regular] leading-6 text-[16px]">View collection</button>
        </div>
      </div>
      </div>
      
    )
  }
  export default Listings