import Image from "next/image"
function NAVBAR(){
    return (
      <div className="w-[100%] h-[132px] flex flex-col items-center">
        <div className="w-[100%] flex justify-between items-center">
          <div className="p-7 flex gap-5 md:order-none order-2">
            <div>
            <Image src='/assets/Search.png' alt="searchbar" width={16} height={16} /></div>
            <div className="md:hidden">
            <Image src='/assets/Menu.png' alt="searchbar" width={16} height={16} /></div>
          </div>
          <div>
            <h3 className="px-7">Avion</h3>
          </div>
          <div className="p-7 md:flex gap-[16px] hidden">
            <Image src='/assets/Shopping--cart.png' alt="searchbar" width={16} height={16} />
            <Image src='/assets/User--avatar.png' alt="searchbar" width={16} height={16} />
          </div>
        </div>
        <div className="w-[95%] h-[1px] bg-[#0000001A] hidden md:block"></div>
        <div className="w-[100%] md:flex justify-center items-center hidden h-[59.5469px]">
          <div>
            <ul className="font-[Satoshi-Regular] text-[16px] text-[#726E8D] flex gap-11">
              <li>Plant pots</li>
              <li>Ceramics</li>
              <li>Tables</li>
              <li>Chairs</li>
              <li>Crockery</li>
              <li>Table wear</li>
              <li>Cutlery</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
  export default NAVBAR 