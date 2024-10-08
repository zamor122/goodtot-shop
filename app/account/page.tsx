"use client"

import '@aws-amplify/ui-react/styles.css';
import {Button, useDisclosure} from "@nextui-org/react";
import {getCurrentUser, signOut} from "aws-amplify/auth";
import {generateClient} from 'aws-amplify/data';
import {LogOut} from "lucide-react";
import {useRouter} from "next/navigation";
import {useCallback, useEffect, useState} from "react";
import {type Schema} from '../../amplify/data/resource';
import {User} from "../auth/components/AuthButton";
import TopNav from "../components/TopNav";
import useUserListings from "../hooks/useUserListings";
import ListingGrid from "../listing/components/ListingGrid";
import EditPictureModal from "./components/EditPictureModal";
import UserCard from "./components/UserCard";

const client = generateClient<Schema>();
type UserType = Schema["User"]["type"];
type UserUpdateType = Schema["User"]["updateType"];


export default function Page() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [userData, setUserData] = useState<UserType | UserUpdateType | null>(null);
  const [detailsLoading, setDetailsLoading] = useState<boolean>(true);
  const [detailsError, setDetailsError] = useState<string | null>(null);
  const {onOpen, isOpen, onOpenChange, onClose} = useDisclosure();
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [newProfileImage, setNewProfileImage] = useState<string | null>(null);

  const onSignOut = useCallback(async () => {
    try {
      await signOut();
      router.push("/");
      router.refresh();
    } catch (error) {
      console.error("Sign out error: ", error);
    }
  }, [router]);

  //before fetching the user, need to create the user on the BE when user creates an account
  useEffect(() => {
    const fetchUser = async () => {
        try {
            setUser(prevState => ({ ...prevState, loading: true }));
            const user = await getCurrentUser();
            setUser(user);
        } catch (e) {
            router.push("/")
            setUser(null);
        } finally {
            setUser(prevState => ({ ...prevState, loading: false }));
        }
      };

      fetchUser();
  }, [router]);

  useEffect(() => {
    async function fetchUserDetails() {
      setDetailsLoading(true);
      if(user?.userId) {
        try {
          const userResponse = await client.models.User.get({id: user.userId});
          if(userResponse.errors) {
            setDetailsError(`Something happened: ${userResponse.errors[0]}`)
          }
          if(userResponse.data) {
            setDetailsError(null)
            setUserData(userResponse.data)
          }

        } catch (error: any) {
          setDetailsError("Oops! Something happened, try again later")
        } finally {
          setDetailsLoading(false);
        }
      }
    }

    fetchUserDetails()
  }, [user]);

  //TODO: Move call to get user's listings here
  const {listings, error, loading} = useUserListings(user?.userId);


  const onDeleteUserImage = async () => {
    setDetailsLoading(true);
  
    if (user?.userId) {
      const { userId } = user;
  
      try {
        const response = await client.models.User.update({ id: userId, picture: null });
  
        if (response.errors && response.errors.length > 0) {
          setDetailsLoading(false);
          return;
        }
  
        if (response.data ) {
          setNewProfileImage(null);
          setUserData(response.data);
          onClose();
        }
  
        onClose();
      } catch (error: any) {
        setUploadError(`Error deleting user image: ${error}`);
      } finally {
        setDetailsLoading(false);
      }
    }
  };

  const onSubmitUserImage = async () => {
    setDetailsLoading(true)
    if(user?.userId) {
      const {userId} = user;
      try {
        const response = await client.models.User.update({id: userId, picture: newProfileImage});
        if(response.errors && response.errors.length > 0) {
          setUploadError(response.errors[0].message);
          setDetailsLoading(false);
        } else {

          if (response.data ) {
            setUserData(response.data);
            setNewProfileImage(response.data.picture);
            onClose();
          }

        }
      } catch (error: any) {
        setUploadError(`There was an error uploading the file: ${error}`)        
        setDetailsLoading(false)
      } finally {
        setDetailsLoading(false);
      }
    }
  };
  


  return (
    <>
    <TopNav user={user} />
    <div className="flex justify-center items-center min-h-screen">
        <div className="container p-12">
          <div className="flex justify-end mb-8 gap-8">
            {/*TODO: Not sure if we're going to add a following function for MVP yet
             <Button endContent={<UserRoundPlus className="amber-50 dark:stone-700" />} className="bg-emerald-400 text-amber-50 dark:text-stone-700" onClick={onSignOut}>
              Follow
            </Button> */}
            <Button 
              endContent={<LogOut className="amber-50 dark:stone-700" />} 
              className="bg-emerald-400 text-amber-50 dark:text-stone-700" 
              onClick={onSignOut}>
              Sign out
            </Button>
          </div>
          <UserCard 
            onPressEditPicture={onOpen} 
            onPressDeletePicture={onDeleteUserImage} 
            mode="Owner" 
            userDetails={userData} 
            detailsLoading={detailsLoading} 
          />
          <div className="py-12 md:py-16 lg:py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold mb-6 text-center">Listings</h2>
              <ListingGrid 
                listings={listings} 
                error={error} 
                loading={loading} 
              />
            </div>
          </div>
        </div>
      </div>
      <EditPictureModal 
        onSubmit={onSubmitUserImage}
        loading={detailsLoading} 
        setLoading={setDetailsLoading} 
        newProfileImage={newProfileImage} 
        setNewProfileImage={setNewProfileImage} 
        currentImage={userData?.picture ?? null} 
        onClose={onClose} 
        onOpenChange={onOpenChange} 
        isOpen={isOpen} 
      />
    </>
  );
}