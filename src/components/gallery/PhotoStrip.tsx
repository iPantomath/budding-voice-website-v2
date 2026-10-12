import React from "react";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/utils/cn";

export interface PhotoStripItem {
  src: string;
  alt: string;
  caption?: string;
}

export interface PhotoStripProps {
  items: PhotoStripItem[];
  className?: string;
}

const PhotoStrip = React.forwardRef<HTMLDivElement, PhotoStripProps>(
  ({ items, className }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4",
          className
        )}
      >
        {items.map((item, index) => (
          <Reveal
            key={item.src}
            index={index}
            delay={0.04}
            className={cn(index === 0 && "col-span-2 row-span-2 sm:col-span-1")}
          >
            <div
              className={cn(
                "group relative w-full overflow-hidden rounded-xl bg-light-grey",
                index === 0 ? "aspect-[4/5] sm:aspect-[3/4]" : "aspect-square"
              )}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(min-width: 640px) 33vw, 50vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {item.caption && (
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                  <p className="text-xs font-medium text-white sm:text-sm">
                    {item.caption}
                  </p>
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    );
  }
);

PhotoStrip.displayName = "PhotoStrip";

export { PhotoStrip };
