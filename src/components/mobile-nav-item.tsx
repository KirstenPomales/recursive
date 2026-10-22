import Link from "next/link";
import { cn } from "@/lib/utils";

interface MobileNavItemProps {
  href: string;
  label: string;
  className?: string;
}

export function MobileNavItem({ href, label, className }: MobileNavItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        "flex w-full cursor-pointer items-center p-2 font-bold text-black hover:bg-primary hover:text-white border-b-2 border-transparent hover:border-black transition-colors",
        className,
      )}
    >
      {label}
    </Link>
  );
}
