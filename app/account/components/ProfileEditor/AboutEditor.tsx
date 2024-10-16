import {Button, Input, Textarea} from "@nextui-org/react";
import {ChangeEvent, Dispatch, FC, SetStateAction, useCallback, useState} from "react";
import {CompareStateValue} from "../EditUserModal";
import {UserType} from "../../page";
import {generateClient} from 'aws-amplify/data';
import {type Schema} from '../../../../amplify/data/resource';
import SaveButton from "./SaveButton";

const client = generateClient<Schema>();

interface IProps {
  userData: UserType;
  setUserData: Dispatch<SetStateAction<UserType | null>>;
}

export default function AboutEditor({userData, setUserData}: IProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [aboutValue, setAboutValue] = useState<CompareStateValue>({
    old: userData?.about ?? "",
    new: userData?.about ?? ""
  });

  const onSubmitAboutChange = async () => {
    setIsLoading(true); // Set loading to true at the start of the async operation
    try {
      if (userData && userData.userId && aboutValue.new !== "") {
        const { userId } = userData;
        if (aboutValue.old !== aboutValue.new) {
          const { data } = await client.models.User.update({
            id: userId,
            about: aboutValue.new,
          });

          if (data) {
            setUserData(data); // Set new user data
            setAboutValue({
              ...aboutValue,
              old: data.about ?? "", // Update the "old" about with the new one
              new: data.about ?? "",
            });
          }
        }
      }
    } catch (error) {
      console.log("Error: ", error);
    } finally {
      setIsLoading(false); // Only set loading to false once everything completes
    }
  };


  const handleAboutChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAboutValue({
      ...aboutValue,
      new: e.target.value, // Update the new value as the user types
    });
  };

  const isSaveDisabled = 
    aboutValue.old === aboutValue.new || 
    aboutValue.new === "" || isLoading

  return (
    <div className="w-full">
      <span className="border-b-2 w-full flex mb-4 border-emerald-400">About</span>
      <div className="flex items-center justify-between">
        {/* Textbox taking 2/3 of the width */}
        <div className="w-2/3">
          <Textarea
            maxLength={225}
            maxRows={5}
            onChange={handleAboutChange}
            placeholder="Write something about yourself"
            value={aboutValue.new}
          />
        </div>
        
        {/* Button aligned to the right */}
        <div className="ml-4">
          <SaveButton isLoading={isLoading} isDisabled={isSaveDisabled} onClick={onSubmitAboutChange}  />
        </div>
      </div>
    </div>
  );
}