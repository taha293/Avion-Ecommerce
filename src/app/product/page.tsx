import NAVBAR from "@/components/navbar"
import Footer from "@/components/footer"
import Features from "@/components/features"
import SignUp from "@/components/signup"
import ProductDetails from "@/components/productdetails"
import ShowProducts from "@/components/showproducts"


function Products() {
  return (
    <div>
      <NAVBAR />
      <ProductDetails/>
      <ShowProducts/>
      <Features/>
      <SignUp/>
      <Footer />
    </div>
  )
}
export default Products