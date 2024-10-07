import { useState } from "react";
import { Button } from "@nextui-org/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {StorageImage} from "@aws-amplify/ui-react-storage";

interface CarouselProps {
  images: string[];
}

// Should take in a single array of  listing's images to then map over them and create a carousel

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full">
      {/* Image container that resizes based on parent */}
      <div className="overflow-hidden relative w-full h-0 pb-[56.25%] rounded-lg shadow-lg">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="min-w-full h-full flex-shrink-0">
                <StorageImage
                  path={image}
                  alt={`Slide ${index}`}
                  className="w-full h-full object-cover"
                />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <Button
        size="sm"
        startContent={<ChevronLeft className="w-6 h-6" />}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-1"
        onClick={prevImage}
        aria-label="Previous image"
      />
      <Button
        size="sm"
        endContent={<ChevronRight className="w-6 h-6" />}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-1"
        onClick={nextImage}
        aria-label="Next image"
      />

      {/* Indicator dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-blue-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
