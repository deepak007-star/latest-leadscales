import { StarIcon } from "@heroicons/react/24/solid";
import { StarIcon as StarOutline } from "@heroicons/react/24/outline";

interface StarRatingProps {
  rating: number;
  className?: string;
}

export default function StarRating({ rating, className }: StarRatingProps) {
  return (
    <div className={`flex items-center gap-0.5 ${className || ""}`}>
      {[1, 2, 3, 4, 5].map((star) =>
        star <= rating ? (
          <StarIcon key={star} className="h-5 w-5 text-yellow-400" />
        ) : (
          <StarOutline key={star} className="h-5 w-5 text-yellow-400" />
        )
      )}
    </div>
  );
}
