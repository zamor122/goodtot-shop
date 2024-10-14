import {User} from "@/app/auth/components/AuthButton"
import {Button, Input} from "@nextui-org/react";
import {ChangeEvent, FC, useState} from "react";
import {CompareStateValue} from "../EditUserModal";

interface IProps {
  user: User;
}

export default function UsernameEditor({user}: IProps) {
  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsernameUpdateValue({
      ...usernameUpdateValue,
      new: e.target.value, // Update the new value as the user types
    });
  };

  const [usernameUpdateValue, setUsernameUpdateValue] = useState<CompareStateValue>({
    old: user?.username ?? "",
    new: user?.username ?? ""
  });

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
          <Button
            isDisabled={
              usernameUpdateValue.old === usernameUpdateValue.new || 
              usernameUpdateValue.new === ""
            }
            className="bg-emerald-400 dark:text-slate-700 text-amber-50 hover:cursor-pointer"
            color="primary"
            onPress={() => console.log("Save username")}
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
}