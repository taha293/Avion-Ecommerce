import NAVBAR from "@/components/navbar"
import Footer from "@/components/footer"
import ListingPRoducts from "@/components/listingproducts"


interface props {
  params : Promise<{
      slug:string
  }>
}

async function listing({params}:props) {
  const {slug} = await params
  return (
    <div>
      <NAVBAR />
      <ListingPRoducts category={slug || "all items"} />
      <Footer />
    </div>
  )
}
export default listing 