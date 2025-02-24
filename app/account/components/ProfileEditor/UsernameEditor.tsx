import {Button, Input} from "@nextui-org/react";
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

export default function UsernameEditor({userData, setUserData}: IProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [usernameUpdateValue, setUsernameUpdateValue] = useState<CompareStateValue>({
    old: userData?.username ?? "",
    new: userData?.username ?? ""
  });

  const onSubmitUsernameChange = async () => {
    setIsLoading(true); // Set loading to true at the start of the async operation
    try {
      if (userData && userData.userId && usernameUpdateValue.new !== "") {
        const { userId } = userData;
        if (usernameUpdateValue.old !== usernameUpdateValue.new) {
          const { data } = await client.models.User.update({
            id: userId,
            username: usernameUpdateValue.new,
          });

          if (data) {
            setUserData(data); // Set new user data
            setUsernameUpdateValue({
              ...usernameUpdateValue,
              old: data.username ?? "", // Update the "old" username with the new one
              new: data.username ?? "",
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


  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsernameUpdateValue({
      ...usernameUpdateValue,
      new: e.target.value, // Update the new value as the user types
    });
  };

  const isSaveDisabled = 
    usernameUpdateValue.old === usernameUpdateValue.new || 
              usernameUpdateValue.new === "" || isLoading

  return (
    <div className="w-full">
      <span className="border-b-2 w-full flex mb-4 border-emerald-400">Username</span>
      <div className="flex items-center justify-between">
        {/* Textbox taking 2/3 of the width */}
        <div className="w-2/3">
          <Input
            type="text"
            maxLength={25}
            onChange={handleUsernameChange}
            placeholder="Enter a username"
            value={usernameUpdateValue.new}
          />
        </div>
        
        {/* Button aligned to the right */}
        <div className="ml-4">
          <SaveButton isLoading={isLoading} isDisabled={isSaveDisabled} onClick={onSubmitUsernameChange}  />
        </div>
      </div>
    </div>
  );
}