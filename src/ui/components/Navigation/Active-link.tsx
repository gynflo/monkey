import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo } from "react";

interface Props {
  href: string;
  children: React.ReactNode;
}

export function ActiveLink({ href, children }: Props) {
  const router = useRouter();

  const isActive = useMemo(
    () => router.pathname === href,
    [href, router.pathname]
  );

  return (
    <>
      <Link href={href} className={clsx(isActive && "text-primary font-bold")}>
        {children}
      </Link>
    </>
  );
}
