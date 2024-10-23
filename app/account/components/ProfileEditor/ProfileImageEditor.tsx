import {FileUploader} from "@aws-amplify/ui-react-storage";
import {Dispatch, SetStateAction} from "react";
import UserImage from "../UserImage";
import SaveButton from "./SaveButton";

interface IProps {
  currentImage: string | null;
  onSubmitUserImage: () => void;
  newProfileImage: string | null;
  setNewProfileImage: Dispatch<SetStateAction<string | null>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setFilesUploaded:  Dispatch<SetStateAction<string[]>>;
  uploadError: string;
  filesUploaded: string[];
}

export default function ProfileImageEditor({
  currentImage,
  onSubmitUserImage,
  newProfileImage,
  setNewProfileImage,
  loading,
  setLoading,
  setFilesUploaded,
  uploadError,
  filesUploaded,
}: IProps) {
  
  return (
    <div className="md:grid md:grid-rows-1 md:grid-flow-col gap-4 mb-4">
      <div className="w-full">
        <span className="border-b-2 w-full flex mb-4 border-emerald-400">Profile picture</span>
        <div className="sm:justify-between flex sm:flex-row flex-col gap-6 items-center">
          <div className="w-1/2 h-full flex justify-center items-center">
            <UserImage
              path={newProfileImage}
              onPressEditImage={onSubmitUserImage}
              alt="Profile Image"
              loading={loading}
              editable={false}
              isProfile={true}
            />
          </div>
          <div className="w-3/4">
            <FileUploader
              acceptedFileTypes={['image/*']}
              path="profile-pictures/"
              maxFileCount={1}
              autoUpload={false}
              isResumable={false}
              onUploadStart={() => setLoading(true)}
              onUploadSuccess={({ key }) => {
                if (key) {
                  setNewProfileImage(key);
                  setLoading(false);
                  setFilesUploaded((prev) => [...prev, key]);
                }
              }}
              onUploadError={() => setLoading(false)}
              onFileRemove={({ key }) => {
                if (key) {
                  setNewProfileImage(currentImage ?? null); // Reset to initial image
                  setLoading(false);
                  setFilesUploaded((prev) => prev.filter((file) => file !== key));
                }
              }}
            />
            {uploadError && <p className="text-red-500 text-sm">At least one file must be uploaded</p>}
          </div>
          <SaveButton additionalClasses="self-end" isLoading={loading} isDisabled={filesUploaded.length < 1} onClick={onSubmitUserImage} />
        </div>
      </div>
    </div>
  )
}