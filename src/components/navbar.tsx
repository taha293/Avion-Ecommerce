import Image from "next/image"
import Link from "next/link"
import UserDialog from "./userdialog"
import SearchDialog from "./searchdialog"

function NAVBAR(){
    return (
      <div className="w-[100%] h-auto flex flex-col items-center">
        <div className="w-[100%] flex justify-between items-center">
          <div className="p-7 flex gap-5 md:order-none order-2">
            <div>
            <SearchDialog/></div>
            <div className="md:hidden max-w-[1440px] m-auto">
            <UserDialog/>
            </div>
            <div className="md:hidden">
            <Image  className="cursor-pointer" src='/assets/Menu.png' alt="searchbar" width={16} height={16} /></div>
          </div>
          <div>
            <h3 className="px-7">Avion</h3>
          </div>
          <div className="p-7 md:flex gap-[16px] hidden">
            <Link href="/cart"><Image  className="cursor-pointer"src='/assets/Shopping--cart.png' alt="" width={16} height={16} /></Link>
            <UserDialog/>
          </div>
        </div>
        <div className="w-[95%] h-[1px] bg-[#0000001A] hidden md:block"></div>
        <div className="w-[100%] md:flex justify-center items-center hidden h-[59.5469px]">
          <div>
            <ul className="font-[Satoshi-Regular] text-[16px] text-[#726E8D] flex gap-11">
            <Link href="/"><li>Home</li></Link>
            <Link href="/about"><li>About</li></Link>
              <Link href="/listings"><li>Products</li></Link>
              <Link href="/product"><li>Product</li></Link>
              <Link href="/cart"><li>Cart</li></Link>
              <Link href="/listings"><li>Table wear</li></Link>
              <Link href="/listings"><li>Cutlery</li></Link>
            </ul>
          </div>
        </div>
      </div>
    )
  }
  export default NAVBAR 