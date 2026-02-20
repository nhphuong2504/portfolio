import Image from "next/image";

interface AboutImageProps {
  src: string | undefined;
  alt: string;
  className?: string;
}

export function AboutImage({ src, alt, className = "" }: AboutImageProps) {
  if (!src) return null;

  return (
    <div
      className={`relative aspect-[3/4] w-full min-w-0 max-w-[280px] shrink-0 overflow-hidden rounded-card ring-2 ring-editorial-border ring-offset-4 ring-offset-white shadow-card sm:max-w-[320px] ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 640px) 280px, 320px"
        className="object-cover object-top"
      />
    </div>
  );
}
