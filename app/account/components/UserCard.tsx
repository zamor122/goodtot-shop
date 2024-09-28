import { CheckCircle, Star, ShoppingBag, Tag, Users } from "lucide-react"
import {Avatar, AvatarIcon, Badge, Card, CardBody, CardHeader} from "@nextui-org/react"
import {CheckIcon} from "@/app/components/CheckIcon"
import {useState} from "react"
import {generateClient} from 'aws-amplify/data';
import {type Schema} from '../../../amplify/data/resource';

const client = generateClient<Schema>();
const ListingType = client.models.Listing.

interface IProps {
  mode: "Owner" | "Guest",
  listings?: array<ListingType[]> | null;
}

export default function UserCard() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextListing = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % listings.length)
  }

  const prevListing = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + listings.length) % listings.length)
  }

  return (
    <Card className="w-ful\l p-8" isBlurred={true}>
      <CardHeader className="flex flex-row items-start gap-4 pb-2">
      <Badge
        isOneChar
        content={<CheckIcon />}
        color="success"
        placement="bottom-right"
      >
        <Avatar isBordered={true} color="success" radius="md" className="h-32 w-32 bg-transparent">
          <AvatarIcon />
        </Avatar>
        </Badge>
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="text-4xl font-bold">John Doe</span>
            <CheckCircle className="h-7 w-7 text-green-500" />
          </div>
          <span className="text-lg text-muted-foreground">Joined March 2023</span>
          <div className="flex items-center gap-1">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`h-4 w-4 ${i < 4 ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground"}`} />
            ))}
          </div>
          <span className="text-sm font-medium">(4.0)</span>
        </div>
        </div>
      </CardHeader>
      <CardBody className="grid gap-4 pt-6">
        <div>
          <h3 className="font-semibold mb-2">About</h3>
          <p className="text-sm text-muted-foreground">
            Passionate about photography and outdoor adventures. I sell high-quality used gear and vintage finds. Always looking for unique items!
            Passionate about photography and outdoor adventures. I sell high-quality used gear and vintage finds. Always looking for unique items!
            Passionate about photography and outdoor adventures. I sell high-quality used gear and vintage finds. Always looking for unique items!
          </p>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <Users className="h-6 w-6 text-muted-foreground" />
            <span className="text-xl font-medium">1.2k followers</span>
          </div>
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-6 w-6 text-muted-foreground" />
            <span className="text-xl font-medium">150 bought</span>
          </div>
          <div className="flex items-center gap-2">
            <Tag className="h-6 w-6 text-muted-foreground" />
            <span className="text-xl font-medium">200 sold</span>
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Active Listings ({listings.length})</h3>
          <div className="relative">
            <div className="overflow-hidden">
              <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {listings.map((listing) => (
                  <div key={listing.id} className="w-full flex-shrink-0">
                    <ListingCard listing={listing} />
                  </div>
                ))}
              </div>
            </div>
            <Button
              variant="outline"
              size="icon"
              className="absolute top-1/2 left-2 -translate-y-1/2"
              onClick={prevListing}
              aria-label="Previous listing"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute top-1/2 right-2 -translate-y-1/2"
              onClick={nextListing}
              aria-label="Next listing"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div>
      </CardBody>
    </Card>
  )
}