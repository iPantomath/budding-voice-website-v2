import React from "react";
import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { cn } from "@/utils/cn";

export interface CoachCardProps {
  name: string;
  role: string;
  bio: string;
  specialisation?: string;
  image?: string;
  className?: string;
}

const getInitials = (name: string) =>
  name
    .replace(/^coach\s+/i, "")
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const CoachCard = React.forwardRef<HTMLDivElement, CoachCardProps>(
  ({ name, role, bio, specialisation, image, className }, ref) => {
    return (
      <Card ref={ref} className={cn("flex flex-col", className)}>
        <div className="relative mb-6 flex h-48 w-full items-center justify-center overflow-hidden rounded-md bg-gradient-to-br from-orange/15 via-orange/10 to-orange/5">
          {image ? (
            <Image
              src={image}
              alt={name}
              fill
              sizes="(min-width: 1024px) 320px, 90vw"
              className="object-cover"
            />
          ) : (
            <span
              aria-hidden="true"
              className="flex h-20 w-20 items-center justify-center rounded-full bg-orange text-2xl font-bold text-white shadow-md"
            >
              {getInitials(name)}
            </span>
          )}
        </div>

        <h3 className="mb-1 font-bold text-text-primary">{name}</h3>
        <p className="mb-4 text-sm font-medium text-orange">{role}</p>

        <p className="mb-4 text-sm leading-relaxed text-text-secondary flex-grow">
          {bio}
        </p>

        {specialisation && (
          <div className="border-t border-light-grey pt-4">
            <p className="text-xs font-medium text-text-secondary uppercase tracking-wide">
              Specialisation
            </p>
            <p className="mt-1 text-sm text-text-primary">{specialisation}</p>
          </div>
        )}
      </Card>
    );
  }
);

CoachCard.displayName = "CoachCard";

export { CoachCard };
