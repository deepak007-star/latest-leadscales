import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  bgColor?: string;
  id?: string;
}

export default function SectionWrapper({
  children,
  className,
  bgColor,
  id,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn("section-padding", bgColor, className)}
    >
      <div className="container-custom">{children}</div>
    </section>
  );
}
