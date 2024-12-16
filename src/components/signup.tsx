function SignUp() {
    return (
        <div className=" xl:py-[55px] xl:px-[90px] bg-lightgrey text-darkprimary lg:py-11 lg:px-[74px]">
            <div className=" bg-white flex flex-col px-6">
                <div className="flex flex-col gap-4 my-[48px] lg:my-14 xl:my-[70px] ">
                    <h1 className="sm:text-[26px] leading-[50.4px] text-[20px] sm:text-center lg:text-[30px] xl:text-[36px]">Join the club and get the benefits</h1>
                    <div className="xl:flex justify-center">
                    <p className="text-[14px] leading-6 font-[Satoshi-Regular] w-full xl:w-[36%] sm:text-center">Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more</p></div>
                </div>
                <div className="flex mb-[38px] lg:mb-11 xl:mb-14 sm:justify-center">
                    <input type="text" placeholder="your@email.com" className="w-[354px] h-[56px] bg-lightgrey text-darkprimary text-[16px] leading-[21.6px] font-[Satoshi-Regular] pl-8 outline-darkprimary" />
                    <button className="py-4 h-14 w-[118px] bg-darkprimary font-[  Satoshi-Regular] text-[16px] leading-6 text-white">Sign up</button>
                </div>
            </div>
        </div>
    )
}
export default SignUp 