import {Button} from "@nextui-org/react";

interface IProps {
  onClick: () => void;
  isLoading: boolean;
  isDisabled: boolean;
  additionalClasses?: string;
}

export default function SaveButton({onClick, isLoading, isDisabled, additionalClasses}: IProps) {
  return (
    <Button
          isDisabled={isDisabled}
          className={`bg-emerald-400 dark:text-slate-700 text-amber-50 hover:cursor-pointer ${additionalClasses}`}
          color="primary"
          onPress={onClick}
          isLoading={isLoading}
          spinnerPlacement="end"
        >
          Save
        </Button>
  )
}