import {Button} from '@nextui-org/react';
import {useRouter} from 'next/navigation';
import { FC, useCallback } from 'react';

const CreateListingButton: FC = () => {
  const router = useRouter();

  const navigateToNewListing = useCallback(() => {
    router.push("/listing/new");
  }, [router]);

  return (
    <div className="hidden lg:flex">
    <Button className="bg-white dark:bg-stone-700 text-stone-700 dark:text-white" onClick={navigateToNewListing}>
      Create a new listing
    </Button>
    </div>
  );
}

export default CreateListingButton;
