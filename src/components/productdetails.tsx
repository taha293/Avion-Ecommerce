'use client'
import { client } from "@/sanity/lib/client"
import Image from "next/image"
import { useEffect, useState } from "react"
import CircularProgress from '@mui/material/CircularProgress';


interface props {
    slug : string
}

function ProductDetails({slug}:props) {
    const [productData, setProductData] = useState<product[] | []>([])
    const [error, setError] = useState<string | null>(null);
      useEffect(() => {
          async function dataFetch() {
            try{
              const data = await client.fetch(`*[_type == "product" && slug.current == "${slug}"]{
                                  _id,
                                   price,
                                   description,
                                   features,
                                   dimensions,
                                name,
                                slug,
                              tags,
                               "image" : image.asset->url
      }`)
              setProductData(data)
            }catch(error){
                console.log("Failed to load Products: ",error);
                    setError("Failed to load or there might be an internet issue...")
            }
          }
          dataFetch()
  
      }, [])
      const data = productData[0]
      
    return (
        <div className="text-[#2A254B]">
        {productData.length == 0? (error?<div className="flex justify-center items-center py-10 text-center h-[50vh] ">
                                <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px]">{error}</p>
                            </div>:
                            <div className="flex justify-center items-center py-10 h-[50vh]"><CircularProgress color="inherit" /></div>):
        <div className="flex text-[#2A254B] flex-col lg:flex-row">
            <div className="lg:w-[50%] px-6 pt-12 pb-[38px] xl:py-[72px] xl:pl-[84px] xl:pr-[100px] lg:py-[60px] lg:pl-[68px] lg:pr-[82px] order-2 flex flex-col gap-7 lg:gap-14 xl:gap-16">
                <div className="flex flex-col gap-3">
                    <h3 className="leading-[33.6px] xl:text-h1 lg:text-[28px]">{data.name}</h3>
                    <h4 className="leading-7 lg:text-[22px] xl:text-h3 ">£{data.price}</h4>
                </div>
                <div className="flex flex-col gap-3 ">
                    <h5>Product description</h5>
                    <h6 className="font-[Satoshi-Regular] lg:text-h5">{data.description}</h6>
                    <h6 className="font-[Satoshi-Regular] lg:text-h5">
                        {data.features.map((i,index)=> <li key={index}>{i}</li>)}
                    </h6>
                </div>
                <div className="flex flex-col gap-4">
                    <h5>Dimensions</h5>
                    <div className=" flex justify-between">
                        <div className="flex flex-col gap-[15px]">
                        <h6>Height</h6>
                        <h6 className="font-[Satoshi-Regular]">{data.dimensions.height}</h6>
                        </div>
                        <div className="flex flex-col gap-[15px]">
                        <h6>Width</h6>
                        <h6 className="font-[Satoshi-Regular]">{data.dimensions.width}</h6>
                        </div>
                        <div className="flex flex-col gap-[15px]">
                        <h6>Depth</h6>
                        <h6 className="font-[Satoshi-Regular]">{data.dimensions.depth}</h6>
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
                <Image src={`${data.image}?w=1024&h=759&fit=fillmax`} alt={data.name} width={1024} height={759} className="lg:h-full"/>
            </div>
        </div>}
        </div>
    )
}
export default ProductDetails