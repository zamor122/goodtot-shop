"use client";

import {User} from "@/app/auth/components/AuthButton";
import "@aws-amplify/ui-react/styles.css";
import {Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader} from "@nextui-org/react";
import {Dispatch, ReactNode, SetStateAction, useState} from "react";
import ProfileImageEditor from "./ProfileEditor/ProfileImageEditor";
import UsernameEditor from "./ProfileEditor/UsernameEditor";
import {UserType} from "../page";
interface IEditPictureModal {
  onOpenChange: () => void;
  isOpen: boolean;
  onClose: () => void;
  currentImage: string | null;
  onSubmitUserImage: () => void,
  newProfileImage: string | null;
  setNewProfileImage: Dispatch<SetStateAction<string | null>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  user: User | null;
  userModel: UserType;
}

export type CompareStateValue = {
  old: string;
  new: string;
}


export default function EditUserModal({
  onOpenChange,
  isOpen,
  onClose,
  currentImage,
  newProfileImage, 
  setNewProfileImage,
  onSubmitUserImage,
  loading,
  setLoading,
  user,
}: IEditPictureModal): ReactNode {
  const [uploadError, _setUploadError] = useState<string>("");
  const [filesUploaded, setFilesUploaded] = useState<string[]>([]);

  const onCloseModal = () => {
    setNewProfileImage(currentImage);
    setFilesUploaded([]);
    onClose();
  };

  const onOpenChangeModal = () => {
    setNewProfileImage(currentImage);
    setFilesUploaded([]);
    onOpenChange();
  };

  return (
    <Modal
      backdrop="opaque"
      isOpen={isOpen}
      onOpenChange={onOpenChangeModal}
      placement="center"
      size="5xl"
    >
      <ModalContent>
        <>
          <ModalHeader className="flex flex-col gap-1">Edit your profile</ModalHeader>
          <ModalBody>
            <form className="w-11/12 mx-auto p-4 transition-colors">
              {user && 
              <ProfileImageEditor 
                currentImage={currentImage} 
                onSubmitUserImage={onSubmitUserImage} 
                newProfileImage={newProfileImage}
                setNewProfileImage={setNewProfileImage}
                loading={loading}
                setLoading={setLoading}
                uploadError={uploadError}
                setFilesUploaded={setFilesUploaded}
                filesUploaded={filesUploaded}
                user={user}
              />}
              {user && <UsernameEditor user={user} />}
            </form>
            <ModalFooter>
              <Button color="danger" variant="flat" onPress={onCloseModal}>
                Close
              </Button>
            </ModalFooter>
          </ModalBody>
        </>
      </ModalContent>
    </Modal>
  );
}