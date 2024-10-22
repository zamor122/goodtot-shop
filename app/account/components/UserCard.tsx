import {Schema} from "@/amplify/data/resource";
import {formatDateToMonthYear} from "@/app/helpers/DateHelper";
import {Card, CardBody, CardHeader, Skeleton} from "@nextui-org/react";
import {CheckCircle2, ShoppingBag, Star, Tag} from "lucide-react";
import {FC, useCallback, useMemo} from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import UserImage from "./UserImage";

type UserDetails = Schema["User"]["type"];
interface IProps {
  mode: "Owner" | "Guest";
  userDetails: UserDetails | null;
  detailsLoading: boolean;
  onPressEditPicture: () => void;
  onPressDeletePicture: () => void;
}

const UserCard: FC<IProps> = ({ mode, userDetails, detailsLoading, onPressDeletePicture, onPressEditPicture }) => {
  const ratingText = (userDetails && userDetails?.rating && userDetails.rating > 0) ?  userDetails.rating : "No ratings yet"
  const usernameText = (userDetails && userDetails.username) ? userDetails?.username : "Error"
  const userVerified = userDetails?.isVerified
  const aboutText = userDetails && userDetails?.about ? userDetails.about : "Write something about yourself here..."
  const buyerText = userDetails?.bought ?? 0
  const sellerText = userDetails?.sold ?? 0

  const renderUserRating = useMemo(() => {
    if(userDetails && userDetails.rating && userDetails?.rating > 0) {
    return (<div className="flex">
      {[...Array(userDetails.rating)].map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < 4 ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground"}`}
        />
      ))}
    </div>)
    } else {
      return null;
    }
  }, [userDetails])

  const createdAtText = useMemo(() => {
    try {
      if(userDetails && userDetails.createdAt) { 
        return formatDateToMonthYear(userDetails.createdAt);
      }
    } catch (error: any) {
      return "Error"
    }
  }, [userDetails])
  
  return (
    <Card className="w-full p-8" isBlurred={true}>
      <CardHeader className="flex justify-between">
        <span className="sm:text-3xl text-xl text-muted-foreground">Profile</span>
        <div className="flex sm:flex-row flex-col  sm:gap-12 gap-4">
        <Skeleton isLoaded={!detailsLoading}>
          <div className="flex items-center gap-2">
              <ShoppingBag className="h-4 w-4 sm:h-6 sm:w-6 text-muted-foreground" />
              <span className="text-md font-medium">{`${buyerText} bought`}</span>
          </div>
          </Skeleton>
          <Skeleton isLoaded={!detailsLoading}>
            <div className="flex items-center gap-2">
              <Tag className="h-4 w-4 sm:h-6 sm:w-6 text-muted-foreground" />
              <span className="text-md font-medium">{`${sellerText} sold`}</span>
            </div>
          </Skeleton>
        </div>
      </CardHeader>
      <CardBody className="flex sm:align-start align-center">
        <div className="sm:grid sm:grid-rows-1 sm:grid-flow-col sm:gap-6 flex flex-col">
          <div className="flex sm:flex-row flex-col gap-6 items-center">
            <UserImage onPressEditImage={onPressEditPicture} onPressDeleteImage={onPressDeletePicture} path={userDetails?.picture} alt="Profile Image" loading={detailsLoading} verified={true} editable={true} />
            <div className="flex flex-col items-center sm:items-start justify-center">
          <Skeleton isLoaded={!detailsLoading}>
            <div className="flex gap-4">
              {/* TODO: wrap text to multiple lines */}
              <div className="w-full font-bold text-xl sm:text-4xl overflow-hidden text-ellipsis whitespace-normal" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                {usernameText}
                </div>
                {userVerified && <CheckCircle2 className="h-7 w-7 text-emerald-400" />}
            </div>
          </Skeleton>
          <Skeleton isLoaded={!detailsLoading}>
            <span className="text-lg text-muted-foreground">{createdAtText}</span>
          </Skeleton>
          <Skeleton isLoaded={!detailsLoading}>
            <div className="flex items-center gap-1">
              {renderUserRating}
              <span className="text-sm font-medium">({ratingText})</span>
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
        </div>
        </div>
      <div className="flex mt-8">
        <div>
        <Skeleton isLoaded={!detailsLoading}>
          <h3 className="font-semibold text-xl mb-2">About</h3>
            <span className="text-lg text-muted-foreground">
              {aboutText}
            </span>
          </Skeleton>
        </div>
      </div>
      </CardBody>
    </Card>
  );
};

export default UserCard;
