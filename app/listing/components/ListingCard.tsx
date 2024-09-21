import React from "react";
import {type Schema} from '../../../amplify/data/resource';
import {Card, CardBody, Image, Link, Skeleton} from "@nextui-org/react";

type ListingType = Schema["Listing"]["createType"]
interface IListingCardProps {
  isLoaded: boolean;
  listing: ListingType
}

export default function ListingCard({isLoaded, listing}: IListingCardProps) {
  if(listing) {
    const {title, description, price} = listing;
    return (
      <Skeleton isLoaded={isLoaded}>
      <Card>
            <Image
              src="/placeholder.svg"
              alt="Product Image"
              width={400}
              height={300}
              className="rounded-t-md object-cover w-full h-48"
              style={{ aspectRatio: "400/300", objectFit: "cover" }}
            />
            <CardBody className="p-4">
              <h3 className="text-lg font-medium mb-2 truncate">{title}</h3>
              <p className="text-muted-foreground mb-4 truncate">{description}</p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold">${price}</span>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  View
                </Link>
              </div>
            </CardBody>
          </Card>
          </Skeleton>
    )
  } else {
    return null;
  }
}