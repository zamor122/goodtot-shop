import ListingCard from "./ListingCard";

export default function ListingGrid() {
  return (
    <section className="py-12 md:py-16 lg:py-20">
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold mb-6">Listings</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <ListingCard />
      </div>
    </div>
  </section>
  )
}