import {StorageImage} from "@aws-amplify/ui-react-storage";
import {Avatar, Badge, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Skeleton} from "@nextui-org/react";
import {CheckCircle2, EditIcon, Trash} from "lucide-react";
import {ReactElement, useCallback} from "react";

interface IUserImage {
  path: string | null | undefined,
  alt: string,
  loading?: boolean,
  isProfile?: boolean,
  editable?: boolean,
  verified?: boolean,
  onPressEditImage?: () => void,
  onPressDeleteImage?: () => void,
}

export default function UserImage({path, alt, loading, editable, verified, isProfile, onPressEditImage, onPressDeleteImage}: IUserImage): ReactElement {
  if(loading) {
    return (
      <Skeleton isLoaded={!loading} className="h-56 w-40 rounded-md border-2 border-emerald-400 contain" />
    )
  }

  const image = useCallback(() => {
    if (path) {
      if (editable) {
        if (verified) {
          return (
            <div className="w-40 h-56 rounded-md border-2 border-emerald-400 hover:cursor-pointer hover:opacity-75">
              <Badge
                size="md"
                id="badge"
                showOutline={false}
                content={<CheckCircle2 className="text-emerald-400 bg-transparent dark:bg-stone-700 rounded-xl mb-7 mr-1.5" />}
                className="bg-white dark:bg-transparent border-0"
                placement="bottom-right"
              >
                <StorageImage
                  path={path} // Ensure path is always a string
                  alt={alt}
                  style={{ objectFit: 'contain' }}
                />
              </Badge>
            </div>
          );
        } else {
          return (
            <div className="w-40 h-56 rounded-md border-2 border-emerald-400">
              <StorageImage
                path={path} // Ensure path is always a string
                alt={alt}
                style={{ objectFit: 'contain' }}
              />
            </div>
          );
        }
      } else {
        return (
          <div className="w-40 h-56 rounded-md border-2 border-emerald-400">
            <StorageImage
              path={path} // Ensure path is always a string
              alt={alt}
              style={{ objectFit: "contain" }}
            />
          </div>
        );
      }
    } else {
      if (editable) {
        return (
          <Avatar
            showFallback
            className="h-40 w-40 bg-white hover:cursor-pointer hover:opacity-75 transition"
            isBordered
            color="success"
            radius="sm"
          />
        );
      } else {
        return (
          <Avatar
            showFallback
            className="h-40 w-40 bg-white"
            isBordered
            color="success"
            radius="sm"
          />
        );
      }
    }
  }, [path, verified, editable, alt]);

  if(editable) {
    if(path) {
      return (
        <Dropdown className="container flex items-center justify-center w-full">
        <DropdownTrigger>
          {image()}
        </DropdownTrigger>
        <DropdownMenu aria-label="profile-image-actions-image">
          <DropdownItem onPress={onPressEditImage} startContent={<EditIcon />} key="edit">
            Change picture
          </DropdownItem>
          <DropdownItem onPress={onPressDeleteImage} startContent={<Trash />} key="delete">
            Delete picture
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
      )
    } else {
      return (
        <Dropdown>
            <DropdownTrigger>
              {image()}
            </DropdownTrigger>
          <DropdownMenu aria-label="profile-image-actions">
            <DropdownItem startContent={<EditIcon />} onPress={onPressEditImage} key="edit">Change picture</DropdownItem>
            <DropdownItem startContent={<Trash />} onPress={onPressDeleteImage} key="delete">Delete picture</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      )
    }
  }
  
  if(isProfile) {
    if(path) {
    //Add path to show image here, may need an IMPL method somewhere in here
      if(verified) {
        return (<Badge
          size="md"
          content={<CheckCircle2 className="text-emerald-400 bg-transparent dark:bg-stone-700 rounded-xl" />}
          className="bg-white dark:bg-transparent border-0"
          placement="bottom-right"
        >
          (image())
        </Badge>)
      } else {
       return image()
      }
    }
  }

  return <Avatar showFallback className="h-44 w-36 bg-white" isBordered color="success" radius="sm" />
}