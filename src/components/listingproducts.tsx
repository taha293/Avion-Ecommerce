'use client'
import { client } from "@/sanity/lib/client"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import CircularProgress from '@mui/material/CircularProgress';
import { product } from "@/types/product"
import * as React from "react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

interface props {
    category : string
}

function ListingPRoducts(props:props) {
    let propS:string 
    if(props.category == "all items" || props.category == "tableware" ||props.category == "chairs" ||props.category == "ceramics" ||props.category == "tables" ||props.category == "cutlery" ||props.category == "crockory" ||props.category == "plant-pots"){
        propS = props.category
    } else{
        propS = "all items"
    }
    const [position, setPosition] = React.useState(propS)
    
    const [productData, setProductData] = useState<product[] | []>([])
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        setProductData([])
        setError(null)
        async function dataFetch() {
            try{
                if(position == "all items"){
            const data = await client.fetch(`*[_type == "product"]{
                                _id,
                                category,
                                 price,
                              name,
                              "slug":slug.current,
                            tags,
                             "image" : image.asset->url
    }`)
            setProductData(data)
                } else if(position != "all items"){
                    const data = await client.fetch(`*[_type == "product" && category._ref match "*${position}*"]{
                        _id,
                        category,
                         price,
                      name,
                      "slug":slug.current,
                    tags,
                     "image" : image.asset->url
}`)
    setProductData(data)
                }
            }catch(error){
                console.log("Failed to load Products: ",error);
                    setError("Failed to load or there might be an internet issue...")
            }
        }
        dataFetch()

    }, [position])
    return (
        <div>
            <div style={{ backgroundImage: `url('/assets/listbg.jpg')` }} className="h-[146px] sm:h-[159px] md:h-[172px] lg:h-[189px] xl:h-[209px] bg-right flex justify-center items-end text-white pb-8 lg:justify-normal lg:px-20 lg:py-9">
        <h1>All products</h1>
      </div>
      <div className="px-6 py-2 flex justify-end">
        <div className="flex gap-3">
        <DropdownMenu>
      <DropdownMenuTrigger asChild>
      <button className="py-3 px-6 font-[Satoshi-Regular] leading-6 text-[16px] text-darkprimary ">Category &thinsp; <span className="text-[10px]">&#9660;</span> </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 ml-2 outline-none border-none text-darkprimary">
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="all items">All Items</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="tableware">Tableware</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="chairs">Chairs</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="ceramics">Ceramics</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="tables">Tables</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="cutlery">Cutlery</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="crockory">Crockory</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="plant-pots">Plant Pots</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
            
         
        </div>
      </div>
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