import { cn } from "@/lib/utils";

interface GradientTextProps {
  children: React.ReactNode;
  as?: "span" | "h1" | "h2" | "h3";
  className?: string;
}

export default function GradientText({
  children,
  as: Tag = "span",
  className,
}: GradientTextProps) {
  return (
    <Tag
      className={cn(
        "bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-accent-500",
        className
      )}
    >
      {children}
    </Tag>
  );
}
