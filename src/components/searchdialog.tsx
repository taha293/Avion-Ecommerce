'use client'
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { client } from "@/sanity/lib/client"
import { useState } from "react"
import CircularProgress from '@mui/material/CircularProgress';
import { product } from "@/types/product"

export default function SearchDialog() {
    const [isClicked, setIsClicked] = useState(false)
    const [productData, setProductData] = useState<product[] | []>([])
    const [error, setError] = useState<string | null>(null);
    const enterKeyPress = (ek: React.KeyboardEvent) => {
        if (ek.key === 'Enter') {
            const s = document.getElementById('name') as HTMLInputElement
            if(s.value !== ""){
                dataFetch(s.value)
                }
        }
      }
    async function dataFetch(search: string) {
        setIsClicked(true)
                        setError(null)
                        setProductData([])
                        
        try {
            const data = await client.fetch(`*[_type == "product" && name match "*${search}*"]{
                                          _id,
                                        name,
                                        "slug" : slug.current,
                                       "image" : image.asset->url,
              }`)
              if (data.length === 0) {
                setError("Product not exists");
            }
            setProductData(data)
        } catch (error) {
            console.log("Failed to find Products: ", error);
            setError("Failed to find product")

        }
    }
    return (
        <Dialog>
            <DialogTrigger onClick={() => { setIsClicked(false) }} asChild>
                <Image className="cursor-pointer" src='/assets/Search.png' alt="searchbar" width={16} height={16} />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle className="text-[#2a254B]">Search Product</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right text-[#2a254B]">
                            Search
                        </Label>
                        <Input id="name" placeholder="Search here" className="col-span-3 text-[#2a254B] outline-[#2a254b] border-[#2a254b]" onKeyDown={enterKeyPress}  />
                    </div>
                </div>
                <DialogFooter>
                    <Button onClick={() => {
                        const s = document.getElementById('name') as HTMLInputElement
                        if(s.value !== ""){
                        dataFetch(s.value)
                        }
                    }} className="bg-[#2A254B] " >Search</Button>
                </DialogFooter>
                {isClicked ?
                   productData.length == 0? 
                   (error?<div className="flex justify-center items-center py-8 text-center">
                    <p className="text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] text-[#2a254b] ">{error}</p>
                </div> :<div className="flex justify-center items-center py-10 text-[#2a254b] "><CircularProgress color="inherit" /></div>)
                   :<div className="max-h-[50vh] overflow-y-scroll scrollbar-thin scrollbar-thumb-[#2a254b80] scrollbar-track-[transparent] ">
                   {productData.map((i)=>
                        <div key={i._id} >
                            <Link href={`/product/${i.slug}`}><div className="flex  gap-5 text-[#2a254B]">
                                <div>
                                    <Image className="cursor-pointer" src={`${i.image}?w=70&h=70&fit=fillmax`} alt={i.name} height={70} width={70}></Image>
                                </div>
                                <div className="w-[180px] flex flex-col justify-evenly">
                                    <h4>{i.name}</h4>
                                </div>
                            </div></Link>
                            <div className="h-[2px] w-full bg-[#2a254b] my-2"></div>
                        </div>
                    )}</div> 
                    :
                    <div></div>
                }
            </DialogContent>
        </Dialog>
    )
}
