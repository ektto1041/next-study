"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface ClientLinkProps {
  carId: string;
}

export function ClientLink({ carId }: ClientLinkProps) {
  const router = useRouter();

  const onClick = () => {
    router.push(`/blog/${carId}`);
  };

  useEffect(() => {
    router.prefetch(`/blog/${carId}`);
  }, [carId, router]);

  return (
    <span
      style={{ cursor: "pointer", textDecorationLine: "underline" }}
      onClick={onClick}
    >
      {carId}
    </span>
  );
}
