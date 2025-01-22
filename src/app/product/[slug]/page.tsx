import NAVBAR from "@/components/navbar"
import Footer from "@/components/footer"
import Features from "@/components/features"
import SignUp from "@/components/signup"
import ProductDetails from "@/components/productdetails"
import ShowProducts from "@/components/showproducts"

interface ProductsProps {
  params: {
    slug: string;
  };
}

const Products = ({params}:ProductsProps) => {
  const {slug} =  params
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