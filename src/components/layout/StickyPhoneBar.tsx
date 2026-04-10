"use client";

import { PhoneIcon } from "@heroicons/react/24/solid";
import { ChatBubbleLeftIcon } from "@heroicons/react/24/solid";
import { PHONE_NUMBER } from "@/lib/constants";
import { useScrollDirection } from "@/hooks/useScrollDirection";

export default function StickyPhoneBar() {
  const { scrollY } = useScrollDirection();

  if (scrollY < 400) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-neutral-200 shadow-lg">
      <div className="grid grid-cols-2 divide-x divide-neutral-200">
        <a
          href={`tel:${PHONE_NUMBER}`}
          className="flex items-center justify-center gap-2 py-4 bg-accent-500 text-white font-semibold hover:bg-accent-600 transition-colors"
        >
          <PhoneIcon className="h-5 w-5" />
          Call Now
        </a>
        <a
          href="/contact"
          className="flex items-center justify-center gap-2 py-4 bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors"
        >
          <ChatBubbleLeftIcon className="h-5 w-5" />
          Free Quote
        </a>
      </div>
    </div>
  );
}
