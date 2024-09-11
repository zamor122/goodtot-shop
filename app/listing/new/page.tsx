"use client"

import {User} from '@/app/auth/components/AuthButton';
import TopNav from '@/app/components/TopNav';
import ZipCodeService, {GeocodeResponse} from '@/app/services/geocode';
import {Card, CardHeader, Input, Select, SelectItem, Textarea} from '@nextui-org/react';
import {getCurrentUser} from 'aws-amplify/auth';
import { useCallback, useEffect, useState } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import "react-image-gallery/styles/css/image-gallery.css";
import {array, number, object, string} from 'yup';

interface ListingFormInputs {
  title: string;
  description: string;
  price: number;
  zipcode: string;
  category: string;
  images: FileList;
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
  const [zipcodeResponse, setZipcodeResponse] = useState<string | null>(null);
  const [zipcodeLoading, setZipcodeLoading] = useState<boolean>(false);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const [formError, setFormError] = useState<string | null>(null);
  const { getValues, control , register, handleSubmit, watch, formState: { errors } } = useForm<ListingFormInputs>({
    defaultValues: {
      title: "",
    }
  });

  const watchZipcode = watch("zipcode");
  const watchImages = watch("images");

  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    const fetchUser = async () => {
        try {
            setUser(prevState => ({ ...prevState, loading: true }));
            const user = await getCurrentUser();
            console.log("User from context: ", user);
            setUser(user);
        } catch (e) {
            setUser(null);
        } finally {
            setUser(prevState => ({ ...prevState, loading: false }));
        }
      };

      fetchUser();
  }, []);

  // Generate image previews when files are selected
  const handleImageChange = () => {
    if (watchImages && watchImages.length > 0) {
      const imageUrls = Array.from(watchImages).map(file => URL.createObjectURL(file));
      setImagePreviews(imageUrls);
    } else {
      setImagePreviews([]);
    }
  };

  const onSubmit: SubmitHandler<ListingFormInputs> = (data) => {
    console.log("Form Submitted", data);
    // Handle form submission logic (e.g., sending data to the backend)
    console.log("Data: ", data)
  };

  useEffect(() => {
    setZipcodeLoading(true);
    try {
      let zipcodeResult = ZipCodeService.fetchGeocodeFromZip(watchZipcode);
      zipcodeResult.then((result) => {
        if(result?.display_name) {
          setZipcodeResponse(result.display_name);
        } else {
          setZipcodeResponse(null);
        }
      })
  } catch (e: any) {
    setFormError(e);
  } finally {
    setZipcodeLoading(false);
  }

  }, [watchZipcode])

  return (
    <>
    <TopNav user={user} />
    <div className="flex justify-center items-center h-screen w-full">
  <Card className="lg:w-3/5 transition-colors sm:w-11/12 divide-y">
  <CardHeader className="md:ml-8 ml-6 mt-8">
    <span className="text-2xl">New listing</span>
  </CardHeader>
    <form onSubmit={handleSubmit(onSubmit)} className="w-11/12 mx-auto p-4 transition-colors">
      <div className="mb-4">
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
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

      <div className="mb-4">
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
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

      <div className="mb-4">
        <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price ($)</label>
        <Input
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

      <div className="mb-4">
        <label htmlFor="zipcode" className="block text-sm font-medium text-gray-700">Zipcode</label>
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
        {(!errors.zipcode && zipcodeResponse) &&  <p className="text-slate-500 text-sm">{zipcodeResponse}</p>}
        {errors.zipcode && <p className="text-red-500 text-sm">{errors.zipcode.message}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
        <Select
          id="category"
          label="Select a category"
          {...register("category")}
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

      <div className="mb-4">
        <label htmlFor="images" className="block text-sm font-medium text-gray-700">Upload Images</label>
        <input
          type="file"
          id="images"
          {...register("images")}
          accept="image/*"
          multiple
          onChange={handleImageChange}
          className={`mt-1 block w-full ${errors.images ? "border-red-500" : ""}`}
        />
        {errors.images && <p className="text-red-500 text-sm">{errors.images.message}</p>}
      </div>

      <div className="mb-4">
        {imagePreviews.length > 0 && (
          <ImageGallery
            items={imagePreviews.map((src) => ({ original: src, thumbnail: src }))}
            showThumbnails={true}
            showFullscreenButton={false}
            showPlayButton={false}
          />
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Create Listing
      </button>
    </form>
    </Card>
    </div>
    </>
  );
}