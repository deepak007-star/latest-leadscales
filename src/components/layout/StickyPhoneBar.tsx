"use client";

import { ChatBubbleLeftIcon } from "@heroicons/react/24/solid";
import { useScrollDirection } from "@/hooks/useScrollDirection";

export default function StickyPhoneBar() {
  const { scrollY } = useScrollDirection();

  if (scrollY < 400) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-neutral-200 shadow-lg">
      <div className="flex">
        <a
          href="/contact"
          className="flex items-center justify-center gap-2 py-4 w-full bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors"
        >
          <ChatBubbleLeftIcon className="h-5 w-5" />
          Free Quote
        </a>
      </div>
    </div>
  );
}
