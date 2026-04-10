"use client";

import { useState } from "react";
import { ChatBubbleLeftRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import LeadForm from "@/components/shared/LeadForm";

export default function FloatingCTA() {
  const { scrollY } = useScrollDirection();
  const [isOpen, setIsOpen] = useState(false);

  if (scrollY < 600) return null;

  return (
    <div className="hidden md:block fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="mb-4 w-[380px] animate-slide-up">
          <div className="relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 z-10 p-1 rounded-full bg-neutral-100 hover:bg-neutral-200 transition-colors"
            >
              <XMarkIcon className="h-4 w-4 text-neutral-600" />
            </button>
            <LeadForm source="floating-cta" variant="compact" />
          </div>
        </div>
      )}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-primary-600 text-white p-4 rounded-full shadow-lg hover:bg-primary-700 transition-all hover:scale-110 animate-pulse"
        >
          <ChatBubbleLeftRightIcon className="h-6 w-6" />
        </button>
      )}
    </div>
  );
}
