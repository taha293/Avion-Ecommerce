import NAVBAR from "@/components/navbar"
import Footer from "@/components/footer"
import Features from "@/components/features"
import SignUp from "@/components/signup"
import ProductDetails from "@/components/productdetails"
import ShowProducts from "@/components/showproducts"

interface props {
  params : {
      slug:string
  }
}

function Products({params}:props) {
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