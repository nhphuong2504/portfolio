import Image from "next/image";

interface AvatarProps {
  src: string | undefined;
  name: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeClasses = {
  sm: "h-16 w-16 sm:h-20 sm:w-20",
  md: "h-24 w-24 sm:h-32 sm:w-32",
  lg: "h-32 w-32 sm:h-40 sm:w-40 lg:h-48 lg:w-48",
};

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export function Avatar({ src, name, size = "lg", className = "" }: AvatarProps) {
  const sizeClass = sizeClasses[size];
  const initials = getInitials(name);

  if (src) {
    return (
      <div
        className={`relative overflow-hidden rounded-full ring-2 ring-editorial-border ring-offset-4 ring-offset-white shadow-card ${sizeClass} ${className}`}
      >
        <Image
          src={src}
          alt={`${name} headshot`}
          fill
          sizes="(max-width: 768px) 128px, 192px"
          className="object-cover"
          priority
        />
      </div>
    );
  }

  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-full bg-editorial-background ring-2 ring-editorial-border ring-offset-4 ring-offset-white font-display text-editorial-muted shadow-card ${sizeClass} ${className}`}
      aria-hidden
    >
      <span className="text-[0.4em] font-semibold tracking-tight">
        {initials}
      </span>
    </div>
  );
}
