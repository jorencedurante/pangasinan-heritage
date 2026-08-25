"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

import Icon from "@/components/atoms/Icon";
import OptimizedImage from "@/components/atoms/OptimizedImage";

interface ImageLightboxProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
  className?: string;
  triggerClassName?: string;
}

export default function ImageLightbox({
  src,
  alt,
  width = 800,
  height = 600,
  priority = false,
  sizes,
  className = "",
  triggerClassName = "mt-6 block w-full cursor-zoom-in rounded-xl border-0 bg-transparent p-0 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700",
}: ImageLightboxProps) {
  const [isOpen, setIsOpen] = useState(false);

  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, close]);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label={`View full-size image of ${alt}`}
        aria-haspopup="dialog"
        className={triggerClassName}
      >
        <OptimizedImage
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          sizes={sizes}
          className={className}
        />
      </button>

      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          onClick={close}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close full-size image"
            autoFocus
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-gray-900 shadow-md transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <Icon name="x" size={20} />
          </button>

          <div
            onClick={(event) => event.stopPropagation()}
            className="flex max-h-[90vh] max-w-[95vw] items-center justify-center"
          >
            <Image
              src={src}
              alt={alt}
              width={width}
              height={height}
              sizes="95vw"
              priority
              className="h-auto max-h-[90vh] w-auto max-w-[95vw] object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
