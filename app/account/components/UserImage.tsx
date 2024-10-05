import {StorageImage} from "@aws-amplify/ui-react-storage";
import {Avatar, AvatarIcon, Badge, Skeleton} from "@nextui-org/react";
import {CheckCircle2} from "lucide-react";
import {ReactElement} from "react";

interface IUserImage {
  path: string | null,
  alt: string,
  loading?: boolean,
  isProfile?: boolean,
  editable?: boolean,
  verified?: boolean,
  //TODO add dropdown flag
}

export default function UserImage({path, alt, loading, editable, verified, isProfile}: IUserImage): ReactElement {
  if(loading) {
    return (
      <Skeleton isLoaded={!loading} className="h-48 w-44 rounded-md border-2 border-emerald-400 contain">
      </Skeleton>

    )
  }
  if(editable) {
    if(path) {
      return (
        <div className="w-1/2 rounded-md border-2 border-emerald-400 contain">
          <StorageImage
            path={path} // Ensure path is always a string
            alt={alt}
            style={{ objectFit: "contain",}}
          />
        </div>
      )
    }
  }
  
  if(isProfile) {
    //Add path to show image here, may need an IMPL method somewhere in here
      if(verified) {
        return (<Badge
          size="md"
          content={<CheckCircle2 className="text-emerald-400 bg-transparent dark:bg-stone-700 rounded-xl" />}
          className="bg-white dark:bg-transparent border-0"
          placement="bottom-right"
        >
          <Avatar isBordered={true} color="success" radius="lg" className="h-36 w-36 bg-white border-emerald-400">
          </Avatar>
        </Badge>)
      } else {
       return ( <Avatar isFocusable={true} isBordered={true} color="success" radius="lg" className="h-36 w-36 bg-white border-emerald-400">
          <AvatarIcon />
        </Avatar>)
      }
  }

  return <Avatar showFallback className="h-44 w-36 bg-white" isBordered color="success" radius="sm" />
}