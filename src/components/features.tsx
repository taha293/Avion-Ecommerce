import FeaturesCard from "./featuresCard"
import Fapis from "./featuresapis"
function Features() {
    return (
        <div className="flex flex-col py-12 sm:py-12 lg:py-14  xl:pt-[60px] xl:pb-20  lg:gap-12 xl:gap-[51px]  gap-9 sm:gap-10 text-[#2A254B]">
            <div className="sm:flex sm:justify-center ">
                <h3 className="text-[20px] sm:text-[24px] leading-[33.6px] px-6 w-[80%] sm:text-center">What makes our brand different</h3>
            </div>
            <div className="flex lg:justify-evenly sm:justify-evenly px-6 gap-9 sm:gap-11 sm:px-10 lg:gap-[59px] lg:gap-x-48 xl:gap-x-[59px] flex-wrap xl:px-[28px]">
               { Fapis.map((data) =>
                <FeaturesCard key ={data.key} img={data.img }heading={data.heading} para={data.para}></FeaturesCard>
            )}
                
            </div>
        </div>
    )
}
export default Features 