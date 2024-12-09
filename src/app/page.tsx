import NAVBAR from "@/components/navbar"
import HeRo from "@/components/heros"
import Features from "@/components/features"
import Listings from "@/components/listings"
import SignUp from "@/components/signup"
import Features2 from "@/components/features2"
import Footer from "@/components/footer"

function HomePage(){
  return (
    <div>
      <NAVBAR/>
      <HeRo/>
      <Features/>
      <Listings/>
      <SignUp/>
      <Features2/>
      <Footer/>
    </div>
  )
}
export default HomePage 