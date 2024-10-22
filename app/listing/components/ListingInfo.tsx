import {StorageImage} from "@aws-amplify/ui-react-storage";
import {Card, CardBody, CardFooter, Link, Skeleton} from "@nextui-org/react";
import {type Schema} from '../../../amplify/data/resource';
import {CirclePlus, Icon} from "lucide-react";
import {formatLocation} from "@/app/helpers/LocationHelper";
import {formatTimeAgo} from "@/app/helpers/TimeAgoHelper";

type ListingType = Schema["Listing"]["type"]
interface IListingCardProps {
  loading: boolean,
  listing: ListingType,
}

export function ListingEmpty() {
  return (
    <CardBody className="h-72 w-full justify-center items-center">
      <CirclePlus size={32}/>
      <span>Create a listing</span>
    </CardBody>
  )
}

//component displays always loading card
export function ListingLoading() {
  return (
    <>
    <CardBody>
      <Skeleton isLoaded={false} className="rounded h-56 w-full" />
    </CardBody>
    <CardFooter className="w-full">
      <div className="flex flex-col gap-4 w-full">
        <Skeleton isLoaded={false} className="h-6 w-32 rounded" />
        <Skeleton isLoaded={false} className="h-12 w-full rounded" />
      </div>
   </CardFooter>
    </>
  )
}

export default function ListingInfo({loading, listing}: IListingCardProps) {
  if(listing) {
    const {id, title, description, price, images, locationDisplayName, createdAt} = listing;
    console.log("Location: ", locationDisplayName)
    const thumbnailImage = images && images[0]
    return (
      <>
  {/* CardBody - Ensure the image fills the CardBody */}
    <CardBody className="flex flex-col h-full w-full items-start p-0 m-0 overflow-hidden">
      <Skeleton isLoaded={!loading} className="w-full">
        <StorageImage
          path={thumbnailImage ?? "/placeholder.svg"}
          alt={title}
          className="w-full object-cover rounded-t-md" // Ensure the image takes full width and maintains aspect ratio
          style={{ width:"100%"}} // Ensures that the image covers the container fully without distortion
        />
      </Skeleton>
    </CardBody>

  
  <CardFooter className="p-4 flex flex-col h-1/2 items-start py-2 px-4">
    {/* Price and Location at the Top */}
    <Skeleton isLoaded={!loading} className="w-full mb-4">
      <div className="flex items-start justify-between">
        <span className="text-xl font-semibold dark:text-stone-50 slate-700">${price}</span>
        <div>
          <span className="text-sm font-normal dark:text-stone-400 slate-300 self-end">{formatLocation(locationDisplayName)}</span>
          <span className="text-sm font-light truncate overflow-hidden text-ellipsis whitespace-nowrap text-balance line-clamp-2 dark:text-stone-400 slate-200 absolute right-0">{formatTimeAgo(createdAt)}</span>
        </div>
      </div>
    </Skeleton>

    <Skeleton isLoaded={!loading} className="w-full">
  <p className="text-md truncate overflow-hidden text-ellipsis whitespace-nowrap dark:text-stone-300 slate-400">
    {title}
  </p>
</Skeleton>


    {/* Description */}
    <Skeleton isLoaded={!loading} className="w-full mt-2">
      <span className="text-sm font-light truncate overflow-hidden text-ellipsis whitespace-nowrap text-balance line-clamp-2 dark:text-stone-400 slate-300">
        {description}
      </span>
    </Skeleton>
  </CardFooter>

  </>
    )
  } else {
    return null;
  }
}