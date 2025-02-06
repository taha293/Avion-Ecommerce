'use client'
import { product } from "@/types/product"
import { useUser } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import {
    SignInButton,
  } from '@clerk/nextjs'
import BillingDialog from "./billingdialog"

function CartItems() {
    
    const {isSignedIn} = useUser()
    const [cart,setCart] = useState(JSON.parse('{}'))
    let total = 0
    const [cartItems,setCartItems] = useState<product[] | []>([])
    useEffect(()=>{
    setCart(JSON.parse(localStorage.getItem('cart') || '{}'))
    },[])
    useEffect(()=>{
    setCartItems(Object.values(cart))
    },[cart])
    function handleAdd(data:product){
        const updatedCart = {...cart}
        if(updatedCart[data.name]){
            updatedCart[data.name] = {
                ...updatedCart[data.name],
                quantity:updatedCart[data.name].quantity + 1
            }
        } 
        setCart(updatedCart)
        if (typeof window !== 'undefined' && window.localStorage){
        localStorage.setItem("cart",JSON.stringify(updatedCart))
        }else{
            console.log("Use browser");
            
        }
    }
    function handleSubtract(data:product){
        const updatedCart = {...cart}
        if(updatedCart[data.name].quantity != 1){
        if(updatedCart[data.name]){
            updatedCart[data.name] = {
                ...updatedCart[data.name],
                quantity:updatedCart[data.name].quantity - 1
            }
        } 
    } else if (updatedCart[data.name].quantity == 1){
        delete updatedCart[data.name]
    }
        setCart(updatedCart)
        if (typeof window !== 'undefined' && window.localStorage){  
        localStorage.setItem("cart",JSON.stringify(updatedCart))
        }else{
            console.log("Use browser");
            
        }
    }
    return (
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
                {cartItems.length === 0?
                <div>
                    <p className="text-center my-5 p-8 font-sans bg-bordergrey sm:text-[17px] md:text-[18px] lg:text-[20px]">Your Cart is empty ! </p>
                </div>
                :cartItems.map((elem) =>
                    <div className="grid lg:grid-cols-[3fr,2fr,0fr]" key={elem._id}>
                        <div className="flex  gap-5">
                            <div>
                                <Image className="cursor-pointer" src={`${elem.image}?w=109&h=134&fit=crop`} alt={elem.name} height={134} width={109}></Image>
                                <div className="hidden">
                                {total = total + (elem.price * elem.quantity)}
                                </div>
                            </div>
                            <div className="w-[180px] flex flex-col justify-evenly">
                                <h4>{elem.name}</h4>
                                <p className="text-[14px] font-[Satoshi-Regular]">{elem.description.slice(0, 38)}...</p>
                                <p className="text-[18px] font-[Satoshi-Regular] hidden lg:block">£{elem.price}</p>
                                <p className="text-[18px] font-[Satoshi-Regular] lg:hidden">£{elem.price * elem.quantity} <span className="text-[14px]">(£{elem.price} each)</span> </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-5 ml-[15px] sm:ml-4 lg:ml-0">
                            <button className="text-[26px]" onClick={()=> handleSubtract(elem)}>-</button>
                            <p>{elem.quantity}</p>
                            <button className="text-[26px]" onClick={()=> handleAdd(elem)} >+</button>
                        </div>
                        <div><p className="text-[18px] font-[Satoshi-Regular] h-full items-center lg:flex hidden">£{elem.price * elem.quantity}</p></div>
                    </div>
                )}
                <div className="w-full h-[1px] bg-bordergrey"></div>
            </div>
            <div className="flex flex-col gap-4 items-end">
                <div className="flex gap-4 items-center">
                    <h4 className="text-[#4E4D93]">Subtotal</h4>
                    <h3>£{total}</h3>
                </div>
                <p className="text-[14px] font-[Satoshi-Regular] text-[#4E4D93]">Taxes and shipping are calculated at checkout</p>
                {total !== 0?(isSignedIn?<BillingDialog cart={cartItems}/>
                :
                <SignInButton>
                <button className="py-4 px-8 hover:text-darkprimary hover:bg-lightgrey font-[Satoshi-Regular] leading-6 text-[16px] w-full lg:w-[172px] bg-[#2A254B] text-white">Sign In</button>
                </SignInButton>
            )
                :
                <Link href={'/listings'} className="w-full lg:w-[172px]" > <button className="py-4 px-8 hover:text-darkprimary hover:bg-lightgrey font-[Satoshi-Regular] leading-6 text-[16px] w-full lg:w-[172px] bg-[#2A254B] text-white">See Products</button></Link>}

            </div>
        </div>
    )
}
export default CartItems