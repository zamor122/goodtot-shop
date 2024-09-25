"use client";

import {UseUserListingsResult} from "@/app/hooks/useUserListings";
import {useCallback} from "react";
import ListingCard from "./ListingCard";

export default function ListingGrid({listings=null, loading=false, error=null}: UseUserListingsResult) {

  const renderListings = useCallback(() => {
    if (loading) {
      return <p>Loading listings...</p>; // Show loading state
    }

    if (error) {
      return <p>Error: {error}</p>; // Show error state
    }

    if (listings && listings.length > 0) {
      return listings.map((listing) => (
        <ListingCard key={listing.id} listing={listing} loading={loading} />
      ));
    } else {
      return <p>No listings found.</p>; // If no listings are found
    }
  }, [listings, loading, error]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {renderListings()}
    </div>
  );
}
