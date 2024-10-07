"use client";

import {FileUploader} from "@aws-amplify/ui-react-storage";
import "@aws-amplify/ui-react/styles.css";
import {Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader} from "@nextui-org/react";
import {ReactNode, useState} from "react";
import {useForm} from "react-hook-form";
import {type Schema} from '../../../amplify/data/resource';
import UserImage from "./UserImage";
import {generateClient} from 'aws-amplify/data';

const client = generateClient<Schema>();

type UserType = Schema["User"]["type"];

interface IEditPictureModal {
  onOpen: () => void;
  onOpenChange: () => void;
  isOpen: boolean;
  onClose: () => void;
  currentImage: string | null | undefined;
  userId: string | undefined;
}

export default function EditPictureModal({
  onOpen,
  onOpenChange,
  isOpen,
  onClose,
  currentImage,
  userId,
}: IEditPictureModal): ReactNode {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [imageKey, setImageKey] = useState<string | null>(null);
  const [imageLoading, setImageLoading] = useState<boolean>(false);


  const onSubmit = async () => {
    if(userId) {
      if(profileImage != currentImage) {
        console.log("Profile image:" , profileImage)
        try{
          const response = await client.models.User.update({id: userId, picture: profileImage});
          if(response.errors && response.errors.length > 0) {
            setUploadError(response.errors[0].message);
          } else {
            onClose();
          }
        } catch (error: any) {
          //TODO: throw an error here
          console.log("Error: ", error);
        } finally {
          //set some loading component here, don't close the modal thought
        }
      } else {
        setUploadError("Try renaming or uploading a different picture")
      }
    }
  };

  const onDelete = async () => {
    if(userId) {
        try{
          const response = await client.models.User.update({id: userId, picture: null});
          if(response.errors && response.errors.length > 0) {
            setUploadError(response.errors[0].message);
          } else {
            onClose();
          }
        } catch (error: any) {
          //TODO: throw an error here
          console.log("Error: ", error);
        } finally {
          //set some loading component here, don't close the modal thought
        }
    }
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
            <form onSubmit={onSubmit} className="w-11/12 mx-auto p-4 transition-colors">
              <div className="md:grid md:grid-rows-1 md:grid-flow-col gap-4 mb-4">
                <div className="w-full">
                  <span className="border-b-2 w-full flex mb-4 border-emerald-400">Profile picture</span>
                  <div className="sm:justify-between flex sm:flex-row flex-col gap-6 items-center">
                    <div className="w-1/2 flex justify-center items-center">
                      <UserImage path={profileImage} alt="Proile Image" loading={imageLoading} isProfile={true} />
                    </div>
                    <div className="w-3/4">
                      <FileUploader
                        acceptedFileTypes={['image/*']}
                        path="profile-pictures/"
                        maxFileCount={1}
                        autoUpload={false}
                        isResumable={false}
                        onUploadStart={() => (
                            setImageLoading(true)
                        )}
                        onUploadSuccess={({ key }) => {
                          if (key) {
                            setProfileImage(key);
                            setImageLoading(false)
                          }
                        }}
                        onUploadError={() => {
                          setImageLoading(false);
                        }}
                        onFileRemove={({ key }) => {
                          if (key) {
                            setProfileImage(currentImage ?? null); // Reset to initial image
                            setImageLoading(false);
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
