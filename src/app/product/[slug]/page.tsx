import NAVBAR from "@/components/navbar"
import Footer from "@/components/footer"
import Features from "@/components/features"
import SignUp from "@/components/signup"
import ProductDetails from "@/components/productdetails"
import ShowProducts from "@/components/showproducts"
import { NextPage } from "next"

interface props {
  params : {
      slug:string
  }
}

const Products: NextPage<props> = async ({ params }) => {
  return (
    <div>
      <NAVBAR />
      <ProductDetails slug= {params.slug}/>
      <ShowProducts/>
      <Features/>
      <SignUp/>
      <Footer />
    </div>
  )
}
export default Products