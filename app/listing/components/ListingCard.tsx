import React from "react";
import {type Schema} from '../../../amplify/data/resource';
import {Card, CardBody, image, Image, Link, Skeleton} from "@nextui-org/react";
import {StorageImage} from "@aws-amplify/ui-react-storage";

type ListingType = Schema["Listing"]["type"]
interface IListingCardProps {
  loading: boolean;
  listing: ListingType
}

export default function ListingCard({loading, listing}: IListingCardProps) {
  if(listing) {
    const {id, title, description, price, images} = listing;
    const thumbnailImage = images && images[0]
    console.log(thumbnailImage)
    return (
<Skeleton isLoaded={!loading} key={id}>
  <Card>
    <Skeleton isLoaded={!loading}>
      <div className="relative w-full h-64"> {/* Fixed height for the image */}
        <StorageImage
          path={ thumbnailImage ?? "/placeholder.svg"}
          alt={title}
          className="rounded-t-md w-full h-full" // Ensure image takes full width and height of container
          style={{ objectFit: "contain" }} // Ensure the image covers the fixed container without distortion
          sizes="(max-width: 640px) 200vw, (max-width: 768px) 50vw, 33vw" // Responsive sizes
    /*       srcSet={`${thumbnailImage ?? "/placeholder.svg"} 400w,
                  ${thumbnailImage ?? "/placeholder.svg"} 800w,
                  ${thumbnailImage ?? "/placeholder.svg"} 1200w`}  */// Image resolutions for different screens
        />
      </div>
    </Skeleton>
    <CardBody className="p-4">
      <Skeleton isLoaded={!loading}>
        <h3 className="text-lg font-medium mb-2 truncate">{title}</h3>
      </Skeleton>
      <Skeleton isLoaded={!loading}>
        <p className="text-muted-foreground mb-4 truncate">{description}</p>
      </Skeleton>
      <Skeleton isLoaded={!loading}>
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold">${price}</span>
          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            View
          </Link>
        </div>
      </Skeleton>
    </CardBody>
  </Card>
</Skeleton>

    )
  } else {
    return null;
  }
}