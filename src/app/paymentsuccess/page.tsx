'use client'
import Footer from "@/components/footer"
import NAVBAR from "@/components/navbar"
import Link from "next/link";
import { useEffect } from "react";

function PaymentSuccess() {
    useEffect(() => {
        localStorage.removeItem("cart");
    }, []);
    return (
        <div>
            <NAVBAR />
            <div className="py-6 sm:py-8 md:py-10 lg:py-12 xl:py-14 flex flex-col items-center justify-center px-4">
                <div className="bg-gray-50 p-8 rounded-lg shadow-md w-full max-w-md text-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-20 h-20 text-[#2A254B] mx-auto mb-4"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                    <h2 className="text-2xl font-semibold text-[#2A254B] mb-2">Payment Successful!</h2>
                    <p className="text-[#2A254B] mb-4">Your payment has been processed successfully.  Thank you for your purchase!</p>

                    <Link href="/" className="bg-[#2A254B] hover:bg-[#4d4677] text-white font-bold py-2 px-4 rounded block">  Go Home
                    </Link>
                </div>

            </div>
            <Footer />
        </div>
    )
}
export default PaymentSuccess
