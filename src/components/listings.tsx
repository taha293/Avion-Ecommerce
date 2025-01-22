'use client'
import { client } from "@/sanity/lib/client"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import CircularProgress from '@mui/material/CircularProgress';

function Listings() {
    const [productData, setProductData] = useState<product[] | []>([])
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        async function dataFetch() {
            try{
            const data = await client.fetch(`*[_type == "product" && ("popular products" in tags || "new ceramics" in tags)]{
                            _id,
                             price,
                          name,
                          "slug":slug.current,
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
    const popularProducts = productData.filter(item => item.tags.includes("popular products"));
    const newCeramics = productData.filter(item => item.tags.includes("new ceramics"));
    return (
        <div>
            <div className="text-[#2A254B] px-6 pt-12 pb-10 gap-x-4 gap-y-5 flex flex-col sm:px-7 md:p-11 lg:p-16 xl:p-20">
                <div className="">
                    <h2 className="leading[39.36px] text-[20px] sm:text-[22px] md:text-[24px] lg:-[28px] xl:text-[32px] ">New ceramics</h2>
                </div>
                
               
                {productData.length == 0? (error?<div className="flex justify-center items-center py-10 text-center">
                        <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] ">{error}</p>
                    </div>:
                    <div className="flex justify-center items-center py-10"><CircularProgress color="inherit" /></div>): <div className="grid grid-cols-[1fr,1fr] md:grid-cols-4 gap-5">
                    {newCeramics.map((c) =>
                        <div key={c._id} className="">
                          <Link href={`/product/${c.slug}`} > <Image className="cursor-pointer" src={c.image} alt={c.name} height={375} width={305}></Image></Link>
                            <div className="flex flex-col gap-2 mt-6">
                                <h4 className="leading-7">{c.name}</h4>
                                <p className="font-[Satoshi-Regular] leading-[27px]">£{c.price}</p>
                            </div>
                        </div>)
                    } </div>}
               
                <div className="flex w-full justify-center mb-14">
                    <Link href="/listings"> <button className="py-4 px-8 bg-lightgrey font-[Satoshi-Regular] leading-6 text-[16px] w-full md:w-auto hover:bg-[#2A254B] hover:text-white">View collection</button></Link>
                </div>
            </div>
            <div className="text-[#2A254B] px-6  gap-x-4 gap-y-5 flex flex-col sm:px-7 md:px-11 lg:px-16 xl:px-20">
                <div>
                    <h2 className="leading[39.36px] text-[20px] sm:text-[22px] md:text-[24px] lg:-[28px] xl:text-[32px] ">Our popular products</h2>
                </div>
                
                {productData.length == 0? (error?<div className="flex justify-center items-center py-10 text-center">
                        <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px]">{error}</p>
                    </div>:
                    <div className="flex justify-center items-center py-10"><CircularProgress color="inherit" /></div>): <div className="flex grid-rows-1 whitespace-nowrap overflow-x-auto grid-cols-4 gap-5 scrollbar-hide scroll-smooth ">
                    { popularProducts.map((c)=>
                        <div key={c._id} className="flex flex-col">
                            <div className="h-full max-h-[250px] xl:max-h-[375px]"><Link href={`/product/${c.slug}`}><Image className="cursor-pointer h-full min-w-[180px]" src={c.image} alt={c.name} height={375} width={305}></Image></Link></div>
                            <div className="flex flex-col gap-2 mt-6">
                                <h4 className="leading-7">{c.name}</h4>
                                <p className="font-[Satoshi-Regular] leading-[27px]">£{c.price}</p>
                            </div>
                        </div>)
                        }
                        </div>
                    }
                   
                 
             
                <div className="flex w-full justify-center mb-14">
                    <Link href="/listings"><button className="py-4 px-8 bg-lightgrey font-[Satoshi-Regular] leading-6 text-[16px] w-full lg:w-auto hover:bg-[#2A254B] hover:text-white">View collection</button></Link>
                </div>
            </div>
        </div>

    )
}
export default Listings