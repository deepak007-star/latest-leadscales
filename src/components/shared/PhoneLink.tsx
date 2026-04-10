import { PhoneIcon } from "@heroicons/react/24/solid";
import { PHONE_NUMBER, PHONE_DISPLAY } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface PhoneLinkProps {
  className?: string;
  showIcon?: boolean;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
};

export default function PhoneLink({
  className,
  showIcon = true,
  size = "md",
}: PhoneLinkProps) {
  return (
    <a
      href={`tel:${PHONE_NUMBER}`}
      className={cn(
        "inline-flex items-center gap-2 font-semibold text-primary-600 hover:text-primary-700 transition-colors",
        sizes[size],
        className
      )}
    >
      {showIcon && <PhoneIcon className="h-5 w-5" />}
      {PHONE_DISPLAY}
    </a>
  );
}
