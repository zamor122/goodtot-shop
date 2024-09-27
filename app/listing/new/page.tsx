"use client"

import {User} from '@/app/auth/components/AuthButton';
import TopNav from '@/app/components/TopNav';
import ZipCodeService, {GeocodeResponse} from '@/app/services/geocode';
import {FileUploader} from '@aws-amplify/ui-react-storage';
import '@aws-amplify/ui-react/styles.css';
import {Button, Card, CardHeader, Input, Select, SelectItem, Textarea} from '@nextui-org/react';
import {getCurrentUser} from 'aws-amplify/auth';
import {generateClient} from 'aws-amplify/data';
import {useRouter} from 'next/navigation';
import {useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import "react-image-gallery/styles/css/image-gallery.css";
import {type Schema} from '../../../amplify/data/resource';

const client = generateClient<Schema>();

interface ListingFormInputs {
  title: string;
  description: string;
  price: number;
  zipcode: string;
  category: string;
  files: string[];
}

const categories = [
  "Clothing & Accessories",
  "Toys & Games",
  "Baby Gear",
  "Furniture & Nursery",
  "Books & Media",
  "Feeding",
  "Safety Equipment",
  "Diapers & Potty",
  "Health & Baby Care",
];

export default function Page() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [files, setFiles] = useState<string[]>([]);
  const [pageLoading, setPageLoading] = useState<boolean>(false);
  const [zipcodeResponse, setZipcodeResponse] = useState<GeocodeResponse | null>(null);
  const [zipcodeLoading, setZipcodeLoading] = useState<boolean>(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [submitDisabled, setSubmitDisabled] = useState<boolean>(false);
  const {register, handleSubmit, watch, formState: {errors, isValid, isSubmitted}} = useForm<ListingFormInputs>({
    defaultValues: {
      title: "",
    }
  });

  const watchZipcode = watch("zipcode");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setUser(prevState => ({...prevState, loading: true}));
        const user = await getCurrentUser();
        setUser(user);
      } catch (e) {
        setUser(null);
      } finally {
        setUser(prevState => ({...prevState, loading: false}));
      }
    };

    fetchUser();
  }, []);


  const onSubmit = async (data: ListingFormInputs) => {
    setPageLoading(true);
    if (user?.userId && isValid && files.length > 0) {
      console.log("Zipcode response: ", zipcodeResponse)
      const zipcode = parseInt(data.zipcode)
      const latitudeVal = parseInt(zipcodeResponse?.lat ?? "0")
      const longitudeVal = parseInt(zipcodeResponse?.lon ?? "0")
      const geocodeDisplay = zipcodeResponse?.display_name
      try {

        const {errors, data: newListing} = await client.models.Listing.create({
          title: data.title,
          price: data.price,
          description: data.description,
          userId: user.userId,
          zipCode: zipcode,
          latitude: latitudeVal,
          longitude: longitudeVal,
          locationDisplayName: geocodeDisplay,
          category: data.category,
          isFeatured: false,
          images: files,
          status: 'Active', //Status has to be passed into create, cannot be created in separate type without declaring another type, doesn't work
        })

        if(errors && errors.length > 0) {
          setFormError(`Error occurred while creating your listing: ${errors[0].message}`);
        } else {
          router.push("/account");
        }
      } catch (error) {
        setFormError(`An error ocurred: ${error}`)
        console.error("Error response:", error);
      } finally {
        setPageLoading(false);
      }
    }
  }

  useEffect(() => {
    setZipcodeLoading(true);
    try {
      if (watchZipcode.length === 5) {
        let zipcodeResult = ZipCodeService.fetchGeocodeFromZip(watchZipcode);
        zipcodeResult.then((result) => {
          if (result) {
            setZipcodeResponse(result);
          } else {
            setZipcodeResponse(null);
          }
        })
      }
    } catch (e: any) {
      setFormError(e);
    } finally {
      setZipcodeLoading(false);
    }

  }, [watchZipcode])

  return (
    <>
      <TopNav user={user} showNewListingButton={false} />
      <div className="flex justify-center items-center h-screen w-full">
        <Card className="lg:w-3/5 transition-colors sm:w-11/12 divide-y pb-12 px-12">
          <CardHeader className="md:ml-8 ml-6 mt-8">
            <span className="text-3xl">New listing</span>
          </CardHeader>
          <form onSubmit={handleSubmit(onSubmit)} className="w-11/12 mx-auto p-4 transition-colors">
            <div className="md:grid md:grid-rows-1 md:grid-flow-col gap-4 mb-4">
              <div className="mb-4 md:mb-0">
                <label htmlFor="title" className="text-sm font-medium dark:text-gray-300">Title</label>
                <Input
                  id="title"
                  {...register("title", {
                    required: {
                      value: true,
                      message: "Title is required",
                    },
                    maxLength: {
                      value: 50,
                      message: "Title must be less than 50 characters"
                    },
                    minLength: {
                      value: 5,
                      message: "Title must be at least 5 character"
                    }
                  })}
                  className={`mt-1 block w-full ${errors.title ? "border-red-500" : ""}`}
                />
                {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
              </div>

              <div>
                <label htmlFor="price" className="text-sm font-medium dark:text-gray-300">Price ($)</label>
                <Input
                  startContent={<span className="text-default-400 text-small">$</span>}
                  type="number"
                  id="price"
                  {...register("price", {
                    required: {
                      value: true,
                      message: "Price is required",
                    },
                    max: {
                      value: 1000,
                      message: "Price must be less than $1000"
                    },
                    min: {
                      value: 0,
                      message: "Price must be greater than $1 if item is NOT free"
                    }
                  })}
                  className={`mt-1 block w-full ${errors.price ? "border-red-500" : ""}`}
                />
                {errors.price && <p className="text-red-500 text-sm">{errors.price.message}</p>}
              </div>

            </div>

            <div className="mb-4">
              <label htmlFor="description" className="block text-sm font-medium dark:text-gray-300">Description</label>
              <Textarea
                id="description"
                {...register("description", {
                  required: {
                    value: true,
                    message: "Description is required",
                  },
                  maxLength: {
                    value: 250,
                    message: "Description must be less than 250 characters"
                  },
                  minLength: {
                    value: 10,
                    message: "Description must be at least 10 characters"
                  }
                })}
                className={`mt-1 block w-full ${errors.description ? "border-red-500" : ""}`}
              />
              {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
            </div>

            <div className="md:grid md:grid-rows-1 md:grid-cols-2 md:grid-flow-col gap-4 mb-4">
              <div className="mb-4">
                <label htmlFor="zipcode" className="text-sm font-medium dark:text-gray-300">Zipcode</label>
                <Input
                  id="zipcode"
                  {...register("zipcode", {
                    required: {
                      value: true,
                      message: "Zipcode is required",
                    },
                    maxLength: {
                      value: 5,
                      message: "Zipcode must be 5 characters"
                    },
                    minLength: {
                      value: 5,
                      message: "Zipcode must be 5 characters"
                    },
                  })}
                  className={`mt-1 block w-full ${errors.zipcode ? "border-red-500" : ""}`}
                />
                {(!errors.zipcode && zipcodeResponse && !zipcodeLoading) && <p className="text-slate-500 text-sm flex-wrap">{zipcodeResponse.display_name}</p>}
                {errors.zipcode && <p className="text-red-500 text-sm">{errors.zipcode.message}</p>}
              </div>

              <div className="mb-4">
                <label htmlFor="category" className="text-sm font-medium dark:text-gray-300">Category</label>
                <Select
                  id="category"
                  label="Select a category"
                  {...register("category", {
                    required: {
                      value: true,
                      message: "Category must be selected",
                    },
                  })}
                  className={`mt-1 block w-full ${errors.category ? "border-red-500" : ""}`}
                >
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </Select>
                {errors.category && <p className="text-red-500 text-sm">{errors.category.message}</p>}
              </div>
            </div>

            <div className="mb-4">
              <FileUploader
                acceptedFileTypes={['image/*']}
                path="listing-pictures/"
                maxFileCount={1}
                isResumable
                onUploadSuccess={({ key }) => {
                  if (key) {
                    setFiles((prevFiles) => {
                      return [...prevFiles, key];
                    });
                  }
                }}
                onFileRemove={(file) => {
                  setFiles((prevFiles) => {
                    return prevFiles.filter((key) => key != `listing-pictures/${file.key}`);  // Remove the file key from the array
                  });
                }}
                onUploadError={(error, {key}) => {
                  setFormError(`Error while uploading images, try again...${error}`)
                }}
              />
              {isSubmitted && files.length < 1 && <p className="text-red-500 text-sm">At least one file must be uploaded</p>}
              </div>

            <Button
              type="submit"
              isLoading={pageLoading}
              isDisabled={submitDisabled}
              className="w-full bg-emerald-400 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded"
            >
              Create Listing
            </Button>
          </form>
        </Card>
      </div>
    </>
  );
}