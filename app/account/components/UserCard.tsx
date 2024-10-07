import {Schema} from "@/amplify/data/resource";
import {formatDateToMonthYear} from "@/app/helpers/DateHelper";
import {Card, CardBody, Skeleton} from "@nextui-org/react";
import {CheckCircle2, ShoppingBag, Star, Tag} from "lucide-react";
import {FC} from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import UserImage from "./UserImage";

type UserDetails = Schema["User"]["type"];
type UserUpdateDetailsType = Schema["User"]["updateType"]
interface IProps {
  mode: "Owner" | "Guest";
  userDetails: UserDetails | UserUpdateDetailsType | null;
  detailsLoading: boolean;
  onPressEditPicture: () => void;
  onPressDeletePicture: () => void;
}

const UserCard: FC<IProps> = ({ mode, userDetails, detailsLoading, onPressDeletePicture, onPressEditPicture }) => {

  return (
    <Card className="w-full p-8" isBlurred={true}>
      <CardBody>
        <div className="sm:grid sm:grid-rows-1 sm:grid-flow-col sm:gap-6 flex flex-col">
          <div className="flex sm:flex-row flex-col gap-6 items-center">
            <UserImage onPressEditImage={onPressEditPicture} onPressDeleteImage={onPressDeletePicture} path={userDetails?.picture} alt="Profile Image" loading={detailsLoading} verified={true} editable={true} />
            <div className="flex flex-col items-center sm:items-start justify-center">
          <Skeleton isLoaded={!detailsLoading}>
            <>
              {/* TODO: wrap text to multiple lines */}
              <div className="w-full text-xl sm:text-4xl overflow-hidden text-ellipsis whitespace-normal" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
              {userDetails?.username ?? ""}
                </div>
                {userDetails?.isVerified && <CheckCircle2 className="h-7 w-7 text-emerald-400" />}
            </>
          </Skeleton>
          <Skeleton isLoaded={!detailsLoading}>
            <span className="text-lg text-muted-foreground">{userDetails?.createdAt && formatDateToMonthYear(userDetails.createdAt)}</span>
          </Skeleton>
          <Skeleton isLoaded={!detailsLoading}>
            <div className="flex items-center gap-1">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < 4 ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground"}`}
                  />
                ))}
              </div>
              <span className="text-sm font-medium">({userDetails?.rating ?? 0})</span>
            </div>
          </Skeleton>
        </div>
          </div>
        <div className="flex items-center sm:items-start justify-between sm:gap-6 sm:flex-row flex-col">
          {/* 

          TODO: Implement followers as MVP 2.0
          
          <div className="flex items-center gap-2">
            <Users className="h-6 w-6 text-muted-foreground" />
            <span className="text-xl font-medium">1.2k followers</span>
          </div> */}
          <Skeleton isLoaded={!detailsLoading}>
          <div className="flex items-center gap-2">
              <ShoppingBag className="h-6 w-6 text-muted-foreground" />
              <span className="text-xl font-medium">{`${userDetails?.buyer && (userDetails.buyer.length - 1)} bought`}</span>
          </div>
          </Skeleton>
          <Skeleton isLoaded={!detailsLoading}>
            <div className="flex items-center gap-2">
              <Tag className="h-6 w-6 text-muted-foreground" />
              <span className="text-xl font-medium">{`${userDetails?.seller && (userDetails.seller.length - 1)} sold`}</span>
            </div>
          </Skeleton>
        </div>
        </div>
      <div className="flex mt-8">
        <div>
        <Skeleton isLoaded={!detailsLoading}>
          <h3 className="font-semibold text-xl mb-2">About</h3>
            <p className="text-lg text-muted-foreground">
              Passionate about photography and outdoor adventures. I sell high-quality used gear and vintage finds. Always looking for unique items!
            </p>
          </Skeleton>
        </div>
      </div>
      </CardBody>
    </Card>
  );
};

export default UserCard;
