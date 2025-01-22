import NAVBAR from "@/components/navbar"
import Footer from "@/components/footer"
import ListingPRoducts from "@/components/listingproducts"

function listing() {
  return (
    <div>
      <NAVBAR />
      <div style={{ backgroundImage: `url('/assets/listbg.jpg')` }} className="h-[146px] sm:h-[159px] md:h-[172px] lg:h-[189px] xl:h-[209px] bg-right flex justify-center items-end text-white pb-8 lg:justify-normal lg:px-20 lg:py-9">
        <h1>All products</h1>
      </div>
      <div className="px-6 py-2 flex justify-between">
        <div className="flex gap-3">
            <button className="hidden lg:block py-3 px-6 font-[Satoshi-Regular] leading-6 text-[16px] text-darkprimary ">Category &thinsp; <span className="text-[10px]">&#9660;</span> </button>
                 
          <button className="py-4 pl-8 pr-6 font-[Satoshi-Regular] leading-6 text-[16px] text-darkprimary lg:hidden bg-lightgrey w-[163px]">Filters &thinsp; <span className="text-[10px]">&#9660;</span> </button>
        </div>
        <div className="flex gap-4 items-center">
            <p className="hidden lg:block text-[14px] text-darkprimary font-[Satoshi-Regular] ">Sorting by:</p>
            <button className="hidden lg:block py-3 px-6 font-[Satoshi-Regular] leading-6 text-[16px] text-darkprimary ">Price &thinsp; <span className="text-[10px]">&#9660;</span> </button>
          </div>
          <button className="py-4 pl-8 pr-6 font-[Satoshi-Regular] leading-6 text-[16px] text-darkprimary lg:hidden bg-lightgrey w-[163px]">Sorting &thinsp; <span className="text-[10px]">&#9660;</span> </button>
      </div>
      <ListingPRoducts />
      <Footer />
    </div>
  )
}
export default listing 