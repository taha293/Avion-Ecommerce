import NAVBAR from "@/components/navbar"
import Footer from "@/components/footer"
import ListingPRoducts from "@/components/listingproducts"

function listing() {
  return (
    <div>
      <NAVBAR />
      <ListingPRoducts category="all items"/>
      <Footer />
    </div>
  )
}
export default listing 