"use client";

import {FileUploader} from "@aws-amplify/ui-react-storage";
import "@aws-amplify/ui-react/styles.css";
import {Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader} from "@nextui-org/react";
import {Dispatch, ReactNode, SetStateAction, useState} from "react";
import {type Schema} from '../../../amplify/data/resource';
import UserImage from "./UserImage";

type UserType = Schema["User"]["type"];

interface IEditPictureModal {
  onOpen: () => void;
  onOpenChange: () => void;
  isOpen: boolean;
  onClose: () => void;
  currentImage: string | null | undefined;
  userId: string | undefined;
  onSubmit: () => void,
  newProfileImage: string | null;
  setNewProfileImage: Dispatch<SetStateAction<string | null>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

export default function EditPictureModal({
  onOpen,
  onOpenChange,
  isOpen,
  onClose,
  currentImage,
  userId,
  newProfileImage, 
  setNewProfileImage,
  onSubmit,
  loading,
  setLoading,
}: IEditPictureModal): ReactNode {
  const [uploadError, setUploadError] = useState<string | null>(null);

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
            <form onSubmit={onSubmit} className="w-11/12 mx-auto p-4 transition-colors">
              <div className="md:grid md:grid-rows-1 md:grid-flow-col gap-4 mb-4">
                <div className="w-full">
                  <span className="border-b-2 w-full flex mb-4 border-emerald-400">Profile picture</span>
                  <div className="sm:justify-between flex sm:flex-row flex-col gap-6 items-center">
                    <div className="w-1/2 flex justify-center items-center">
                      <UserImage path={newProfileImage} onPressEditImage={onSubmit} alt="Proile Image" loading={loading } editable={false} />
                    </div>
                    <div className="w-3/4">
                      <FileUploader
                        acceptedFileTypes={['image/*']}
                        path="profile-pictures/"
                        maxFileCount={1}
                        autoUpload={false}
                        isResumable={false}
                        onUploadStart={() => (
                            setLoading(true)
                        )}
                        onUploadSuccess={({ key }) => {
                          if (key) {
                            setNewProfileImage(key);
                            setLoading(false)
                          }
                        }}
                        onUploadError={() => {
                          setLoading(false);
                        }}
                        onFileRemove={({ key }) => {
                          if (key) {
                            setNewProfileImage(currentImage ?? null); // Reset to initial image
                            setLoading(false);
                          }
                        }}
                      />
                      {uploadError && <p className="text-red-500 text-sm">At least one file must be uploaded</p>}
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
