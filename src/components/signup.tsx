function SignUp() {
    return (
        <div className="py-[55px] px-[90px] bg-lightgrey text-darkprimary">
            <div className=" bg-white flex flex-col">
                <div className="flex flex-col gap-4 items-center my-[70px] ">
                    <h1 className="leading-[50.4px] ">Join the club and get the benefits</h1>
                    <p className="text-[16px] leading-6 font-[Satoshi-Regular] text-center w-[36%]">Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more</p>
                </div>
                <div className="flex justify-center mb-[54px]">
                    <input type="text" placeholder="your@email.com" className="w-[354px] h-[56px] bg-lightgrey text-darkprimary text-[16px] leading-[21.6px] font-[Satoshi-Regular] pl-8 outline-darkprimary" />
                    <button className="py-4 px-8 bg-darkprimary font-[  Satoshi-Regular] text-[16px] leading-6 text-white">Sign up</button>
                </div>
            </div>
        </div>
    )
}
export default SignUp 