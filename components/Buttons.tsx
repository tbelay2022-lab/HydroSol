import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

export function PrimaryButton({
  href,
  children,
  download,
}: {
  href: string;
  children: ReactNode;
  download?: boolean;
}) {
  return (
    <Link
      href={href}
      download={download}
      className="group inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-[15px] font-semibold text-white transition-all hover:bg-leaf hover:shadow-[0_10px_28px_rgba(76,175,80,0.35)]"
    >
      {children}
      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
    </Link>
  );
}

export function GhostButton({
  href,
  children,
  onDark = false,
  download,
}: {
  href: string;
  children: ReactNode;
  onDark?: boolean;
  download?: boolean;
}) {
  return (
    <Link
      href={href}
      download={download}
      className={`group inline-flex items-center gap-2 rounded-full border px-6 py-3.5 text-[15px] font-semibold transition-all ${
        onDark
          ? "border-white/30 text-white hover:border-leaf hover:bg-leaf hover:text-white"
          : "border-brand/30 text-brand hover:border-leaf hover:bg-leaf hover:text-white"
      }`}
    >
      {children}
      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
    </Link>
  );
}
