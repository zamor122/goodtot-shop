import {User} from "@/app/auth/components/AuthButton";
import {Card, CardBody, CardHeader} from "@nextui-org/react";
import {CheckCircle2, ShoppingBag, Star, Tag, Users} from "lucide-react";
import {FC, useState} from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import UserImage from "./UserImage";
interface IProps {
  mode: "Owner" | "Guest";
  user: User | null;
  detailsLoading: boolean;
}

const UserCard: FC<IProps> = ({ mode, user, detailsLoading }) => {
  const [profileImage, setProfileImage] = useState<string | null>(null);

  return (
    <Card className="w-full p-8" isBlurred={true}>
      <CardHeader className="flex sm:flex-row flex-col sm:items-center items-center gap-4 pb-2 justify-between">
        <div className="flex sm:flex-row gap-6 flex-col">
          <div className="flex sm:block justify-center sm:justify-start">
            <UserImage path={profileImage} alt="Profile Image" isProfile={true} loading={detailsLoading} verified={true} />
          </div>
        <div className="flex flex-col items-center sm:items-start justify-center">
          <div className="flex items-center gap-2">
            <span className="text-4xl font-bold text-center">John Doe</span>
            <CheckCircle2 className="h-7 w-7 text-emerald-400" />
          </div>
          <span className="text-lg text-muted-foreground">Joined March 2023</span>
          <div className="flex items-center gap-1">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${i < 4 ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground"}`}
                />
              ))}
            </div>
            <span className="text-sm font-medium">(4.0)</span>
          </div>
        </div>
        </div>
        <div className="flex justify-between sm:gap-6 sm:flex-row flex-col">
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
      </CardHeader>
      <CardBody className="grid gap-4 pt-6">
        <div>
          <h3 className="font-semibold mb-2">About</h3>
          <p className="text-sm text-muted-foreground">
            Passionate about photography and outdoor adventures. I sell high-quality used gear and vintage finds. Always looking for unique items!
          </p>
        </div>
      </CardBody>
    </Card>
  );
};

export default UserCard;
