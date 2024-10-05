"use client";

import { FileUploader, StorageImage } from "@aws-amplify/ui-react-storage";
import { Avatar, Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/react";
import { ReactNode, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import "@aws-amplify/ui-react/styles.css";
import UserImage from "./UserImage";

interface IEditUserModal {
  onOpen: () => void;
  isOpen: boolean;
  onOpenChange: () => void;
  onClose: () => void;
  currentImage: string | null;
}

interface EditProfileInputs {
  files?: string[];
}

export default function EditUserModal({
  onOpen,
  isOpen,
  onOpenChange,
  onClose,
  currentImage,
}: IEditUserModal): ReactNode {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const { handleSubmit, formState: { isSubmitted } } = useForm<EditProfileInputs>();
  const [imageKey, setImageKey] = useState<string | null>(null);

  const onSubmit = () => {

  };

  return (
    <Modal
      backdrop="opaque"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      placement="center"
      size="5xl"
    >
      <ModalContent>
        <>
          <ModalHeader className="flex flex-col gap-1">Edit your profile</ModalHeader>
          <ModalBody>
            <form onSubmit={handleSubmit(onSubmit)} className="w-11/12 mx-auto p-4 transition-colors">
              <div className="md:grid md:grid-rows-1 md:grid-flow-col gap-4 mb-4">
                <div className="w-full">
                  <span className="border-b-2 w-full flex mb-4 border-emerald-400">Profile picture</span>
                  <div className="sm:justify-between flex sm:flex-row flex-col gap-6 items-center">
                    <div className="w-1/2 flex justify-center items-center">
                      <UserImage path={profileImage} alt="Proile Image" loading={false} editable={true} />
                    </div>
                    <div className="w-3/4">
                      <FileUploader
                        acceptedFileTypes={['image/*']}
                        path="profile-pictures/"
                        maxFileCount={1}
                        autoUpload={false}
                        isResumable={false}
                        onUploadSuccess={({ key }) => {
                          if (key) {
                            setProfileImage(key);
                          }
                        }}
                        onFileRemove={({ key }) => {
                          if (key) {
                            setProfileImage(currentImage); // Reset to initial image
                          }
                        }}
                      />
                      {isSubmitted && !profileImage && (
                        <p className="text-red-500 text-sm">At least one file must be uploaded</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <ModalFooter>
              <Button color="danger" variant="flat" onPress={onClose}>
                Close
              </Button>
              <Button color="primary" onPress={onSubmit}>
                Save
              </Button>
            </ModalFooter>
          </ModalBody>
        </>
      </ModalContent>
    </Modal>
  );
}
