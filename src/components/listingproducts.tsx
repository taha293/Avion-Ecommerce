'use client'
import { client } from "@/sanity/lib/client"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import CircularProgress from '@mui/material/CircularProgress';

function ListingPRoducts() {
    const [productData, setProductData] = useState<product[] | []>([])
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        async function dataFetch() {
            try{
            const data = await client.fetch(`*[_type == "product"]{
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
    return (
        <div>
            <div className="text-[#2A254B] px-6 pt-12 pb-10 gap-x-4 gap-y-5 flex flex-col sm:px-7 md:p-11 lg:p-16 xl:p-20">
                
                    {productData.length == 0? (error?<div className="flex justify-center items-center py-10 text-center">
                        <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px]">{error}</p>
                    </div>:
                    <div className="flex justify-center items-center py-10"><CircularProgress color="inherit" /></div>): <div className="grid grid-cols-[1fr,1fr] md:grid-cols-4 gap-5">{productData.map((i) =>
                        <div className="" key={i._id}>
                          
                          <Link href={`/product/${i.slug}`}><Image className="cursor-pointer" src={`${i.image}?h=375&w=305&fit=crop`} alt={i.name} height={375} width={305}></Image></Link>
                              
                            <div className="flex flex-col gap-2 mt-6">
                                <h4 className="leading-7">{i.name}</h4>
                                <p className="font-[Satoshi-Regular] leading-[27px]">£{i.price}</p>
                            </div>
                        </div>)}</div>}

             
                <div className="flex w-full justify-center mb-14">
                    <Link href="/listings"><button className="py-4 px-8 bg-lightgrey font-[Satoshi-Regular] leading-6 text-[16px] w-full md:w-auto hover:bg-[#2A254B] hover:text-white">View collection</button></Link>
                </div>
            </div>
        </div>
    )
}
export default ListingPRoducts