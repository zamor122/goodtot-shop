import { StorageImage } from "@aws-amplify/ui-react-storage";
import { Avatar, Badge, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Skeleton } from "@nextui-org/react";
import { CheckCircle2, EditIcon, Trash } from "lucide-react";
import { ReactElement, useCallback } from "react";

interface IUserImage {
  path: string | null | undefined;
  alt: string;
  loading?: boolean;
  isProfile?: boolean;
  editable?: boolean;
  verified?: boolean;
  onPressEditImage?: () => void;
  onPressDeleteImage?: () => void;
}

export default function UserImage({
  path,
  alt,
  loading,
  editable,
  verified,
  isProfile,
  onPressEditImage,
  onPressDeleteImage,
}: IUserImage): ReactElement {

  const image = useCallback(() => {
    if (path) {
      const imgElement = (
        <StorageImage
          path={path}
          alt={alt}
          style={{
            objectFit: "cover",  // Ensures the image fills the container while keeping its aspect ratio
            width: "100%",       // Makes sure the image takes up the full width of the container
            height: "100%",      // Makes sure the image takes up the full height of the container
          }}
        />
      );

      const verifiedBadge = (
        <Badge
          size="md"
          id="badge"
          showOutline={false}
          content={<CheckCircle2 className="text-emerald-400 bg-transparent dark:bg-stone-700 rounded-xl mb-7 mr-1.5" />}
          className="bg-white p-1 dark:bg-transparent border-0"
          placement="bottom-right"
        >
          {imgElement}
        </Badge>
      );

      return (
        <div className={`rounded-md border-2 border-emerald-400 overflow-hidden box-border ${editable ? "hover:cursor-pointer hover:opacity-75 transition" : ""}`}>
          {verified ? verifiedBadge : imgElement}
        </div>
      );
    } else {
      return (
        <Avatar
          showFallback
          className={`h-40 w-40 bg-white ${editable ? "hover:cursor-pointer hover:opacity-75 transition" : ""}`}
          isBordered
          color="success"
          radius="sm"
        />
      );
    }
  }, [path, verified, editable, alt]);

  const profilePicture = image();

  if (loading) {
    return <Skeleton isLoaded={!loading} className="h-56 w-40 rounded-md border-2 border-emerald-400 contain" />;
  }

  if (editable) {
    return (
      <Dropdown className="container flex items-center justify-center w-full">
        <DropdownTrigger>{profilePicture}</DropdownTrigger>
        <DropdownMenu aria-label="profile-image-actions">
          <DropdownItem onPress={onPressEditImage} startContent={<EditIcon />} key="edit">
            Change picture
          </DropdownItem>
          <DropdownItem onPress={onPressDeleteImage} startContent={<Trash />} key="delete">
            Delete picture
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }

  if (isProfile && path) {
    return verified ? (
      <Badge
        size="md"
        content={<CheckCircle2 className="text-emerald-400 bg-transparent dark:bg-stone-700 rounded-xl" />}
        className="bg-white dark:bg-transparent border-0"
        placement="bottom-right"
      >
        {profilePicture}
      </Badge>
    ) : (
      profilePicture
    );
  }

  return <Avatar showFallback className="h-44 w-36 bg-white" isBordered color="success" radius="sm" />;
}
