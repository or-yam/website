"use client";

import { useEffect } from "react";

type Props = {
  error: Error & { digest?: string };
};

export default function Error({ error }: Props) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center">
      <h2>Something went wrong 😞</h2>
    </div>
  );
}
