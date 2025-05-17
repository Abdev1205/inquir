import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface SingleLinkProps {
  label: string;
  icon?: React.ReactNode;
  path: string;
}

export const SingleLink: React.FC<SingleLinkProps> = ({
  label,
  icon,
  path,
}) => {
  const pathname = usePathname();

  const isActive = pathname === path;

  return (
    <Link
      href={path}
      className={`flex items-center gap-[.3rem] px-[.5rem] py-[.3rem]  font-open-sans font-[400] duration-300 ${
        isActive ? "text-white/80 " : "text-white/60 hover:text-white/80"
      }`}
    >
      {icon && <span className="text-lg">{icon}</span>}
      <span>{label}</span>
    </Link>
  );
};
