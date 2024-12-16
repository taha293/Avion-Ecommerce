import NAVBAR from "@/components/navbar"
import Footer from "@/components/footer"
import Link from "next/link"


function notfound(){
    return(
        <div>
           <NAVBAR/>
           <div className=" flex flex-col justify-center items-center h-[60vh] gap-4">
            <h1 className="text-darkprimary xl:text-[36px] lg:text-[32px] md:text-[28px] sm:text-[26px] text-[24px]">404 Page not Found</h1>
            <Link href='/'><button className="py-4 px-8 bg-lightgrey font-[Satoshi-Regular] leading-6 text-[16px] w-full lg:w-auto hover:bg-[#2A254B] hover:text-white text-darkprimary">Go Home</button></Link>
           </div>
           <Footer/>
        </div>
    )
}
export default notfound