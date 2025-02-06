'use client'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { product } from "@/types/product"
import { useUser } from "@clerk/nextjs"
import React, { useRef } from "react"


interface props {
    cart:product[]
}

function BillingDialog({cart}:props) {
  const name = useRef<HTMLInputElement>(null)
  const email = useRef<HTMLInputElement>(null)
  const phone = useRef<HTMLInputElement>(null)
  const country = useRef<HTMLInputElement>(null)
  const postal = useRef<HTMLInputElement>(null)
  const address = useRef<HTMLInputElement>(null)
  const {user} = useUser()  
  const username = user?.username as string
  const userEmail = user?.primaryEmailAddress?.emailAddress as string

  const handleKey = (event:React.KeyboardEvent, nextRef: React.RefObject<HTMLInputElement> | null ) => {
    if (event.key === 'Enter') {
      if (nextRef && nextRef.current) {
        nextRef.current.focus();
      }
    }
  };

  const handleEnter = (event:React.KeyboardEvent) => {
    if(event.key === "Enter"){
      handleCheckOut(cart)
    }
  }

    const handleCheckOut = async (product:product[]) => {
      if(name?.current?.value != "" && email?.current?.value != "" && phone?.current?.value != "" && country?.current?.value != "" && postal?.current?.value != "" && address?.current?.value != ""){
        try {
          const response = await fetch('/api/payment', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ product })
          })
          const data = await response.json()
          window.location.href = data.url
        } catch (error) {
          console.log(error)
        }
      } else {
        const requireDiv = document.getElementById('require')
        if(requireDiv){
        requireDiv.style.display = "grid"
        }
      }
          }
          
  return (
    <Dialog>
      <DialogTrigger asChild>
      <button className="py-4 px-8 hover:text-darkprimary hover:bg-lightgrey font-[Satoshi-Regular] leading-6 text-[16px] w-full lg:w-[172px] bg-[#2A254B] text-white">Go to Chekout</button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader >
          <DialogTitle className="text-[#2A254B]">Shipment Details</DialogTitle>
          <DialogDescription className="text-[#2A254B]">
            Enter details and confirm your order
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4 text-[#2A254B] ">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input onKeyDown={(e) => handleKey(e, email as React.RefObject<HTMLInputElement>)} ref={name} id="username" value={username} className="col-span-3 outline-none border-[#2A254B]" readOnly/>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input onKeyDown={(e) => handleKey(e, phone as React.RefObject<HTMLInputElement>)} ref={email} id="email" value={userEmail} className="col-span-3 outline-none border-[#2A254B]" readOnly/>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="phone" className="text-right">
              Phone
            </Label>
            <Input onKeyDown={(e) => handleKey(e, country as React.RefObject<HTMLInputElement>)}  ref={phone} id="phone" placeholder="Phone no :" className="col-span-3 outline-none border-[#2A254B]" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="country" className="text-right">
              Country
            </Label>
            <Input onKeyDown={(e) => handleKey(e, postal as React.RefObject<HTMLInputElement>)} ref={country} id="country" placeholder="United States, etc" className="col-span-3 outline-none border-[#2A254B]" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="postalCode" className="text-right">
              Postal Code
            </Label>
            <Input onKeyDown={(e) => handleKey(e, address as React.RefObject<HTMLInputElement>)} ref={postal} id="postalCode" placeholder="eg. 75600" className="col-span-3 outline-none border-[#2A254B]" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="address" className="text-right">
              Address
            </Label>
            <Input onKeyDown={(e) => handleEnter(e)} ref={address} id="address" placeholder="Street No . etc" className="col-span-3 outline-none border-[#2A254B]" />
          </div>
          <div id="require" className="hidden grid-cols-[1fr,3fr] items-center justify-center">
            <div></div>
            <p className="text-center text-[14px] text-red-600">Please fill all the fields !</p>
          </div>
        </div>
        <DialogFooter>
          <Button className="bg-[#2A254B]" type="submit" onClick={()=>{handleCheckOut(cart)}}>Confirm Order</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
export default BillingDialog
