import Image from "next/image"
import FeaturesCard from "./featuresCard"
import Fapis from "./featuresapis"
function Features() {
    return (
        <div className="flex flex-col pt-[60px] pb-20 items-center gap-[51px] text-[#2A254B]">
            <div>
                <h3 className="leading-[33.6px]">What makes our brand different</h3>
            </div>
            <div className="flex justify-evenly gap-[59px] flex-wrap px-[86px]">
               { Fapis.map((data) =>
                <FeaturesCard key ={data.key} img={data.img }heading={data.heading} para={data.para}></FeaturesCard>
            )}
                
            </div>
        </div>
    )
}
export default Features 