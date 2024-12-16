import NAVBAR from "@/components/navbar"
import Features from "@/components/features"
import SignUp from "@/components/signup"
import Footer from "@/components/footer"
import Banner from "@/components/banner"
import Header from "@/components/header"
import AboutFeatures from "@/components/aboutfeatures"
import Aboutfeatures2 from "@/components/aboutfeatures2"

function HomePage(){
  return (
    <div>
    <Banner/>
      <NAVBAR/>
      <Header/>
      <AboutFeatures/>
      <Aboutfeatures2/>
      <Features/>
      <SignUp/>
      <Footer/>
    </div>
  )
}
export default HomePage 