import NAVBAR from "@/components/navbar"
import Footer from "@/components/footer"
import Features from "@/components/features"
import SignUp from "@/components/signup"
import ProductDetails from "@/components/productdetails"
import ShowProducts from "@/components/showproducts"


interface props {
  params : Promise<{
      slug:string
  }>
}

async function Products({params}:props){
  const {slug} = await params
  return (
    <div>
      <NAVBAR />
      <ProductDetails slug= {slug}/>
      <ShowProducts/>
      <Features/>
      <SignUp/>
      <Footer />
    </div>
  )
}
export default Products