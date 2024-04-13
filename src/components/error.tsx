"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  const { push } = useRouter();

  return (
    <div>
      <h2>App crashed</h2>
      <button
        onClick={
          () => push('/')
        }
      >
        Try again
      </button>
    </div>
  );
}
