"use client";

import { usePathname, useRouter } from "next/navigation";

function Location() {
  const pathname = usePathname();
  const pathShowCase = pathname.replace("/", "");
  const router = useRouter();

  return (
    <p className="capitalize text-dark-1 text-body-normal text-center max-xs:hidden">
      {pathShowCase}
    </p>
  );
}

export default Location;
