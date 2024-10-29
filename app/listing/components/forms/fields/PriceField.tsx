import { ListingFormInputs } from "@/app/listing/new/page";
import { Input } from "@nextui-org/react";
import { FieldErrors, UseFormRegister, UseFormSetValue } from "react-hook-form";
import { useEffect } from "react";

interface IProps {
  register: UseFormRegister<ListingFormInputs>;
  errors: FieldErrors<ListingFormInputs>;
  setValue: UseFormSetValue<ListingFormInputs>;
}

export default function PriceField({ register, errors, setValue }: IProps) {

  // Function to format the input value as currency (with commas and no decimals)
  const formatCurrency = (value: string): string => {
    const numericValue = value.replace(/\D/g, ""); // Remove non-numeric characters
    const formattedValue = numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ","); // Add commas
    return formattedValue;
  };

  // Handler for input changes
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const inputValue = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    
    if (inputValue) {
      const numericValue = parseInt(inputValue, 10);

      // Prevent input values greater than 10,000
      if (numericValue > 10000) {
        setValue("price", 10000);
        e.target.value = `$10,000`; // Limit to 10,000
      } else {
        // Update internal form state without commas and format displayed value
        setValue("price", numericValue);
        e.target.value = `$${formatCurrency(inputValue)}`; // Format with $ and commas
      }
    } else {
      setValue("price", 0); // Handle empty input (reset)
      e.target.value = "$"; // Reset input display
    }
  };

  useEffect(() => {
    setValue("price", 0); // Initialize price value to 0
  }, [setValue]);

  return (
    <div>
      <label htmlFor="price" className="text-sm font-medium dark:text-gray-300">
        Price ($)
      </label>
      <Input
        type="text" // Keep this as text to handle currency formatting
        id="price"
        {...register("price", {
          required: {
            value: true,
            message: "Price is required",
          },
          onChange: (e) => handleInput(e), // Use custom handler for input changes
          max: {
            value: 10000,
            message: "Price must be less than $10,000",
          },
          min: {
            value: 1,
            message: "Price must be greater than $1 if the item is NOT free",
          },
        })}
        className={`mt-1 block w-full ${errors.price ? "border-red-500" : ""}`}
      />

      {errors.price && (
        <p className="text-red-500 text-sm">{errors.price.message}</p>
      )}
    </div>
  );
}
