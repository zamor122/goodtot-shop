"use client";

import {UseUserListingsResult} from "@/app/hooks/useUserListings";
import {useCallback} from "react";
import ListingCardWrapper from "./ListingCardWrapper";
import ListingInfo, {ListingEmpty, ListingLoading} from "./ListingInfo";


export default function ListingGrid({listings=null, loading=false, error=null, user=null}: UseUserListingsResult) {

  const listingLink = user?.userId ? "/listing/new" : "/auth";

  const renderListings = useCallback(() => {
    // Prioritize error handling over loading
    if (error) {
      return <div>Error loading listings: {error}</div>;
    }
  
    // If listings are still loading and there's no error, show a loading placeholder
    if (loading) {
      const emptyArr = Array(4).fill(null);
      return emptyArr.map((_, index) => (
        <ListingCardWrapper key={index} link={listingLink}>
          <ListingLoading />
        </ListingCardWrapper>
      ));
    }
  
    // Handle the case where listings is undefined or null explicitly
    if (!listings || listings.length === 0) {
      return <ListingCardWrapper key={"empty"} link={listingLink}>
      <ListingEmpty />
    </ListingCardWrapper>
    }
  
    // If listings are available, map over them to render the individual cards
    const listingsRendered =  listings.map((listing) => {
      const { id } = listing;
  
      return (
        <ListingCardWrapper key={id} link={`/listings/${id}`}>
          <ListingInfo listing={listing} loading={loading} />
        </ListingCardWrapper>
      );
    });

    return listingsRendered.concat(<ListingCardWrapper key="create" link={listingLink}><ListingEmpty /></ListingCardWrapper>)
  }, [listings, loading, error, listingLink]);

  return (
<div className="grid grid-cols-1 2xl:grid-cols-4 xl:grid-cols-3 sm:grid-cols-2 gap-6 justify-items-center place-items-center">
  {renderListings()}
</div>
  );
}
