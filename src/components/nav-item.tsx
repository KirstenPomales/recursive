import Link from "next/link";
import { cn } from "@/lib/utils";

interface NavItemProps {
  href: string;
  label: string;
  className?: string;
}

export function NavItem({ href, label, className }: NavItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        "flex cursor-pointer items-center font-bold text-black transition-colors hover:bg-primary hover:text-white px-2 py-1 border-2 border-transparent hover:border-black hover:shadow-neo text-sm",
        className,
      )}
    >
      {label}
    </Link>
  );
}
