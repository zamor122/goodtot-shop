"use client"

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
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

const schema = object().shape({
  title: string().required("Title is required"),
  description: string().required("Description is required"),
  price: number().positive("Price must be a positive number").required("Price is required"),
  zipcode: string().matches(/^\d{5}$/, "Must be a valid 5-digit zipcode").required("Zipcode is required"),
  category: string().oneOf(categories, "Select a valid category").required("Category is required"),
  images: array().of(string()).test("required", "At least one image is required", (value) => value && value.length > 0),
});

export default function ListingForm() {
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const { register, handleSubmit, watch, formState: { errors } } = useForm<ListingFormInputs>({
    resolver: yupResolver(schema),
  });

  const watchImages = watch("images");

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
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-4 bg-white shadow-md">
      <div className="mb-4">
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
        <input
          id="title"
          {...register("title")}
          className={`mt-1 block w-full ${errors.title ? "border-red-500" : ""}`}
        />
        {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          id="description"
          {...register("description")}
          className={`mt-1 block w-full ${errors.description ? "border-red-500" : ""}`}
        />
        {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price ($)</label>
        <input
          type="number"
          id="price"
          {...register("price")}
          className={`mt-1 block w-full ${errors.price ? "border-red-500" : ""}`}
        />
        {errors.price && <p className="text-red-500 text-sm">{errors.price.message}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="zipcode" className="block text-sm font-medium text-gray-700">Zipcode</label>
        <input
          id="zipcode"
          {...register("zipcode")}
          className={`mt-1 block w-full ${errors.zipcode ? "border-red-500" : ""}`}
        />
        {errors.zipcode && <p className="text-red-500 text-sm">{errors.zipcode.message}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
        <select
          id="category"
          {...register("category")}
          className={`mt-1 block w-full ${errors.category ? "border-red-500" : ""}`}
        >
          <option value="">Select a category</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
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
  );
}